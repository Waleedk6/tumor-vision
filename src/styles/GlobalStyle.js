import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    color: #202124;
    line-height: 1.6;
  }
  
  /* Add other global styles as needed */
`;

export default GlobalStyle;  // Changed to default export