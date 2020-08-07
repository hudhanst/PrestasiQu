# PrestasiQu

## About
an university project, a main task is to store an achivment or punishment of student so a school orginize when needed.
<br />
<br />
the main goal is to recreate an exist project using more moderent fermwork/technology, the main project done with native php, js, html and css (bootrap) and run in XAMPP. The original file also included here.

## How To Use
make sure you have [`git`](https://git-scm.com/downloads), pip/python (recomende using [`virtualenv`](https://pypi.org/project/virtualenv/)) and [`node js`](https://nodejs.org/en/download/)
### How To Install (windows)
- git clone https://github.com/hudhanst/PrestasiQu.git
- cd PrestasiQu
- cd Frontend
- cd prestasiqu
- npm i
- npm start (if you want (CORS_ORIGIN_WHITELIST set to http://127.0.0.1:3000))
- cd ..
- cd ..
- cd backend
- virtualenv env
- env\Scripts\activate
- pip install requirements.txt (if something goes wrong use this "pip install --upgrade --force-reinstall -r requirements.txt" but a package may not same as original)
- cd src
- python manage.py makemigrations
- python manage.py migrate
- python manage.py createsuperuser
- python manage.py runserver(run on port 8000)

## Lisf of Package
- backend:
    - Django [`link`](https://pypi.org/project/Django/)
    - django-cors-headers [`link`](https://pypi.org/project/django-cors-headers/)
    - django-rest-knox [`link`](https://pypi.org/project/django-rest-knox/)
    - djangorestframework [`link`](https://pypi.org/project/djangorestframework/)
    - Pillow [`link`](https://pypi.org/project/Pillow/)
    - more on requirements.txt
    - database SQLite
- frontend
    - axios [`link`](https://www.npmjs.com/package/axios)
    - react [`link`](https://www.npmjs.com/package/react) "npx create-react-app"
    - react-redux [`link`](https://www.npmjs.com/package/react-redux)
    - redux [`link`](https://www.npmjs.com/package/redux)
    - redux-devtools-extension [`link`](https://www.npmjs.com/package/redux-devtools-extension)
    - redux-thunk [`link`](https://www.npmjs.com/package/redux-thunk)

## Features
- add, edit, delete and detail on siswa, guru, admin, instansi and pelanggaran
- prestasi view/history, submission and acceptance
- point view/history, submission and acceptance
- automaticly increas or decreas point

## What Miss from Original Project
- i belive all query(serverside) on all table
- remove kelas because i think its not need and hard for admin to maintenance
- carousel on home page

## What New from Original Project
- 

## Devlopment plant
- rework a frontend so bad
- add news on home page
- add an atachment when cancel some achivment or punishment
- adding new kelas system that automaticly up siswa kelas ech year
- add import/export