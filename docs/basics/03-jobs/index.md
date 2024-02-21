---
sidebar_position: 1
---




# Jobs

For everything that has to run in the background
(asynchronous): jobs, tasks, long-running operations, bulk processing,
cleanups, notifications, ect. 
It is focused on developer convenience and creating a DDD and Clean Architecture oriented application 
that is easy to understand, extend, and maintain. There is no need to mix serialisation logic within your domain layer.

Works with Postgres to keep the stack of the application small.

:::caution 
The use of PostgreSQL will have very serious implications on what is realistically possible with this setup
in terms of scale but probably totally fine for a small to medium-sized app.
:::




## Interface and Characteristics

```go
type Enqueuer interface {
	Enqueue(context.Context, Job, ...JobOpt) error
}

type Queue interface {
	Enqueuer

	RegisterJobFunc(func (ctx context.Context, job Job) error) error
	Shutdown(context.Context) error
}
```

Key characteristics
* Exactly once guarantee for jobs (no need to deal with distributed transactions or 2X protocolls)
* Scheduling of jobs
* Automatic retries on job or worker failure
* Different Queues
* Different priorities per queue
* Visibility into the queues and jobs statuses
* List current workers per queue




## Enqueue Jobs
```go
var jq jobs.Enqueuer

// enqueue a single job
_ = jq.Enqueue(ctx, myJob{Payload: 1})

// enqueue multiple jobs
_ = jq.Enqueue(ctx, []myJob{{Payload: 1}, {Payload: 2}})

// enqueue multiple jobs of different kinds
_ = jq.Enqueue(ctx, []any{myJob{Payload: 1}, otherJob{}})
```

[See working example](https://github.com/go-arrower/arrower/blob/master/jobs/jobs.business_test.go)

* If the `ctx` contains a transaction, it is used to persist the job to the database. 
  Keeping your job consistent with your application data.


### Scheduling Jobs
```go
_ = jq.Enqueue(ctx, myJob{}, jobs.WithRunAt(time.Now().Add(10*time.Minute)))
```

### Prioritising Jobs
```go
// a lower number means a higher priority
_ = jq.Enqueue(ctx, myJob{}, jobs.WithPriority(-1))
```

### Inserting Jobs into the Database
```sql
INSERT INTO arrower.gue_jobs(job_id, created_at, updated_at, run_at, queue, job_type, priority, args)
VALUES (generate_ulid(), now(), now(), now(),
        '', 'MyJob', 0,
        (json_build_object(
            'jobData', '{}'
         ) #>> '{}')::BYTEA -- JSON can not be converted to BYTEA: convert to TEXT first
        );
```




## Process Jobs
Each job is processed asynchronously in its own worker go routine.
To be able to process jobs it is important to register a `JobFunc` on the appropriate queue.

The function has to have the signature of `func(ctx context.Context, job YourJobType) error`
```go
var jq jobs.Queue

_ = jq.RegisterJobFunc(func(ctx context.Context, job myJob) error {
	// process your job here...
	
	return nil
}) 
```

* Returning an error will reschedule the job with an exponential backoff
* The `ctx` contains a transaction the job is running inside, so you can keep all your operations consistent
  * `tx, txOk := ctx.Value(postgres.CtxTX).(pgx.Tx)`
* A call to `RegisterJobFunc` does start the worker pool after a certain time. If the worker poll got started already,
  subsequent calls to `RegisterJobFunc` will shut it down and restart it automatically blocking your call for that time.




## Different Queues
Arrower supports multiple job queues, but each queue has to be instantiated. If no explicit queue name is
set, the default queue is used.

```go
jq, err := jobs.NewPostgresJobs(alog.NewNoopLogger(), noop.NewMeterProvider(), noop.NewTracerProvider(), pgHandler.PGx,
    jobs.WithQueue("queueName"), // set the name of the queue you want to run
)
```

Each queue can be configured with these optional options. 

| Option                    | Default              | Behaviour                                            |
|---------------------------|----------------------|------------------------------------------------------|
| `WithQueue`               | `<empty>`            | Set the name of the queue                            |
| `WithPollInterval`        | 5 seconds            | Set the interval to query the database for new jobs. |
| `WithPoolSize`            | 10                   | Set the amount of workers                            |
| `WithPoolName`            | a random name        | Set the a name for this worker pool instance         |
| `WithWorkerPollStrategy`  | PriorityPollStrategy | Set the  poll strategy                               |

The queue is instrumented to give you [observability](./observability) out of the box. 
You'll have logs, metrics, and traces available for you.




## Testing
As the Job's handlers are just functions you can test them normally, like you would do anyway.

What is remaining is to ensure the right Jobs get enqueued on the emitting site.
For this an in memory implementation of the `jobs.Queue` interface is available, you can use in tests. It comes
with some additional methods, to make testing easier:

1. Custom assertions for the job queue
```go
  jq := jobs.NewTestingJobs()
  jassert := jq.Assert(t)

  // asserts the queue is empty
  jassert.Empty()

  _ = jq.Enqueue(ctx, myJob{})

  // asserts the queue is not empty
  jassert.NotEmpty()

  // asserts the queue has exactly one Job of type `myJob`
  jassert.Queued(myJob{}, 1)

  // asserts the queue has 1 Job enqueued
  jassert.QueuedTotal(1)
```

2. Custom test helpers beyond the `jobs.Queue` interface
```go
  jq := jobs.NewTestingJobs()

  // get a Job without processing it, to assert Job details.
  job := queue.GetFirstOf(myJob{}).(myJob)
  assert.Equal(t, "myName", job.Name)

  // resets the queue to be empty
  jq.Reset() 
```


## UI & Observability

See [Observability for more details](/docs/basics/observability)

<img src={require('./queue-otel-tracing.png').default} />

- Jobs integrate with the observability setup of Arrower
- The originating span is persisted and referenced in each Job run
- Failing Job runs are marked and retried automatically