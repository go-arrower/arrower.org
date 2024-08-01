---
title: Methodik
toc_min_heading_level: 2
toc_max_heading_level: 6
---

# Methodik
Recommendations. It's required you think for yourself.

It's important to understand that this is just one view.
You might find parts of it useful but also have your own experience, fondness, and approach.
That is fine!
Arrower wants to support, so you can do as you like.




## Validation
Asking where to put validation is like asking how many pushups Chuck Norris can do.
The obvious answer is he can do them all.
Similarly, validation happens at all the layers.

In the different layers different validations are appropriate.
For example a typical web application needs different validation on
all the layers depending on the purpose of the layer.

export const Validation = () => (
<div>
    <img src={require('./methodik-validation.png').default}
         alt="validation per layer"
         style={{width: '60%'}} />
</div>
);

<Validation></Validation>
<br/>
<br/>




## Testing
What are your drivers that require you to test? 
And on which granularity do you want to test? 
At which time do you test?
Are you working on a prototype or a multi-team enterprise software system?

There are many reasons and goals to test for:
* Correctness
* Security
* Performance
* Degree of distribution of the system under test

From Arrower's perspective, the goal of testing is to **feel confident about deploying to production**.\
With that here are some arrows, and you go and use them.


### Methods and Practices


#### Use Go Testing Toolchain
```go
// run all unit tests
go test ./...

// run all unit tests with the race detector
go test -race ./...

// define tags to isolate long running or expensive tests
go test -race --tags="integration" ./...

// get coverage reports
go test -race --tags="integration" ./... -coverprofile cover.out
go tool cover -html=cover.out -o cover.html; xdg-open cover.html
go tool cover -func cover.out | grep total:
```


#### Testing Pyramid
The style, completeness, and number of test cases might also depend on which phase your project is in at any given point, 
while prototyping you will want to employ a different testing strategy than when you're maintaining an application.

export const Pyramid = () => (
<div>
    <img src={require('./pyramid.png').default}
         alt="schema of testing pyramid"
         style={{
            width: '60%',
            float: 'right',
    }} />
    <span>
        Arrower is using the following terminology,
        and the picture at the right is only a sketch of the dynamics of the testing pyramid. 
        <br/>
        <br/>
        <ul>
            <li>Manual</li>
            <li>UI</li>
            <li>E2E</li>
            <li>Integration</li>
            <li>Unit</li>
        </ul>
    </span>
    <div style={{clear:'both'}}></div>
</div>
);

<Pyramid></Pyramid>


#### Definition of Unit Under Test
Answering this question for you will direct your efforts on where and how much to test.

