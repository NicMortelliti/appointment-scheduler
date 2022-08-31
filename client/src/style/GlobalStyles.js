import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

body {
    background: ${({ theme }) => theme.sixty};
    color: ${({ theme }) => theme.thirty};
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
}

`;

export const Container = styled.div`
  padding: 0 0px;
  margin: 0 auto;
  box-sizing: inherit;

  max-width: 1300px;
  width: 100%;
`;
