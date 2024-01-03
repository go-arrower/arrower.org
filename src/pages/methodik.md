---
title: Methodik
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 6
---

# Methodik
Recommendations. It's required you think for yourself.




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

Use the linter `testpackage` to ensure always testing the api as a system under test.

Whitebox testing has its pace, use it where necessary. 
E.g. when the complexity of the functions warrants it. 
The main goal is support easy refactoring.
Consider a naming schema for test files that use whitebox testing by adding a `_wb_test.go` postfix. 


#### Nest Cases With Subtests
* Name each subtest
* Subtests can nest further
* Subtests can share shared test preparations
* Combines with [Use Go Testing Toolchain](#use-go-testing-toolchain)
  * Target individual subtests \
    `go test -run=TestAdd/add`
  * The Go tool output lists all the run subtests


#### Table Driven Tests / Parameterised Tests
* Good to visually to see easily if all cases are considered 
* Name each subtest (self describing tests)
* Setup table driven tests even for one example,
  as it will be so easy to extend. 
  Setting up table driven tests later on is so hard to do it if it is not there already
* In case of a regression, add a test case easily.

```go
func TestAdd(t *testing.T) {
    tests := map[string]struct{ a, b, res int }{
        "add": {1, 1, 2},
    }
    
    for name, tc := range tests {
        t.Run(name, func(t *testing.T) {
            //...
        })
    }
}
```


#### Use Assert Library
Don't use the got != expected pattern introduced by Go, use an assertion library, like `github.com/stretchr/testify`.


#### Avoid Mocks
Prevent the use of mocks, as they make testing complicated and cumbersome
⇒ Use in memory implementations instead, see [Repository helper](/docs/basics/testing#unit-testing) or [Queue](/docs/basics/jobs#testing)

Other steps to take:
* If testing a network service, start a copy of the service locally and open a proper network connection
* Use integration tests (against [running docker containers](/docs/basics/testing#integration-testing))
* See Subprocessing of Hashicorp


#### Test Fixtures
* Go test sets the relative path so in the tests you can access local files, e.g. in `testdata/fixtures`
* Store testdata in `testdata/testdata.go` or `./testdata_test.go` (should last one survive?)
* todo: templating db fixture files


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
* Use t.Helper (or enforce by arrower linter recommendations)
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
<img src={require('./methodik_tester.png').default} alt="Testing is a mindset"/>




---
### Notes on additional topics
* high test coverage for application and business logic
* Localise your tests, to keep them easy to read and debug in case of failure (over clever function calling in other files ect... prevent mental context building)
* Unconfigurable behaviour is a point of issue for tests => make structs configurable
  * If you don't want to export: make the fields private and use whitebox testing
  * `Test bool` so e.g. web app can pauth login as same person
* DeepEqual alternatives
* TODO: create helper in tests to ensure Fields do not change unknowingly when mapping structs between layers (with golden file as reference)
* Test data generation (?)

Zim Notes on testing
What to test and what not to test? e.g. controller

Testing as a mindset: img tester vs developer

### Resources
[1] https://www.youtube.com/watch?v=8hQG7QlcLBk - Advanced Testing with Go by Hashimoto 2017\
[2] https://www.reddit.com/r/golang/comments/vfxs3u/beyond_hashimotos_advanced_testing_with_go/ - 2022 updates to [1]
