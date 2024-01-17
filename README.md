# Book-Store

A web application to store the list of book in your store, home, libraries etc.

## Table of contents

- [Overview](#Overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Built with](#built-with)
- [Local Development](#Local development)
- [Contribution](#Contributing)

## Overview

![Book-store](projectAssests/projectOverview%20(1).png)
![Book-store](projectAssests/projectOverview%20(2).png)

<br/>

#### [Book-Store](https://book-store-frontend-a3i6.onrender.com/)

<hr/>

## Built with

#### Frontend

- HTML5 
- CSS 
- Javascript
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/guide/)
- [Tailwindcss](https://tailwindcss.com/docs/installation)

#### Backend

- Node.js
- Express.js

#### Database

- MongoDB

> This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) message and [Model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) design pattern

<hr/>

### Local development

Download this repository from github, using:

```bash
git clone https://github.com/0plaze0/book-store.git
```

**Frontend**

Go inside the directory and run, to install all dependencies:

```bash
cd frontend
npm i
```

Setup environment variable, by create a ```.env``` in the root directory and adding:

```bash
VITE_BASE_URL=<your development backend api URL>
```

Start cliend site:

```bash
npm run dev
```

<br>

**Backend**

Go inside the  and run, to install all dependencies:

```bash
cd backend
npm i
```

Setup environment variable, by create a ```.env``` in the root directory and adding:

```bash
DB_URI=<Your mongoDB Database URI>
```

Start server:

```bash
npm run dev
```

<br/>

#### Contributing

Bug reports, feature suggestions and especially code contributions are most welcome.  Open a GitHub issue or pull request. 
