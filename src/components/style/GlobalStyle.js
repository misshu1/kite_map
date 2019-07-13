import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
* {
    box-sizing: border-box;
}
html, 
body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0 auto;

}
`;
