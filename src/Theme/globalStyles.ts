import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;
  }
  button{
    border: none;
    background: none;
    transition: all 0.3s;

    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`