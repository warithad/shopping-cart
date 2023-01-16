import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
    }

    .App{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5vh;
        background-color: #134e4a;
    }

    
`

export default GlobalStyle;