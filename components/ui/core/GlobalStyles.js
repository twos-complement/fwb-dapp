import { createGlobalStyle } from 'styled-components'

import {
  H1Styles,
  H2Styles,
  H3Styles,
  H4Styles,
  H5Styles,
  H6Styles,
  PStyles,
  AStyles,
  PCodeStyles,
  PreCodeStyles,
} from './Typography'

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.neutral900};
    color: ${props => props.theme.colors.neutral000};
    font-size: 62.5%; /* base 10 rems */
  }
  @font-face {
    font-family: "TWK Everett";
    src: url("/fonts/TWKEverett-MediumItalic-web.ttf");
    font-style: italic, oblique;
    font-display: swap;
  }
  @font-face {
    font-family: "TWK Everett";
    src: url("/fonts/TWKEverett-BoldItalic-web.ttf");
    font-style: italic, oblique;
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: "TWK Everett";
    src: url("/fonts/TWKEverett-Medium-web.ttf");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "TWK Everett";
    src: url("/fonts/TWKEverett-Bold-web.ttf");
    font-weight: 700;
    font-style: bold;
    font-display: swap;
  }

  @font-face {
    font-family:"orpheuspro";
    src:
      url("/fonts/orpheus-pro.woff2") format("woff2"),
      url("/fonts/orpheus-pro.woff") format("woff"),
      url("/fonts/orpheus-pro.oft") format("opentype");
    font-display: auto;
    font-style: italic;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
    font-family: "TWK Everett", 'Work Sans', sans-serif;
    font-weight: 500;
  }
  h1 { ${H1Styles} }
  h2 { ${H2Styles} }
  h3 { ${H3Styles} }
  h4 { ${H4Styles} }
  h5 { ${H5Styles} }
  h6 { ${H6Styles} }
  p {
    margin: 0;
    ${PStyles}
  }
  li {
    ${PStyles}
    padding: 5px 0;
    overflow: display;
  }
  /* Inline code block: */
  p > code {
    ${PCodeStyles}
  }
  /* Multiline code block: */
  pre > code {
    ${PreCodeStyles}
  }
  a:focus,
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  a {
    ${AStyles}
  }
  input {
    padding: 40px;
    width: 100%;
  }
  ::selection {
    background: rgba(231, 34, 128, 0.5);
  }
  /* NProgress loader bar plugin: */
  #nprogress {
    width: 100%;
    position: absolute;
    top: 0;
    .bar {
      background-color: ${props => props.theme.colors.primary500};
      height: 4px;
    }
  }
`

export default GlobalStyles
