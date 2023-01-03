import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   
   *{
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
    }

    .pokemonName::first-letter {
    text-transform: uppercase;
    }

`;

export default GlobalStyle;
