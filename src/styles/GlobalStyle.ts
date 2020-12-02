import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-app-region: no-drag;
  }

  body {
    margin: 0;
    min-width: 250px;
    background: transparent;
    color: #24292e;
    font-family: "Roboto", sans-serif;
    overflow: hidden;
    -webkit-app-region: drag;
   }
`
