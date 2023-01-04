import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["white"]};
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: ${({ theme }) => theme["white"]};
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
