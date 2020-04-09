import { createGlobalStyle } from 'styled-components';
import { color, typograph } from './index';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;1,600;1,700&display=swap');

  * {
    line-height: normal;
    letter-spacing: normal;
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    cursor: pointer;
    background: none;
    outline: 0;
  }

  input,
  textarea,
  select {
    outline: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
  }

  body {
    font-family: ${typograph.family};
    background-color: ${color.primary._100};
    margin: 0;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  #root {
    display: flex;
    justify-content: flex-start;
  }
`;

export default GlobalStyles;
