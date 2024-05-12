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