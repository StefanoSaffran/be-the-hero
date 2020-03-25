import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-activity/dist/react-activity.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 400 14px 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #f0f0f5;
  }

  input, button, textarea, input::placeholder, textarea::placeholder {
    font: 400 18px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  a#register,
  a#back {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    font-weight: 500;
    opacity: 1;
    transition: opacity 0.2s;

    svg {
      margin-right: 8px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
