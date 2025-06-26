---
---
import CodeBlock from '@theme/CodeBlock';
import File from '!!raw-loader!./cron.go';




# Cron

## Schedule a repeating job

<CodeBlock language="go" title="cron.go">{File}</CodeBlock>


**Output**
```
time=2024-06-15T19:02:12.311+02:00 level=INFO msg="process job with data" payload="cron payload" trace_id=4c37383f62cbbf8224abe785aa487d9f span_id=851d1b9da711fc99 job_id=01J0EDHFTWW6M775MF24HZ7E74
time=2024-06-15T19:03:12.313+02:00 level=INFO msg="process job with data" payload="cron payload" trace_id=3a524a0ca29d9028b40be03702998f21 span_id=add68136e1c46162 job_id=01J0EDHFTWW6M775MF25PPE49R
time=2024-06-15T19:04:12.313+02:00 level=INFO msg="process job with data" payload="cron payload" trace_id=b2b950cf3a96f3119c32cfd39768fda2 span_id=dd6ad5a42b26124d job_id=01J0EDHFTX833DHQA7YCGP3EM7
...
```