---
---
import CodeBlock from '@theme/CodeBlock';
import File from '!!raw-loader!./run-job.go';




# Run Jobs

## Enqueue a single job

<CodeBlock language="go" title="run-job.go">{File}</CodeBlock>

Enqueue the job with a HTTP POST request. 
This request could be triggered from a HTML form as well.
```
curl -X POST localhost:8080/add-job -d 'payload=custom-data'
```


**Output**
```
time=2024-06-15T18:47:16.518+02:00 level=INFO msg="process job with data" payload=custom-data traceID=2d0313c84d33f545a635a91e23393252 spanID=c89d79308de416e6 jobID=01J0ECQG0FXQ474E2RJS9TJTTW
```