"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[202],{9920:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>l,frontMatter:()=>d,metadata:()=>a,toc:()=>y});var o=t(5893),n=t(1151),i=t(4316);const s='package main\n\nimport (\n\t"context"\n\t"errors"\n\t"fmt"\n\n\t"github.com/go-arrower/arrower/repository"\n)\n\ntype UserID int\n\ntype User struct {\n\tID    UserID\n\tLogin string\n}\n\nfunc main() {\n\trepo := NewUserMemoryRepository()\n\n\t// highlight-next-line\n\t_, err := repo.FindByLogin(context.Background(), "hello@arrower.org")\n\tif err != nil && !errors.Is(err, repository.ErrNotFound) {\n\t\tpanic(err)\n\t}\n}\n\nfunc NewUserMemoryRepository() *UserMemoryRepository {\n\treturn &UserMemoryRepository{\n\t\t// highlight-next-line\n\t\tMemoryRepository: repository.NewMemoryRepository[User, UserID](),\n\t}\n}\n\ntype UserMemoryRepository struct {\n\t// highlight-next-line\n\t*repository.MemoryRepository[User, UserID]\n}\n\n// FindByLogin implements a custom method, that is not supported by the Repository out of the box.\n// highlight-start\nfunc (repo *UserMemoryRepository) FindByLogin(ctx context.Context, login string) (User, error) {\n\tall, err := repo.All(ctx)\n\tif err != nil {\n\t\treturn User{}, fmt.Errorf("could not get users: %w", err)\n\t}\n\n\tfor _, u := range all {\n\t\tif u.Login == login {\n\t\t\treturn u, nil\n\t\t}\n\t}\n\n\treturn User{}, repository.ErrNotFound\n}\n\n// highlight-end\n',d={},p="Extend a Repository",a={id:"guides/extend-repository/index",title:"Extend a Repository",description:"To add methods to a repository that are not supported out of the box,",source:"@site/docs/guides/extend-repository/index.md",sourceDirName:"guides/extend-repository",slug:"/guides/extend-repository/",permalink:"/docs/guides/extend-repository/",draft:!1,unlisted:!1,editUrl:"https://github.com/go-arrower/arrower.org/tree/master/docs/guides/extend-repository/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cron",permalink:"/docs/guides/cron/"},next:{title:"Overwrite a Repository Method",permalink:"/docs/guides/overwrite-repository-method/"}},u={},y=[];function g(e){const r={h1:"h1",p:"p",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"extend-a-repository",children:"Extend a Repository"}),"\n",(0,o.jsx)(r.p,{children:"To add methods to a repository that are not supported out of the box,\nembed the repository and implement your missing methods."}),"\n",(0,o.jsx)(i.Z,{language:"go",title:"user.inmemoery.repository.go",children:s})]})}function l(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}}}]);