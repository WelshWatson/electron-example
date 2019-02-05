const electron = require('electron');
const protocol = electron.protocol;
const browserWindow = electron.BrowserWindow;
const app = electron.app;
const path = require('path');
const url = require('url');

function createWindow(){
    protocol.interceptFileProtocol('file', (request, callback) => {
        const url = request.url.substr(7) /* all urls start with 'file://' */
        callback({
            path: path.normalize(`${__dirname}/${url}`)
        })
    }, (err) => {
        if (err) console.error('Failed to register protocol');
    });
    let win;
    win = new browserWindow({ width: 1600, height: 900, icon: __dirname + '/icon.ico' });

    //     // Load the index.html file
    win.loadURL(url.format({ pathname: 'aurelia-app/dist/index.html', protocol: 'file', slashes: false }));

    // open dev tools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

if (app !== undefined) {

    // Run create window
    app.on('ready', createWindow);

    // Quit when all windows closed
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
}
