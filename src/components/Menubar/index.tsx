import React from 'react'
import {  remote } from 'electron'


import {
  VscChromeClose,
  VscChromeMinimize
} from 'react-icons/vsc'

import { Container, Buttons, Minimize, Closed } from './styles'
const BrowserWindow = remote.getCurrentWindow();
var appName = remote.app.getName();


const Menubar: React.FC = () => {
  return (
    <Container>
      <img src='' />
      <h2>{appName}</h2><Buttons><Minimize onClick={() => {
      BrowserWindow.minimize();
    }}><VscChromeMinimize /></Minimize> <Closed onClick={() => {
      BrowserWindow.close();
    }}><VscChromeClose /></Closed></Buttons></Container>
  )
}

export default Menubar
