// Main Process
const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const path = require('path')
const isDev = !app.isPackaged;

function createWindow () {
    // Browser window <- Renderer Process
  const win = new BrowserWindow({
    show:false,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.maximize();
  win.loadFile('index.html')
  isDev && win.webContents.openDevTools();
}

if (isDev){
  require('electron-reload')(__dirname,{
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notification', body: message}).show();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// if the window has been closed on mac this will reopen the window.
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
})