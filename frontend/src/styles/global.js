import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-activity/dist/react-activity.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
    background: ${({ theme }) => theme.colors.background};
  }

  input, button, textarea, input::placeholder, textarea::placeholder {
    font: 400 18px 'Roboto', sans-serif;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) =>
      theme.colors.background} inset;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  a {
    text-decoration: none;
  }

  a#register,
  a#back {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${({ theme }) => theme.colors.textStrong};
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
