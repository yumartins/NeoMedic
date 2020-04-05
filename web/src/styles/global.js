import { createGlobalStyle } from 'styled-components';
import { color, typograph } from './index';

import IconFontEOT from '../assets/fonts/neomedic.eot';
import IconFontTTF from '../assets/fonts/neomedic.ttf';
import IconFontWOFF from '../assets/fonts/neomedic.woff';
import IconFontSVG from '../assets/fonts/neomedic.svg';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;1,600;1,700&display=swap');

  @font-face {
    font-family: 'neomedic';
    src: url(${IconFontEOT});
    src: url(${IconFontEOT}) format('embedded-opentype'),
      url(${IconFontTTF}) format('truetype'),
      url(${IconFontWOFF}) format('woff'),
      url(${IconFontSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

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
`;

export default GlobalStyles;
