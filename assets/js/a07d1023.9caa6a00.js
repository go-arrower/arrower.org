"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[2982],{9125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(5893),o=n(1151);const s={},i="Testing",a={id:"basics/testing/index",title:"Testing",description:"Testing Backed into it From the Get Go",source:"@site/docs/basics/07-testing/index.md",sourceDirName:"basics/07-testing",slug:"/basics/testing/",permalink:"/docs/basics/testing/",draft:!1,unlisted:!1,editUrl:"https://github.com/go-arrower/arrower.org/tree/master/docs/basics/07-testing/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Traces",permalink:"/docs/basics/observability/traces"},next:{title:"Contexts",permalink:"/docs/context/"}},l={},c=[{value:"Testing Backed into it From the Get Go",id:"testing-backed-into-it-from-the-get-go",level:2},{value:"Unit Testing With Repository Pattern",id:"unit-testing-with-repository-pattern",level:2},{value:"Integration Testing",id:"integration-testing",level:2},{value:"Docker Images for Integration Testing",id:"docker-images-for-integration-testing",level:3}];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"testing",children:"Testing"}),"\n",(0,r.jsx)(t.h2,{id:"testing-backed-into-it-from-the-get-go",children:"Testing Backed into it From the Get Go"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Manual"}),(0,r.jsx)("li",{children:"\ud83d\udca4 UI"}),(0,r.jsx)("li",{children:"\ud83d\udca4 E2E"}),(0,r.jsx)("li",{children:"\u23f3 Integration"}),(0,r.jsx)("li",{children:"\u2705 Unit"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Convention"}),(0,r.jsx)(t.br,{}),"\n","All packages provide helpers to make testing easy"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Constructors start with ",(0,r.jsx)(t.code,{children:"New"})]}),"\n",(0,r.jsxs)(t.li,{children:["Constructors for tests start with ",(0,r.jsx)(t.code,{children:"Test"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"unit-testing-with-repository-pattern",children:"Unit Testing With Repository Pattern"}),"\n",(0,r.jsx)(t.p,{children:"Unit tests come in many forms. Arrower provides you with a set of helpers that make your life easier."}),"\n",(0,r.jsx)(t.p,{children:"If you're using the repository pattern it is cumbersome to always implement an in memory copy of the repository.\nUse this helper to get a repository that comes with a lot of often used methods out of the box:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"var repo YourRepositoryType = repository.NewMemoryRepository[Entity, EntityID]()\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'title="memory.repository.go"',children:"type Repository[E any, ID id] interface {\n    NextID(context.Context) (ID, error)\n    \n    Create(context.Context, E) error\n    Read(context.Context, ID) (E, error)\n    Update(context.Context, E) error\n    Delete(context.Context, E) error\n    \n    All(context.Context) ([]E, error)\n    AllByIDs(context.Context, []ID) ([]E, error)\n    FindAll(ctx context.Context) ([]E, error)\n    FindByID(context.Context, ID) (E, error)\n    FindByIDs(context.Context, []ID) (E, error)\n    Exists(context.Context, ID) (bool, error)\n    ExistsByID(context.Context, ID) (bool, error)\n    ExistAll(context.Context, []ID) (bool, error)\n    ExistByIDs(context.Context, []ID) (bool, error)\n    Contains(context.Context, ID) (bool, error)\n    ContainsID(context.Context, ID) (bool, error)\n    ContainsIDs(context.Context, []ID) (bool, error)\n    ContainsAll(context.Context, []ID) (bool, error)\n    \n    Save(context.Context, E) error\n    SaveAll(context.Context, []E) error\n    UpdateAll(context.Context, []E) error\n    Add(context.Context, E) error\n    AddAll(context.Context, []E) error\n    \n    Count(context.Context) (int, error)\n    Length(context.Context) (int, error)\n    Empty(context.Context) (bool, error)\n    IsEmpty(context.Context) (bool, error)\n    \n    DeleteByID(context.Context, ID) error\n    DeleteByIDs(context.Context, []ID) error\n    DeleteAll(context.Context) error\n    Clear(context.Context) error\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["It is implicitly assumed that the entity has a field named ",(0,r.jsx)(t.code,{children:"ID"})," with an underlying type of ",(0,r.jsx)(t.code,{children:"string"})," or ",(0,r.jsx)(t.code,{children:"int"}),".\nThat field will be used as the primary key.\nYou can change the field name:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'repo := repository.NewMemoryRepository[E, I](\n\trepository.WithIDField("YourPKField"),\n)\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The repository will probably not match all your needs, see how to\n",(0,r.jsx)(t.a,{href:"https://github.com/go-arrower/arrower/blob/master/repository/inmemory.example_extend_test.go",children:"extend"})," and\n",(0,r.jsx)(t.a,{href:"https://github.com/go-arrower/arrower/blob/master/repository/inmemory.example_overwrite_test.go",children:"overwrite or fine tune"}),"\nit, so it fits all your applications needs."]}),"\n",(0,r.jsx)(t.h2,{id:"integration-testing",children:"Integration Testing"}),"\n",(0,r.jsx)(t.p,{children:"Sometimes you just don't want to test against an in memory implementation and need to see if your application behaves\ncorrectly against the real database."}),"\n",(0,r.jsxs)(t.p,{children:["This pattern spins up a postgres database inside a docker container and removes the container after the test has\nfinished automatically.\nThe ",(0,r.jsx)(t.code,{children:"NewTestDatabase"})," method will ensure you can safely run all tests in parallel by:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Creating a new randomly named database for each test case"}),"\n",(0,r.jsx)(t.li,{children:"Performing schema migration"}),"\n",(0,r.jsx)(t.li,{children:"Seeding the database with test data"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The testdata is seeded with the project ",(0,r.jsx)(t.a,{href:"https://github.com/go-testfixtures/testfixtures",children:"testfixtures"}),"\nand if an file ",(0,r.jsx)(t.code,{children:"testdata/fixtures/_common.yaml"})," exists it is automatically loaded. For additional data per test case\ntake a look at ",(0,r.jsx)(t.a,{href:"https://github.com/go-testfixtures/testfixtures#-single-file-on-multiple-tables",children:"multiple tables in one file"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'//go:build integration\n\npackage yourpackage_test\n\nvar pgHandler *tests.PostgresDocker\n\nfunc TestMain(m *testing.M) {\n\tpgHandler = tests.GetPostgresDockerForIntegrationTestingInstance()\n\n\t//\n\t// Run tests\n\tcode := m.Run()\n\n\tpgHandler.Cleanup()\n\tos.Exit(code)\n}\n\nfunc TestSomething(t *testing.T) {\n\tt.Parallel()\n\n\tpg := pgHandler.NewTestDatabase()\n\n\t// use pg to initialise your test dependencies like a postgres repository \n}\n\nfunc TestSomethingOther(t *testing.T) {\n\tt.Parallel()\n\n\t// load multiple additional test fixture files to seed the database\n\tpg := pgHandler.NewTestDatabase([]string{\n\t\t"testdata/fixtures/something-other-user.yaml",\n\t\t"testdata/fixtures/something-other-posts.yaml",\n    })\n\t\n\t_ = pg.PGx() // direct access to the pgx connection pool \n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PrepareDatabase"})," method is similar to ",(0,r.jsx)(t.code,{children:"NewTestDatabase"})," but does not create a new database\nbut cleans the existing database!"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"All data is truncated"}),"\n",(0,r.jsx)(t.li,{children:"It cannot be used in parallel"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If you depend on other services for your testing use the ",(0,r.jsx)(t.code,{children:"tests.StartDockerContainer"})," helper to start any service\ninside a docker container.\nCheck out the ",(0,r.jsx)(t.code,{children:"tests.GetPostgresDockerForIntegrationTestingInstance"})," to see it in action for the testing against a postgres\ndatabase as shown above."]}),"\n",(0,r.jsx)(t.h3,{id:"docker-images-for-integration-testing",children:"Docker Images for Integration Testing"}),"\n",(0,r.jsxs)(t.p,{children:["Arrower ships all images you would need to operate and test a setup.\nSee ",(0,r.jsx)(t.a,{href:"./jobs/alternatives#postgres-image-with-pg_cron",children:"Alternatives"})," on how to use the postgres image with a\npreinstalled ",(0,r.jsx)(t.code,{children:"pg_cron"})," extension already"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);