import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.sixty};
    color: ${({ theme }) => theme.ten};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.0s linear;
  }
  `;
