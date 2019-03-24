const { app, BrowserWindow, ipcMain, shell } = require('electron');
const url = require('url');
const path = require('path');

let win;

app.on('ready', () => {

    win = new BrowserWindow({
        width: 1000,
        height: 800,
        icon: 'icons/icon.png'
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.setMenu(null);

    win.webContents.openDevTools();
   
    win.on('close', (e) => {
    
        e.preventDefault();

    })

    win.on('closed', () => {
        win = null;
        app.quit();
    })

    ipcMain.on('start', () => {
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'views/problem.html'),
            protocol: 'file',
            slashes: true
        }));
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { app.quit() }
})

