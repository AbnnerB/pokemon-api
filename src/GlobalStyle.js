import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   
   *{
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    .pokemonName::first-letter {
    text-transform: uppercase;
    }

    body{
        background-color: brown;
    }

`;

export default GlobalStyle;
