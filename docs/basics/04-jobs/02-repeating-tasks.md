---
---

# Cron Alternatives
This document describes alternatives to the [Scheduler interface](../jobs#repeating-tasks). 
Arrower relies on jobs being scheduled by the job queue in the application.
If you want to run repeating tasks outside of the application this is possible.

On the one end of the spectrum are [kubernetes jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/)
and on the other end are crons that run directly inside the database.

Running a cron directly in the database can be a huge advantage,
as it allows to execute SQL statements directly without any overhead.
This is ideal for maintenance work or data aggregation pipelines.
The drawback is that your infrastructure might not support those extensions, 
in which case you can just use Arrower's `Scheduler`.




## Scheduling with pg_cron
Also consult the [official documentation](https://github.com/citusdata/pg_cron) of pg_cron.

```sql
-- Delete old data on Saturday at 3:30am (GMT)
SELECT cron.schedule('30 3 * * 6', $$DELETE FROM events WHERE event_time < now() - interval '1 week'$$);
 schedule
----------
       42

-- Vacuum every day at 10:00am (GMT)
SELECT cron.schedule('nightly-vacuum', '0 10 * * *', 'VACUUM');
 schedule
----------
       43

-- Change to vacuum at 3:00am (GMT)
SELECT cron.schedule('nightly-vacuum', '0 3 * * *', 'VACUUM');
 schedule
----------
       43

-- Stop scheduling jobs
SELECT cron.unschedule('nightly-vacuum' );
 unschedule 
------------
 t

SELECT cron.unschedule(42);
 unschedule
------------
          t

-- Vacuum every Sunday at 4:00am (GMT) in a database other than the one pg_cron is installed in
SELECT cron.schedule_in_database('weekly-vacuum', '0 4 * * 0', 'VACUUM', 'some_other_database');
 schedule
----------
       44

-- Call a stored procedure every 5 seconds
SELECT cron.schedule('process-updates', '5 seconds', 'CALL process_updates()');

-- Process payroll at 12:00 of the last day of each month
SELECT cron.schedule('process-payroll', '0 12 $ * *', 'CALL process_payroll()');
```

```
 ┌───────────── min (0 - 59)
 │ ┌────────────── hour (0 - 23)
 │ │ ┌─────────────── day of month (1 - 31) or last day of the month ($)
 │ │ │ ┌──────────────── month (1 - 12)
 │ │ │ │ ┌───────────────── day of week (0 - 6) (0 to 6 are Sunday to
 │ │ │ │ │                  Saturday, or use names; 7 is also Sunday)
 │ │ │ │ │
 │ │ │ │ │
 * * * * *
```

An easy way to create a cron schedule is: [crontab.guru](http://crontab.guru/).




### Postgres Image With pg_cron

You can use any (managed) database that has the pg_cron extension installed.
Alternatively, use the docker image `ghcr.io/go-arrower/postgres`

```shell
docker pull ghcr.io/go-arrower/postgres:latest
```

The image installs the extension into the default database `postges` and makes it available to your database,
as if it was installed there.

The image is regenerated every week, so that you might have the latest version of postgres and its base image available to you.

:::note
Link ADL on why this is.
Testing and limitations of pg_cron
:::

If you want to use the cron from a different user or database, you might have to fine-tune your setup:
1. Ensure your user can access the cron schema:
```sql
-- Inside the database where pg_cron is installed:
-- grant usage to regular user
GRANT USAGE ON SCHEMA cron TO your_username;
```
2. The Arrower migrations assume pg_cron is installed in the database `postgres` if this is not the case
   update the database used in the migrations, see [create_pg_cron_extension.up.sql](https://github.com/go-arrower/arrower/blob/master/postgres/migrations/000003_create_pg_cron_extension.up.sql)


### Limitations
pg_cron can only run in one database\
=> two dbs and migrations to manage (outside of the project)\
=> see hack to make it work with fdw




## Scheduling with TimescaleDB actions
https://docs.timescale.com/api/latest/actions/


### Limitations
Not included in the could licensing of TimescaleDB and only available in
the open source / self-host version.




## Inserting Jobs into the Database
The repeating tasks introduced above rely on and execute SQL statements only.
In some cases this might be to limiting for your needs.\
Any valid row in the database will be executed as a job. 
See the `PersistencePayload` to learn more about the payload format. 

```sql
INSERT INTO arrower.gue_jobs(job_id, created_at, updated_at, run_at, queue, job_type, priority, args)
VALUES (generate_ulid(), now(), now(), now(),
        '', 'MyJob', 0,
        (json_build_object(
                 'jobData', json_object('Payload' VALUE 'your-payload')
         ) #>> '{}')::BYTEA -- JSON can not be converted to BYTEA: convert to TEXT first via #>> Get JSON object at specified path as text
       );
``` 

**Scheduling Complex Tasks as Jobs**

If you need to execute more complex business logic, use the cron to insert a row into the jobs table.
This way the [Jobs](./jobs#inserting-jobs-into-the-database) system is taking over,
allowing you to perform any kind of operation without the limits of SQL.

```sql
SELECT cron.schedule('your-custom-cron', '* * * * *',
$$INSERT INTO arrower.gue_jobs(job_id, created_at, updated_at, run_at, queue, job_type, priority, args)
VALUES (
generate_ulid(), now(), now(), now(),
'', 'MyJob', 0,
(json_build_object('jobData', '{}') #>> '{}')::BYTEA);$$);
```