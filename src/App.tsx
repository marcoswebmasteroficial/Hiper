import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from './styles/GlobalStyle'
import Menubar from './components/Menubar'
import Application from './components/Application'
import Routes from './routes'


const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {


  return (
    <>
      <Router>
        <GlobalStyle />
        <Menubar />
        <Application>
          <Routes />
        </Application>
      </Router>
    </>
  )
}

render(<App />, mainElement)
