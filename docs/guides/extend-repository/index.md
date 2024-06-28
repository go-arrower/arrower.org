---
---
import CodeBlock from '@theme/CodeBlock';
import File from '!!raw-loader!./repo.go';




# Extend a Repository

To add methods to a repository that are not supported out of the box,
embed the repository and implement your missing methods.

<CodeBlock language="go" title="user.inmemoery.repository.go">{File}</CodeBlock>

