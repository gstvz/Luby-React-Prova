import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: #F7F7F7;
    color: #707070;
    font-size: 62.5%;
    font-family: Helvetica, Arial, sans-serif;
    font-style: italic;
    font-weight: bold;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  
  li {
    list-style-type: none;
  }

  .swal2-popup {
    font-size: 1.5rem !important;
  }
`;
