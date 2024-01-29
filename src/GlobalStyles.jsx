import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --grey: #c6c7ce;
    --light-grey: #E8EbED;
    --dark-grey: #626362;
    --light-blue: #6996ea;
    --dark-blue: #1752c1;
    --red: #eb4c4c;
    --green: #30de30;
    --yellow : #deb330;
  }

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Rubik', sans-serif;
    background: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyle;
