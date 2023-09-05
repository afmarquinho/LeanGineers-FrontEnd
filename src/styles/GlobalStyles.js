import { useContext } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) =>
      props.darkMode ? "var(--dark-background)" : "var(--light-background)"}
      
    }
      `;

export default GlobalStyle;
