const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Ruta al index.html compilado por Vite
  const indexPath = path.join(__dirname, '../dist/index.html');
  win.loadFile(indexPath);

  // Abrir DevTools automáticamente
  win.webContents.openDevTools();

  // Menú básico
  const template = [
    {
      label: 'Archivo',
      submenu: [{ role: 'quit', label: 'Salir' }],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // Controles de ventana
  ipcMain.on('minimize', () => win.minimize());
  ipcMain.on('maximize', () =>
    win.isMaximized() ? win.unmaximize() : win.maximize()
  );
  ipcMain.on('close', () => win.close());
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
