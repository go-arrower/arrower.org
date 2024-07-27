---
---
import CodeBlock from '@theme/CodeBlock';
import File0 from '!!raw-loader!./save/repo.go';
import File1 from '!!raw-loader!./load/repo.go';




# Persist an InMemory Repository
:::warning
This is only recommended while prototyping 
and to run local demos **not** for production use.
:::


## Persist Repository

<CodeBlock language="go" title="main.go">{File0}</CodeBlock>


**Check filesystem**
```shell
cat /tmp/Entity.json
```

**Content**
```json
{
        "5eda35ed-544e-4d94-8981-97ceb866d4b6": {
                "ID": "5eda35ed-544e-4d94-8981-97ceb866d4b6",
                "Name": "Rosie Dickens"
        }
}                                                                                               
```


## Restore Repository Data

<CodeBlock language="go" title="main.go">{File1}</CodeBlock>


**Output**
```
[{5eda35ed-544e-4d94-8981-97ceb866d4b6 Rosie Dickens}]                                                                                             
```