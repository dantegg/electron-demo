const electron = require('electron')
const log = require('electron-log')
const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const Utils = require("./utils")
const RPCClient = require("./RPCClient")
const client = require("./grpcClient")
//    fs.readdir('/', (err, ss) => {
//      log.info("files" + ss)
//  }


const { ipcMain } = require('electron')
// 监听渲染进行发送的消息
ipcMain.on('renderer-msg', (event, arg) => {
  log.info("success===============123" + arg) // prints "帮我创建一个新的页面",  

  // 执行创建页面的操作
  event.reply('main-msg', '好的!!!!!');  // 给渲染进程回复消息
})

function createWindow () {   
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 并且为你的应用加载index.html
  win.loadFile('index.html')

   // 打开开发者工具
   win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  

  // import RPCClient from './rpc_client'

  // console.log(Utils)
  // console.log("grpc test " + RPCClient)


  ipcMain.on('send-msg', (event, arg) => {
    log.info("success===============request " + arg) // prints "帮我创建一个新的页面",  
  
    // 执行创建页面的操作
    // console.log(event)
    client.sendTest();
    // event.reply('get-msg', '好的!!!!!');  // 给渲染进程回复消息
  })
  //console.log('process.versions.modules', process.versions.modules)