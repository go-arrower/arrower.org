---
---
import CodeBlock from '@theme/CodeBlock';
import RunJobFile from '!!raw-loader!./cron.go';



# Cron

## Schedule a repeating job

<CodeBlock language="go" title="cron.go">{RunJobFile}</CodeBlock>


### Output
```
time=2024-06-15T19:02:12.311+02:00 level=INFO msg="process job with data" payload="cron payload" traceID=4c37383f62cbbf8224abe785aa487d9f spanID=851d1b9da711fc99 jobID=01J0EDHFTWW6M775MF24HZ7E74
time=2024-06-15T19:02:13.313+02:00 level=INFO msg="process job with data" payload="cron payload" traceID=3a524a0ca29d9028b40be03702998f21 spanID=add68136e1c46162 jobID=01J0EDHFTWW6M775MF25PPE49R
time=2024-06-15T19:02:14.313+02:00 level=INFO msg="process job with data" payload="cron payload" traceID=b2b950cf3a96f3119c32cfd39768fda2 spanID=dd6ad5a42b26124d jobID=01J0EDHFTX833DHQA7YCGP3EM7
...
```