import { app, BrowserWindow } from "electron";

let win;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 350,
    height: 500,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
  });

  win.loadURL("http://localhost:5173");
});