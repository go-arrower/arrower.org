"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[2982],{9125:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(5893),r=n(1151);const i={},o="Testing",a={id:"basics/testing/index",title:"Testing",description:"Testing Backed in From the Get-Go",source:"@site/docs/basics/07-testing/index.md",sourceDirName:"basics/07-testing",slug:"/basics/testing/",permalink:"/docs/basics/testing/",draft:!1,unlisted:!1,editUrl:"https://github.com/go-arrower/arrower.org/tree/master/docs/basics/07-testing/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Traces",permalink:"/docs/basics/observability/traces"},next:{title:"Contexts",permalink:"/docs/context/"}},d={},l=[{value:"Testing Backed in From the Get-Go",id:"testing-backed-in-from-the-get-go",level:2},{value:"Convention",id:"convention",level:2},{value:"Semantic Assertions",id:"semantic-assertions",level:3},{value:"Unit Testing With Repository Pattern",id:"unit-testing-with-repository-pattern",level:2},{value:"Integration Testing",id:"integration-testing",level:2},{value:"Docker Images for Integration Testing",id:"docker-images-for-integration-testing",level:3}];function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(e.h2,{id:"testing-backed-in-from-the-get-go",children:"Testing Backed in From the Get-Go"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"\u2705 Unit - all packages come with unit testing abilities"}),(0,s.jsx)("li",{children:"\u23f3 Integration - helpers to make your integration tests easier"}),(0,s.jsx)("li",{children:"\ud83d\udca4 E2E"}),(0,s.jsx)("li",{children:"\ud83d\udca4 UI"}),(0,s.jsx)("li",{children:"Manual - always left to you"})]}),"\n",(0,s.jsx)(e.h2,{id:"convention",children:"Convention"}),"\n",(0,s.jsx)(e.p,{children:"All packages provide helpers to make testing easy"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Constructors for regular logic start with ",(0,s.jsx)(e.code,{children:"New"})]}),"\n",(0,s.jsxs)(e.li,{children:["Constructors for tests start with ",(0,s.jsx)(e.code,{children:"Test"}),".\nReturning objects that assist your code in being tested well."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"semantic-assertions",children:"Semantic Assertions"}),"\n",(0,s.jsxs)(e.p,{children:["Many packages come with specialised test helpers and assertions.\nThese can be used in combination with the assertions from\n",(0,s.jsx)(e.a,{href:"https://github.com/stretchr/testify",children:"stretchr/testify"}),"\nand the Go standard library."]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.a,{href:"/docs/basics/database/repository#testing",children:"Repository"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.a,{href:"/docs/basics/jobs#testing",children:"Queue"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.a,{href:"/docs/basics/observability/logging#testing",children:"Logger"})}),(0,s.jsx)(e.th,{children:"Renderer"}),(0,s.jsx)(e.th,{children:"Database"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Empty \u2705"}),(0,s.jsx)(e.td,{children:"Empty \u2705"}),(0,s.jsx)(e.td,{children:"Empty \u2705"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"NotEmpty \u2705"}),(0,s.jsx)(e.td,{children:"NotEmpty \u2705"}),(0,s.jsx)(e.td,{children:"NotEmpty \u2705"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Total"}),(0,s.jsx)(e.td,{children:"Total \u2705"}),(0,s.jsx)(e.td,{children:"Total"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Contains"}),(0,s.jsx)(e.td,{children:"Contains"}),(0,s.jsx)(e.td,{children:"Contains \u2705"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"NotContains"}),(0,s.jsx)(e.td,{children:"NotContains"}),(0,s.jsx)(e.td,{children:"NotContains \u2705"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"HasEntity (?)"}),(0,s.jsx)(e.td,{children:"HasJob (?)"}),(0,s.jsx)(e.td,{children:"HasLine (?)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"HasNotEntity (?)"}),(0,s.jsx)(e.td,{children:"HasNotJob (?)"}),(0,s.jsx)(e.td,{children:"NasNotLine (?)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Jobs \u2705"}),(0,s.jsx)(e.td,{children:"Lines \u2705"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Clear \u2705"}),(0,s.jsx)(e.td,{children:"String \u2705"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"GetFirst \u2705"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Get \u2705"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"GetFirstOf\u2705"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"GetOf \u2705"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Reset (?)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"unit-testing-with-repository-pattern",children:"Unit Testing With Repository Pattern"}),"\n",(0,s.jsx)(e.p,{children:"Unit tests come in many forms. Arrower provides you with a set of helpers that make your life easier."}),"\n",(0,s.jsx)(e.p,{children:"If you're using the repository pattern it is cumbersome to always implement an in memory copy of the repository.\nUse this helper to get a repository that comes with a lot of often used methods out of the box:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"var repo YourRepositoryType = repository.NewMemoryRepository[Entity, EntityID]()\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",metastring:'title="memory.repository.go"',children:"type Repository[E any, ID id] interface {\n    NextID(context.Context) (ID, error)\n    \n    Create(context.Context, E) error\n    Read(context.Context, ID) (E, error)\n    Update(context.Context, E) error\n    Delete(context.Context, E) error\n    \n    All(context.Context) ([]E, error)\n    AllByIDs(context.Context, []ID) ([]E, error)\n    FindAll(ctx context.Context) ([]E, error)\n    FindByID(context.Context, ID) (E, error)\n    FindByIDs(context.Context, []ID) (E, error)\n    Exists(context.Context, ID) (bool, error)\n    ExistsByID(context.Context, ID) (bool, error)\n    ExistAll(context.Context, []ID) (bool, error)\n    ExistByIDs(context.Context, []ID) (bool, error)\n    Contains(context.Context, ID) (bool, error)\n    ContainsID(context.Context, ID) (bool, error)\n    ContainsIDs(context.Context, []ID) (bool, error)\n    ContainsAll(context.Context, []ID) (bool, error)\n    \n    Save(context.Context, E) error\n    SaveAll(context.Context, []E) error\n    UpdateAll(context.Context, []E) error\n    Add(context.Context, E) error\n    AddAll(context.Context, []E) error\n    \n    Count(context.Context) (int, error)\n    Length(context.Context) (int, error)\n    Empty(context.Context) (bool, error)\n    IsEmpty(context.Context) (bool, error)\n    \n    DeleteByID(context.Context, ID) error\n    DeleteByIDs(context.Context, []ID) error\n    DeleteAll(context.Context) error\n    Clear(context.Context) error\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["It is implicitly assumed that the entity has a field named ",(0,s.jsx)(e.code,{children:"ID"})," with an underlying type of ",(0,s.jsx)(e.code,{children:"string"})," or ",(0,s.jsx)(e.code,{children:"int"}),".\nThat field will be used as the primary key.\nYou can change the field name:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'repo := repository.NewMemoryRepository[E, I](\n\trepository.WithIDField("YourPKField"),\n)\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The repository will probably not match all your needs, see how to\n",(0,s.jsx)(e.a,{href:"https://github.com/go-arrower/arrower/blob/master/repository/inmemory.example_extend_test.go",children:"extend"})," and\n",(0,s.jsx)(e.a,{href:"https://github.com/go-arrower/arrower/blob/master/repository/inmemory.example_overwrite_test.go",children:"overwrite or fine tune"}),"\nit, so it fits all your applications needs."]}),"\n",(0,s.jsx)(e.h2,{id:"integration-testing",children:"Integration Testing"}),"\n",(0,s.jsx)(e.p,{children:"Sometimes you just don't want to test against an in memory implementation and need to see if your application behaves\ncorrectly against the real database."}),"\n",(0,s.jsxs)(e.p,{children:["This pattern spins up a postgres database inside a docker container and removes the container after the test has\nfinished automatically.\nThe ",(0,s.jsx)(e.code,{children:"NewTestDatabase"})," method will ensure you can safely run all tests in parallel by:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Creating a new randomly named database for each test case"}),"\n",(0,s.jsx)(e.li,{children:"Performing schema migration"}),"\n",(0,s.jsx)(e.li,{children:"Seeding the database with test data"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["The testdata is seeded with the project ",(0,s.jsx)(e.a,{href:"https://github.com/go-testfixtures/testfixtures",children:"testfixtures"}),"\nand if an file ",(0,s.jsx)(e.code,{children:"testdata/fixtures/_common.yaml"})," exists it is automatically loaded. For additional data per test case\ntake a look at ",(0,s.jsx)(e.a,{href:"https://github.com/go-testfixtures/testfixtures#-single-file-on-multiple-tables",children:"multiple tables in one file"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'//go:build integration\n\npackage yourpackage_test\n\nvar pgHandler *tests.PostgresDocker\n\nfunc TestMain(m *testing.M) {\n\tpgHandler = tests.GetPostgresDockerForIntegrationTestingInstance()\n\n\t//\n\t// Run tests\n\tcode := m.Run()\n\n\tpgHandler.Cleanup()\n\tos.Exit(code)\n}\n\nfunc TestSomething(t *testing.T) {\n\tt.Parallel()\n\n\tpg := pgHandler.NewTestDatabase()\n\n\t// use pg to initialise your test dependencies like a postgres repository \n}\n\nfunc TestSomethingOther(t *testing.T) {\n\tt.Parallel()\n\n\t// load multiple additional test fixture files to seed the database\n\tpg := pgHandler.NewTestDatabase([]string{\n\t\t"testdata/fixtures/something-other-user.yaml",\n\t\t"testdata/fixtures/something-other-posts.yaml",\n    })\n\t\n\t_ = pg.PGx() // direct access to the pgx connection pool \n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"PrepareDatabase"})," method is similar to ",(0,s.jsx)(e.code,{children:"NewTestDatabase"})," but does not create a new database\nbut cleans the existing database!"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"All data is truncated"}),"\n",(0,s.jsx)(e.li,{children:"It cannot be used in parallel"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["If you depend on other services for your testing use the ",(0,s.jsx)(e.code,{children:"tests.StartDockerContainer"})," helper to start any service\ninside a docker container.\nCheck out the ",(0,s.jsx)(e.code,{children:"tests.GetPostgresDockerForIntegrationTestingInstance"})," to see it in action for the testing against a postgres\ndatabase as shown above."]}),"\n",(0,s.jsx)(e.h3,{id:"docker-images-for-integration-testing",children:"Docker Images for Integration Testing"}),"\n",(0,s.jsxs)(e.p,{children:["Arrower ships all images you would need to operate and test a setup.\nSee ",(0,s.jsx)(e.a,{href:"./jobs/alternatives#postgres-image-with-pg_cron",children:"Alternatives"})," on how to use the postgres image with a\npreinstalled ",(0,s.jsx)(e.code,{children:"pg_cron"})," extension already"]})]})}function x(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);