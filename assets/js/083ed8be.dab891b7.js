"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[918],{6059:(e,t,n)=>{n.r(t),n.d(t,{Pyramid:()=>c,Validation:()=>d,assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var s=n(5893),i=n(1151);const r={title:"Methodik",toc_min_heading_level:2,toc_max_heading_level:6},o="Methodik",l={type:"mdx",permalink:"/methodik",source:"@site/src/pages/methodik.md",title:"Methodik",description:"Recommendations. It's required you think for yourself.",frontMatter:{title:"Methodik",toc_min_heading_level:2,toc_max_heading_level:6},unlisted:!1},a={},d=()=>{const e={div:"div",img:"img",...(0,i.a)()};return(0,s.jsx)(e.div,{children:(0,s.jsx)(e.img,{src:n(258).Z,alt:"validation per layer",style:{width:"60%"}})})},c=()=>{const e={br:"br",div:"div",img:"img",li:"li",span:"span",ul:"ul",...(0,i.a)()};return(0,s.jsxs)(e.div,{children:[(0,s.jsx)(e.img,{src:n(9163).Z,alt:"schema of testing pyramid",style:{width:"60%",float:"right"}}),(0,s.jsxs)(e.span,{children:["Arrower is using the following terminology, and the picture at the right is only a sketch of the dynamics of the testing pyramid.",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{}),(0,s.jsxs)(e.ul,{children:[(0,s.jsx)(e.li,{children:"Manual"}),(0,s.jsx)(e.li,{children:"UI"}),(0,s.jsx)(e.li,{children:"E2E"}),(0,s.jsx)(e.li,{children:"Integration"}),(0,s.jsx)(e.li,{children:"Unit"})]})]}),(0,s.jsx)(e.div,{style:{clear:"both"}})]})},h=[{value:"Validation",id:"validation",level:2},{value:"Testing",id:"testing",level:2},{value:"Methods and Practices",id:"methods-and-practices",level:3},{value:"Use Go Testing Toolchain",id:"use-go-testing-toolchain",level:4},{value:"Testing Pyramid",id:"testing-pyramid",level:4},{value:"Definition of Unit Under Test",id:"definition-of-unit-under-test",level:4},{value:"Blackbox Testing",id:"blackbox-testing",level:4},{value:"Nest Cases With Subtests",id:"nest-cases-with-subtests",level:4},{value:"Table Driven Tests / Parameterised Tests",id:"table-driven-tests--parameterised-tests",level:4},{value:"Use Assert Library",id:"use-assert-library",level:4},{value:"Avoid Mocks",id:"avoid-mocks",level:4},{value:"Test Fixtures",id:"test-fixtures",level:4},{value:"Golden Files",id:"golden-files",level:4},{value:"Test Flags",id:"test-flags",level:4},{value:"Avoid Global State",id:"avoid-global-state",level:4},{value:"Testhelpers",id:"testhelpers",level:4},{value:"Testing as Public API",id:"testing-as-public-api",level:4},{value:"Run Tests",id:"run-tests",level:4},{value:"Testing is a Mindset",id:"testing-is-a-mindset",level:4},{value:"Resources",id:"resources",level:3},{value:"Notes on additional topics",id:"notes-on-additional-topics",level:3}];function u(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"methodik",children:"Methodik"}),"\n",(0,s.jsx)(t.p,{children:"Recommendations. It's required you think for yourself."}),"\n",(0,s.jsx)(t.p,{children:"It's important to understand that this is just one view.\nYou might find parts of it useful but also have your own experience, fondness, and approach.\nThat is fine!\nArrower wants to support, so you can do as you like."}),"\n",(0,s.jsx)(t.h2,{id:"validation",children:"Validation"}),"\n",(0,s.jsx)(t.p,{children:"Asking where to put validation is like asking how many pushups Chuck Norris can do.\nThe obvious answer is he can do them all.\nSimilarly, validation happens at all the layers."}),"\n",(0,s.jsx)(t.p,{children:"In the different layers different validations are appropriate.\nFor example a typical web application needs different validation on\nall the layers depending on the purpose of the layer."}),"\n","\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(t.p,{children:"What are your drivers that require you to test?\nAnd on which granularity do you want to test?\nAt which time do you test?\nAre you working on a prototype or a multi-team enterprise software system?"}),"\n",(0,s.jsx)(t.p,{children:"There are many reasons and goals to test for:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Correctness"}),"\n",(0,s.jsx)(t.li,{children:"Security"}),"\n",(0,s.jsx)(t.li,{children:"Performance"}),"\n",(0,s.jsx)(t.li,{children:"Degree of distribution of the system under test"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["From Arrower's perspective, the goal of testing is to ",(0,s.jsx)(t.strong,{children:"feel confident about deploying to production"}),".",(0,s.jsx)(t.br,{}),"\n","With that here are some arrows, and you go and use them."]}),"\n",(0,s.jsx)(t.h3,{id:"methods-and-practices",children:"Methods and Practices"}),"\n",(0,s.jsx)(t.h4,{id:"use-go-testing-toolchain",children:"Use Go Testing Toolchain"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// run all unit tests\ngo test ./...\n\n// run all unit tests with the race detector\ngo test -race ./...\n\n// define tags to isolate long running or expensive tests\ngo test -race --tags="integration" ./...\n\n// get coverage reports\ngo test -race --tags="integration" ./... -coverprofile cover.out\ngo tool cover -html=cover.out -o cover.html; xdg-open cover.html\ngo tool cover -func cover.out | grep total:\n'})}),"\n",(0,s.jsx)(t.h4,{id:"testing-pyramid",children:"Testing Pyramid"}),"\n",(0,s.jsx)(t.p,{children:"The style, completeness, and number of test cases might also depend on which phase your project is in at any given point,\nwhile prototyping you will want to employ a different testing strategy than when you're maintaining an application."}),"\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(t.h4,{id:"definition-of-unit-under-test",children:"Definition of Unit Under Test"}),"\n",(0,s.jsx)(t.p,{children:"Answering this question for you will direct your efforts on where and how much to test."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Focus on the public API over implementation details"}),"\n",(0,s.jsx)(t.li,{children:"Find the right amount of tests for the right level of the testing pyramid"}),"\n",(0,s.jsxs)(t.li,{children:["Enabled by ",(0,s.jsx)(t.a,{href:"#blackbox-testing",children:"Blackbox Testing"})]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"blackbox-testing",children:"Blackbox Testing"}),"\n",(0,s.jsx)(t.p,{children:"Blackbox testing prevents from testing implementation details."}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Bad"}),(0,s.jsx)("th",{children:"Good"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"package foo\n\nfunc TestNew(t *testing.T) {\n    s := New()\n\t\n    //...\n}\n"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"package foo_test\n\nfunc TestNew(t *testing.T) {\n    s := foo.New()\n  \n    //...\n}\n"})})})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"testpackage"})," linter to ensure always testing the public api of a Go package == as the ",(0,s.jsx)(t.a,{href:"#definition-of-unit-under-test",children:"System Under Test"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Whitebox testing has its place, use it where necessary.\nE.g. when the complexity of a function warrants it.\nThe main goal is support easy refactoring,\nso don't clue to that test and consider marking it as expendable.\n",(0,s.jsx)(t.strong,{children:"If it fails, feel free to delete it."})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"package foo\n\n// white box test. if it fails, feel free to delete it\nfunc TestNew(t *testing.T) {\n    // ...\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If there are a lot of white box test cases, consider grouping them into their own file, by adding a ",(0,s.jsx)(t.code,{children:"_wb_test.go"})," postfix.\nSuch that the black box and white box tests are easier to separate and focus can be applied to the right failing tests"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ ls\nfoo.go\nfoo_test.go\nfoo_wb_test.go\n"})}),"\n",(0,s.jsx)(t.h4,{id:"nest-cases-with-subtests",children:"Nest Cases With Subtests"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Name each subtest"}),"\n",(0,s.jsx)(t.li,{children:"Subtests can nest further"}),"\n",(0,s.jsx)(t.li,{children:"Subtests can share test preparations"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package foo_test\n\nfunc TestNew(t *testing.T) {\n    s := foo.New()\n\n    t.Run("a", func(t *testing.T) {\n      //...\n    })\n  \n    t.Run("b", func(t *testing.T) {\n      //...\n    })\n}\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Target and run individual subtests ",(0,s.jsx)(t.code,{children:"go test -run=TestNew/a"})]}),"\n",(0,s.jsx)(t.li,{children:"The Go tool output lists all the run subtests"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"table-driven-tests--parameterised-tests",children:"Table Driven Tests / Parameterised Tests"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Good to visually to see easily if all cases are covered"}),"\n",(0,s.jsx)(t.li,{children:"Setup table driven tests even for one example,\nas it will be so easy to extend.\nSetting up table driven tests later on is so hard to do it if it is not there already"}),"\n",(0,s.jsx)(t.li,{children:"Name each subtest (self describing tests)"}),"\n",(0,s.jsx)(t.li,{children:"In case of a regression, add a test case easily"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'func TestAdd(t *testing.T) {\n    tests := map[string]struct{ a, b, res int }{\n        "add": {1, 1, 2},\n    }\n    \n    for name, tt := range tests {\n        t.Run(name, func(t *testing.T) {\n            //...\n        })\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"use-assert-library",children:"Use Assert Library"}),"\n",(0,s.jsxs)(t.p,{children:["Don't use the ",(0,s.jsx)(t.code,{children:"got != expected"})," pattern introduced by Go, use an assertion library."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"go get github.com/stretchr/testify\n"})}),"\n",(0,s.jsx)(t.p,{children:"The assert package provides some helpful methods that allow you to write better test code in Go."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Prints friendly, easy to read failure descriptions"}),"\n",(0,s.jsx)(t.li,{children:"Allows for very readable code"}),"\n",(0,s.jsx)(t.li,{children:"Optionally annotate each assertion with a message"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package foo_test\n\nimport (\n  "testing"\n  "github.com/stretchr/testify/assert"\n)\n\nfunc TestNew(t *testing.T) {\n    assert := assert.New(t)\n\n    assert.Equal(123, 123, "they should be equal")\n    assert.NotEqual(123, 456, "they should not be equal")\n\t\n    assert.ErrorIs(err, foo.ErrExpected)\n\n    assert.Nil(object)\n    if assert.NotNil(object) {\n        assert.Equal("Something", object.Value)\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"avoid-mocks",children:"Avoid Mocks"}),"\n",(0,s.jsxs)(t.p,{children:["Prevent the use of mocks, as they make testing complicated and cumbersome\n\u21d2 Use real implementations like in memory implementations instead,\nsee ",(0,s.jsx)(t.a,{href:"/docs/basics/testing#unit-testing-with-repository-pattern",children:"Repository helper"})," or ",(0,s.jsx)(t.a,{href:"/docs/basics/jobs#testing",children:"Queue"})]}),"\n",(0,s.jsx)(t.p,{children:"Ideas to consider when testing more complicated things before reaching for a mock:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If testing a network service, start a copy of the service locally and open a proper network connection"}),"\n",(0,s.jsxs)(t.li,{children:["Use integration tests (against ",(0,s.jsx)(t.a,{href:"/docs/basics/testing#integration-testing",children:"running docker containers"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"(todo) See Subprocessing of Hashicorp"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"test-fixtures",children:"Test Fixtures"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"go test"})," sets the relative path so in the tests you can access local files, e.g. in ",(0,s.jsx)(t.code,{children:"testdata/fixtures"})]}),"\n",(0,s.jsxs)(t.li,{children:["Store testdata in ",(0,s.jsx)(t.code,{children:"testdata/testdata.go"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The Go compiler does not include data in any ",(0,s.jsx)(t.code,{children:"testdata"})," folder in the executable"]}),"\n",(0,s.jsxs)(t.li,{children:["For a small number of testdata, a ",(0,s.jsx)(t.code,{children:"testdata_test.go"})," in the same directory might be enough"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"(todo) Templating db fixture files"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"golden-files",children:"Golden Files"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For complex test output, so it can be read and worked with on its own, instead of in the test code."}),"\n",(0,s.jsxs)(t.li,{children:["Update the golden files via ",(0,s.jsx)(t.code,{children:"go test -update"})]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"test-flags",children:"Test Flags"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Test falgs work as flags for golden files, use them for expensive or slow tests"}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"go test -yourFlag"})}),"\n",(0,s.jsx)(t.li,{children:"Q: how does this compare or keep up with go build tags for e.g. integration or acceptance testing?"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"avoid-global-state",children:"Avoid Global State"}),"\n",(0,s.jsx)(t.h4,{id:"testhelpers",children:"Testhelpers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Never return an error => fail the test via the t methods."}),"\n",(0,s.jsx)(t.li,{children:"Use t.Helper (or enforce by Arrower linter recommendations)"}),"\n",(0,s.jsx)(t.li,{children:"Return closure for cleanup work"}),"\n",(0,s.jsx)(t.li,{children:"Fail at once functions:\ne.g. create an echo server to be proper test helpers,\nso they can fail in case of an issue (and don't have to ignore errors)"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"testing-as-public-api",children:"Testing as Public API"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"testing.go file or testing_*.go that is compiled with the actual program"}),"\n",(0,s.jsxs)(t.li,{children:["provide mocks, test harnesses, helpers ect. (how does this work with the testdata from above?)","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Prefix with ",(0,s.jsx)(t.code,{children:"Test"})," instead of ",(0,s.jsx)(t.code,{children:"New"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Test all the properties of the implementation e.g. Queue (postgres vs. in memory)"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"run-tests",children:"Run Tests"}),"\n",(0,s.jsx)(t.p,{children:"There are ways to make testing easy.\nBut it is essential to run the tests:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"regularly"}),"\n",(0,s.jsx)(t.li,{children:"locally"}),"\n",(0,s.jsx)(t.li,{children:"automated in the pipeline"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Prevent from skipping failing tests, as this lays the ground for more behaviour like it."}),"\n",(0,s.jsx)(t.h4,{id:"testing-is-a-mindset",children:"Testing is a Mindset"}),"\n",(0,s.jsx)("img",{src:n(7962).Z,alt:"Testing is a mindset"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(t.p,{children:["[1] ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=8hQG7QlcLBk",children:"https://www.youtube.com/watch?v=8hQG7QlcLBk"})," - Advanced Testing with Go by Hashimoto 2017",(0,s.jsx)(t.br,{}),"\n","[2] ",(0,s.jsx)(t.a,{href:"https://www.reddit.com/r/golang/comments/vfxs3u/beyond_hashimotos_advanced_testing_with_go/",children:"https://www.reddit.com/r/golang/comments/vfxs3u/beyond_hashimotos_advanced_testing_with_go/"})," - 2022 updates to [1]",(0,s.jsx)(t.br,{}),"\n","[3] ",(0,s.jsx)(t.a,{href:"https://quii.gitbook.io/learn-go-with-tests/",children:"https://quii.gitbook.io/learn-go-with-tests/"})," - Introduction into TDD and ideas on how to test complicated things like io or time"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"notes-on-additional-topics",children:"Notes on additional topics"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"high test coverage for application and business logic"}),"\n",(0,s.jsx)(t.li,{children:"Localise your tests, to keep them easy to read and debug in case of failure (over clever function calling in other files ect... prevent mental context building)"}),"\n",(0,s.jsxs)(t.li,{children:["Unconfigurable behaviour is a point of issue for tests => make structs configurable","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If you don't want to export: make the fields private and use whitebox testing"}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Test bool"})," so e.g. web app can pass auth login as same person (investigate if this is really a good idea in terms of security?)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"DeepEqual alternatives"}),"\n",(0,s.jsx)(t.li,{children:"TODO: create helper in tests to ensure Fields do not change unknowingly when mapping structs between layers (with golden file as reference)"}),"\n",(0,s.jsx)(t.li,{children:"Test data generation (?)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Zim Notes on testing\nWhat to test and what not to test? e.g. controller"})]})}function g(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7962:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/methodik-tester-6d1e785871c3b5db6bd53bfb5782a3ae.jpg"},258:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/methodik-validation-5b1402e3708644240821a1e0a1b1a66a.png"},9163:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/pyramid-fb70a76771013041e8425615d6b4d2d2.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);