const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow ({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html').then(function() {
        win.maximize();
        win.show();
        win.webContents.openDevTools();
    });
}

app.whenReady().then(createWindow);