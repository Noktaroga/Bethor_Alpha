const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: false,
  });

  win.loadURL(
    process.env.ELECTRON_START_URL ||
      `file://${path.join(__dirname, '../public/index.html')}`
  );

  const template = [
    {
      label: 'Archivo',
      submenu: [
        { role: 'quit', label: 'Salir' },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  ipcMain.on('window-control', (_, action) => {
    if (action === 'minimize') win.minimize();
    if (action === 'maximize') win.isMaximized() ? win.unmaximize() : win.maximize();
    if (action === 'close') win.close();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
