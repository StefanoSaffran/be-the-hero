<p align="center">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1585169085/adouxx0pljljlfdvlhhd.svg" width="300"/>
</p>

<h1 align="center">
  Be the Hero Fullstack app 🦸‍♂️
</h1>

<p align="center">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/StefanoSaffran/omniStack-11?color=e02041">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/StefanoSaffran/omniStack-11?color=e02041">
  <img alt="Languagues" src="https://img.shields.io/github/languages/count/StefanoSaffran/omniStack-11?color=e02041">
  <a href="https://github.com/StefanoSaffran" target="_blank">
    <img alt="Made by Stefano" src="https://img.shields.io/badge/made%20by-StefanoSaffran-%20?color=e02041">
  </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/StefanoSaffran/omniStack-11?color=e02041">
  <img alt="GitHub license" src="https://img.shields.io/github/license/StefanoSaffran/omniStack-11?color=e02041">
</p>

<p align="center">
  <a href="#computer-project">💻 Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-built-with">🚀 Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-getting-started">ℹ️ Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-license">📃 License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">📬 Get in touch</a>
</p>

## :computer: Project 
<h4 align="center">
  Application that connects people who wants to help with NGOs.
</h4>
<p align="center">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1585399751/Omnistack/mehj7vvtwwnzyxgqc4em.gif" height="400">
</p>

## :rocket: Built with

This project was developed with the following technologies:

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [Nodemon](https://nodemon.io/)
-   [ReactJS](https://reactjs.org/)
-   [Styled-components](https://www.styled-components.com/)
-   [React Native](https://facebook.github.io/react-native/)
-   [React Navigation](https://reactnavigation.org/)
-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [Redux-persist](https://github.com/rt2zz/redux-persist)
-   [React-toastify](https://github.com/fkhadra/react-toastify)
-   [Immer](https://github.com/immerjs/immer)
-   [Axios](https://github.com/axios/axios)
-   [React-icons](https://react-icons.netlify.com/)
-   [Reactotron](https://infinite.red/reactotron)
-   [Polished](https://polished.js.org/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

## :information_source: Getting Started

### Requirements

To run the app, you will need:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/) v12.13.1 or higher 
* [Yarn](https://yarnpkg.com/) 

### Backend

Now clone the repository and install the dependencies.

```bash
# to clone the repository
git clone https://github.com/StefanoSaffran/omnistack-11.git

# go into the backend folder
cd omnistack-11/backend

#install the backend dependencies
yarn

# run api
yarn dev
```

### Frontend

```bash
# in another tab of the terminal install the frontend dependencies and run it 
cd frontend
yarn
yarn start
```

### Mobile

The Application was developed using Expo. It is a free and open source toolchain built around React Native to facilitate the process of running and testing applications. [Click here](https://expo.io/learn) to get start with Expo.

```bash
# install the dependencies
cd mobile
yarn
```

In order to run the application on your device, you need to change the ip config.

[api.js](https://github.com/StefanoSaffran/omnistack-11/blob/master/mobile/src/services/api.js)
```javascript
  baseURL: 'http://192.168.0.185:3003',
```
replace 192.168.0.185 with your machine's ip.

If you want to use Reactotron change the ip in the Reactotron config file.

[ReactotronConfig](https://github.com/StefanoSaffran/omnistack-11/blob/master/mobile/src/config/ReactotronConfig.js)
```javascript
  .configure({ host: '192.168.0.185' })
```

Now with everything on place, run the application.

```bash

# to run the app
yarn start

```
Expo will open a page in your browser, scan the QRcode on the page and wait for the app to load.

> The Application was developed and tested on Iphone 6s

---

## :page_facing_up: License

This project is under the MIT license. See the [LICENSE](https://github.com/StefanoSaffran/omnistack-11/blob/master/LICENSE) for more information

## :mailbox_with_mail: Get in touch

<a href="https://stefanosaffran.com" target="_blank" >
    <img alt="Website - Stefano Saffran" src="https://img.shields.io/badge/Website--%23F8952D?style=social">
  </a>&nbsp;&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/stefanosaffran/" target="_blank" >
    <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
  </a>&nbsp;&nbsp;&nbsp;
  <a href="mailto:stefanoas@gmail.com" target="_blank" >
    <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
  </a> 

---

Made with ☕ and ❤️ by Stefano Saffran.