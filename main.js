const {
        app, // app event lifecycle, events
        BrowserWindow, // app windows generator
        Menu
    } = require('electron')
    , path = require('path')
    , fs = require('fs');

const windowsModel = require('./core/models/windows')
    , History = require('./core/models/history')
    , Config = require('./cosma-core/models/config')
    , Display = require('./core/models/display');

/**
 * Test if a window is stored into 'BrowserWindow' object.
 * @returns {boolean}
 */

function noWindowOpen () {
    if (BrowserWindow.getAllWindows().length === 0) {
        return true;
    }
    return false;
}

/**
 * Wait for 'app ready' event, before lauch the window.
 */

app.whenReady().then(() => {

    if (!fs.existsSync(History.path)) { fs.mkdirSync(History.path); }

    const windowSpecs = Display.getWindowSpecs('main');

    const mainWindow = new BrowserWindow(
        Object.assign(windowSpecs, {
            webPreferences: {
                preload: path.join(__dirname, './core/views/cosmoscope/preload.js')
            },
            title: 'Cosma'
        })
    );
    
    if (windowSpecs.maximized === true) {
        mainWindow.maximize(); }

    Display.storeSpecs('main', mainWindow);

    const openCosmoscope = require('./core/views/cosmoscope/index');

    let config = new Config();

    require('./core/models/menu')(); // set app menu

    Menu.getApplicationMenu()
        .getMenuItemById('citeproc')
        .enabled = config.canCiteproc();

    Menu.getApplicationMenu()
        .getMenuItemById('devtools')
        .visible = config.opts.devtools;

    require('./controllers')

    openCosmoscope([], runLast = true);

    /**
     * MacOS apps generally continue running even without any windows open.
     * Activating the app when no windows are available should open a new one.
     */

    app.on('activate', function () {
        if (noWindowOpen()) {
            openCosmoscope([], runLast = true); }
    });
});

/**
 * Except on MacOs :
 * stop the app when all windows are closed.
 */

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') { // except on MacOs
        app.quit(); }
});