import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, 
body {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
* {
    box-sizing: border-box;
}
`;
