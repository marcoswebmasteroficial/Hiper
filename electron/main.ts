import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

let mainWindow: Electron.BrowserWindow | null;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 550,
    icon: __dirname + "/assets/icons/icon.svg",
    transparent: true,
    backgroundColor: '#191622',
    frame: false,
    resizable: true,
    webPreferences: {
      nodeIntegration: true

    }
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }
  
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
app.on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {

    }
  })
app.allowRendererProcessReuse = true