* Focus on the public API over implementation details
* Find the right amount of tests for the right level of the testing pyramid
* Enabled by [Blackbox Testing](#blackbox-testing)


#### Blackbox Testing
Blackbox testing prevents from testing implementation details.

<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>

```go
package foo

func TestNew(t *testing.T) {
    s := New()
	
    //...
}
```
</td><td>

```go
package foo_test

func TestNew(t *testing.T) {
    s := foo.New()
  
    //...
}
```
</td></tr>
</tbody></table>

Use the `testpackage` linter to ensure always testing the public api of a Go package == as the [System Under Test](#definition-of-unit-under-test).

Whitebox testing has its place, use it where necessary. 
E.g. when the complexity of a function warrants it. 
The main goal is support easy refactoring, 
so don't clue to that test and consider marking it as expendable.
**If it fails, feel free to delete it.**

```go
package foo

// white box test. if it fails, feel free to delete it
func TestNew(t *testing.T) {
    // ...
}
```

If there are a lot of white box test cases, consider grouping them into their own file, by adding a `_wb_test.go` postfix.
Such that the black box and white box tests are easier to separate and focus can be applied to the right failing tests

```shell
$ ls
foo.go
foo_test.go
foo_wb_test.go
```


#### Nest Cases With Subtests
* Name each subtest
* Subtests can nest further
* Subtests can share test preparations

```go
package foo_test

func TestNew(t *testing.T) {
    s := foo.New()

    t.Run("a", func(t *testing.T) {
      //...
    })
  
    t.Run("b", func(t *testing.T) {
      //...
    })
}
```

* Target and run individual subtests `go test -run=TestNew/a`
* The Go tool output lists all the run subtests


#### Table Driven Tests / Parameterised Tests
* Good to visually to see easily if all cases are covered
* Setup table driven tests even for one example,
  as it will be so easy to extend. 
  Setting up table driven tests later on is so hard to do it if it is not there already
* Name each subtest (self describing tests)
* In case of a regression, add a test case easily

```go
func TestAdd(t *testing.T) {
    tests := map[string]struct{ a, b, res int }{
        "add": {1, 1, 2},
    }
    
    for name, tt := range tests {
        t.Run(name, func(t *testing.T) {
            //...
        })
    }
}
```


#### Use Assert Library
Don't use the `got != expected` pattern introduced by Go, use an assertion library.
```shell
go get github.com/stretchr/testify
```

The assert package provides some helpful methods that allow you to write better test code in Go.
* Prints friendly, easy to read failure descriptions 
* Allows for very readable code
* Optionally annotate each assertion with a message


```go
package foo_test

import (
  "testing"
  "github.com/stretchr/testify/assert"
)

func TestNew(t *testing.T) {
    assert := assert.New(t)

    assert.Equal(123, 123, "they should be equal")
    assert.NotEqual(123, 456, "they should not be equal")
	
    assert.ErrorIs(err, foo.ErrExpected)

    assert.Nil(object)
    if assert.NotNil(object) {
        assert.Equal("Something", object.Value)
    }
}
```


#### Avoid Mocks
Prevent the use of mocks, as they make testing complicated and cumbersome
⇒ Use real implementations like in memory implementations instead,
see [Repository helper](/docs/basics/testing#unit-testing-with-repository-pattern) or [Queue](/docs/basics/jobs#testing)

Ideas to consider when testing more complicated things before reaching for a mock:
* If testing a network service, start a copy of the service locally and open a proper network connection
* Use integration tests (against [running docker containers](/docs/basics/testing#integration-testing))
* (todo) See Subprocessing of Hashicorp


#### Test Fixtures
* `go test` sets the relative path so in the tests you can access local files, e.g. in `testdata/fixtures`
* Store testdata in `testdata/testdata.go`
  * The Go compiler does not include data in any `testdata` folder in the executable
  * For a small number of testdata, a `testdata_test.go` in the same directory might be enough 
* (todo) Templating db fixture files


#### Golden Files
* For complex test output, so it can be read and worked with on its own, instead of in the test code.
* Update the golden files via `go test -update`


#### Test Flags
* Test falgs work as flags for golden files, use them for expensive or slow tests
* `go test -yourFlag`
* Q: how does this compare or keep up with go build tags for e.g. integration or acceptance testing?


#### Avoid Global State


#### Testhelpers
* Never return an error => fail the test via the t methods.
* Use t.Helper (or enforce by Arrower linter recommendations)
* Return closure for cleanup work
* Fail at once functions: 
  e.g. create an echo server to be proper test helpers,
  so they can fail in case of an issue (and don't have to ignore errors)


#### Testing as Public API
* testing.go file or testing_*.go that is compiled with the actual program
* provide mocks, test harnesses, helpers ect. (how does this work with the testdata from above?)
  * Prefix with `Test` instead of `New`
* Test all the properties of the implementation e.g. Queue (postgres vs. in memory)


#### Run Tests
There are ways to make testing easy. 
But it is essential to run the tests:
* regularly
* locally
* automated in the pipeline

Prevent from skipping failing tests, as this lays the ground for more behaviour like it.


#### Testing is a Mindset
<img src={require('./methodik-tester.jpg').default} alt="Testing is a mindset"/>
<br/>
<br/>


### Resources
[1] https://www.youtube.com/watch?v=8hQG7QlcLBk - Advanced Testing with Go by Hashimoto 2017\
[2] https://www.reddit.com/r/golang/comments/vfxs3u/beyond_hashimotos_advanced_testing_with_go/ - 2022 updates to [1]\
[3] https://quii.gitbook.io/learn-go-with-tests/ - Introduction into TDD and ideas on how to test complicated things like io or time


<br/>
<br/>
<br/>
<br/> 
---
---
---
### Notes on additional topics
* high test coverage for application and business logic
* Localise your tests, to keep them easy to read and debug in case of failure (over clever function calling in other files ect... prevent mental context building)
* Unconfigurable behaviour is a point of issue for tests => make structs configurable
  * If you don't want to export: make the fields private and use whitebox testing
  * `Test bool` so e.g. web app can pass auth login as same person (investigate if this is really a good idea in terms of security?)
* DeepEqual alternatives
* TODO: create helper in tests to ensure Fields do not change unknowingly when mapping structs between layers (with golden file as reference)
* Test data generation (?)

Zim Notes on testing
What to test and what not to test? e.g. controller
