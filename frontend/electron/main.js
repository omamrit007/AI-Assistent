const { app, BrowserWindow, globalShortcut } = require("electron");

let win;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 400,
    height: 600,
    alwaysOnTop: true,
    transparent: true,
    frame: false,
  });

  win.loadURL("http://localhost:3000");

  globalShortcut.register("CommandOrControl+Space", () => {
    win.isVisible() ? win.hide() : win.show();
  });
});