# Create React app
- Vite: https://vitejs.dev/guide/
```bash
$ npm create vite@latest my-react-app -- --template react
```


# Git


## Conventional commit
- feat: implement a new feature to the codebase.
    Eg: $ git commit -m "feat: implement allow user can login"
- fix: fix patches a bug in your codebase. (qc env)
    Eg: $ git commit -m "fix: can't alert message when login error"
- hotfix: fix on PROD env
- perf: performance web
- refactor: refactore codebase to new approach
- style: relative adjust UI (layout, css)
- test: implement temporary feature
- build
- docs: relative write docs, draw diagram

## branch
- master/main: Stable branch to serve PROD.
- develop: unstable branch, used for development, can be reset anytime with an announcement
- qc: unstable branch, used for QC team, can be reset anytime with an announcement
- feature/login-form: Feature branch, used for developing new feature
- hotfix/stepper-order: Hotfix branch when an incident occurs or bug fix on production env
- bugfix/error-form-login: bugfix branch when occur on qc branch

## Command line
```bash

# create new branch from current branch 
$ git checkout -b {name branch}

# switch branch
$ git checkout {name branch}

# add file
$ git add {name file} -> add đúng tên file mà mình muốn đưa lên git
$ git add . -> add toàn bộ file lên git

# check status của các file 
$ git status 

# commit code
$ git commit -m “ … message …”

# push code 
$ git push -> đẩy tất cả các file lên repository

# check all branch
$ git branch --all -> check all branch git

# get latest code
$ git pull

# merge from branch A into branch B
$ git merge {name branch}
```

## git flow

``` bash

# create new branch
$ git checkout -b {name branch}

# add file
$ git add .

# commit
$ git commit -m "..."

# push code
$ git push

```


# React Router DOM

- useNavigate -> redirect to new page
- Link -> component to user click redirect page (<a\>)
- useLocation
- useParams -> return param in url.
    - eg: xxx/user/profile/1 -> get 1
- useSearchParams -> get informations in url (querystring)
    - eg: xx/user/profiles?_page=1&_limit=1  (_page=1&_limit=1)

# Authenticate & authorize
- authenticate: xác thực -> check user login into admin page, profile page ... (system)
    - public page: product list, detail, contact, home ...
    - private page: checkout, profile, change password ...

- authorize: phân quyền -> admin, member, operator, manager
    - phân quyền (permission) -> xem user có quyền hạn gì trong hệ thống:
        - action: CRUD -> create, read, update, delete ...
        - page: admin page, product detail, checkout page ....
        - API
            - public API
                - get usd: GET vietcombank.com/api/usd
                - get gold:  GET vietcombank.com/api/gold
            - private API:
                - get transaction: GET vietcombank.com/api/transaction (token = ADMIN, OPERATOR)
