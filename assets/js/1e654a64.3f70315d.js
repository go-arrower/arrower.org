"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[5029],{8211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(5893),s=t(1151);const a={},l="Usecases",o={id:"basics/usecases/index",title:"Usecases",description:"To build the application layer, Arrower offers a set of primitives:",source:"@site/docs/basics/04-usecases/index.md",sourceDirName:"basics/04-usecases",slug:"/basics/usecases/",permalink:"/docs/basics/usecases/",draft:!1,unlisted:!1,editUrl:"https://github.com/go-arrower/arrower.org/tree/master/docs/basics/04-usecases/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transactions",permalink:"/docs/basics/database/transactions"},next:{title:"Jobs",permalink:"/docs/basics/jobs/"}},i={},c=[{value:"Instrumentalisation",id:"instrumentalisation",level:2},{value:"Testing",id:"testing",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"usecases",children:"Usecases"}),"\n",(0,r.jsx)(n.p,{children:"To build the application layer, Arrower offers a set of primitives:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Primitive"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Request"}),(0,r.jsx)(n.td,{children:"can produce side effects and return data"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command"}),(0,r.jsx)(n.td,{children:"produces side effects, e.g. mutate state"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Query"}),(0,r.jsx)(n.td,{children:"does not produce side effects and returns data"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Job"}),(0,r.jsx)(n.td,{children:"produces side effects"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"A usecase can be generated with the cli to save some boilerplate.\nThe available commands are:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ arrower generate request helloWorld\n$ arrower generate command helloWorld\n$ arrower generate query helloWorld\n$ arrower generate job helloWorld\n\n# arrower detects the primitive when appended to the desired usecase.\n$ arrower generate uc helloWorldRequest\n"})}),"\n",(0,r.jsx)(n.p,{children:"or in the same way to generate code for a context:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ arrower generate request <contextName> helloWorld\n"})}),"\n",(0,r.jsx)(n.p,{children:"It will generate two files in the application layer, one for the Request\nand the other one with a corresponding test.\nBoth are ready for the actual logic to be implemented."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="shared/application/hello-world.usecase.go"',children:'package application\n\nimport (\n    "context"\n\t"errors"\n\n    "github.com/go-arrower/arrower/app"\n)\n\nvar ErrHelloWorldFailed = errors.New("hello world failed")\n\nfunc NewHelloWorldRequestHandler() app.Request[HelloWorldRequest, HelloWorldResponse] {\n    return &helloWorldRequestHandler{}\n}\n\ntype helloWorldRequestHandler struct{}\n\ntype (\n    HelloWorldRequest  struct{}\n    HelloWorldResponse struct{}\n)\n\nfunc (h *helloWorldRequestHandler) H(ctx context.Context, req HelloWorldRequest) (HelloWorldResponse, error) {\n    return HelloWorldResponse{}, nil\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="shared/application/hello-world.usecase_test.go"',children:'package application_test\n\nimport (\n    "context"\n    "testing"\n    \n    "github.com/stretchr/testify/assert"\n    \n    "github.com/go-arrower/skeleton/shared/application"\n)\n\nfunc TestHelloWorldRequestHandler_H(t *testing.T) {\n    t.Parallel()\n\n    t.Run("success case", func(t *testing.T) {\n        t.Parallel()\n        \n        handler := application.NewHelloWorldRequestHandler()\n        \n        res, err := handler.H(context.Background(), application.HelloWorldRequest{})\n        assert.NoError(t, err)\n        assert.Empty(t, res)\n    })\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"instrumentalisation",children:"Instrumentalisation"}),"\n",(0,r.jsx)(n.p,{children:"The primitives have the advantage that it is easy to write middleware for them.\nArrower ships with decorators for:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tracing"}),"\n",(0,r.jsx)(n.li,{children:"Metrics"}),"\n",(0,r.jsx)(n.li,{children:"Logging"}),"\n",(0,r.jsx)(n.li,{children:"Validation"}),"\n",(0,r.jsx)(n.li,{children:"Transactions"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"They can be called with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"handler := app.NewLoggedRequest(\n    logger, \n    NewHelloWorldRequestHandler(),\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:"To fully instrument an usecase rely on the convenience helper, which will apply tracing, metrics, and logging all at ones:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"handler := app.NewInstrumentedRequest(\n    di.TraceProvider, di.MeterProvider, di.Logger,\n    NewHelloWorldRequestHandler(),\n),\n"})}),"\n",(0,r.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsx)(n.p,{children:"To make it easy to test any code having an usecase as a dependency (e.g. controller),\na bunch of helpers are ready for use."}),"\n",(0,r.jsxs)(n.p,{children:["Take a look at this test and how the ",(0,r.jsx)(n.code,{children:"app.TestRequestHandler"})," is used\nto quickly assert on the specific input coming to the usecase or returning data:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// ...\n\nt.Run("successful request", func(t *testing.T) {\n    t.Parallel()\n    \n    handler := app.NewValidatedRequest(validator.New(), app.TestRequestHandler(func(ctx context.Context, _ structWithValidationTags) (response, error) {\n        assert.True(t, app.PassedValidation(ctx))\n        return response{}, nil\n    }))\n    \n    res, err := handler.H(context.Background(), passingValidationValue)\n    assert.NoError(t, err)\n    assert.Empty(t, res)\n})\n\n// ...\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For many tests this level of control is not required.\nThere are also helpers that always succeed ",(0,r.jsx)(n.code,{children:"app.TestSuccessRequestHandler"}),"\nor always fail ",(0,r.jsx)(n.code,{children:"app.TestFailureRequestHandler"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// ...\n\nt.Run("success", func(t *testing.T) {\n    t.Parallel()\n    \n    req := httptest.NewRequest(http.MethodGet, "/", nil)\n    rec := httptest.NewRecorder()\n    c := echoRouter.NewContext(req, rec)\n    \n    handler := web.NewHelloController(application.App{\n        SayHello: app.TestSuccessRequestHandler[application.SayHelloRequest, application.SayHelloResponse](),\n    })\n    \n    assert.NoError(t, handler.SayHello()(c))\n    assert.Equal(t, http.StatusOK, rec.Code)\n})\n\n// ...\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(7294);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);