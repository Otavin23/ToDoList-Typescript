import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;

    }
    body{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    
`