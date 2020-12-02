import React from 'react'
import { remote } from 'electron'
import Sidebar from '../../components/Sidebar'
import { Container, Content ,Fotter} from './styles'
var appVersion = remote.app.getVersion();

const Application: React.FC = ({ children }) => {
  return (
    <><Container>
      <Sidebar />
      <Content>
        {children}
      </Content>
    </Container>
      <Fotter>{appVersion}</Fotter></>
  )
}

export default Application
