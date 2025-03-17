import { contextBridge, ipcRenderer } from 'electron'

const api = {
  getYtInfo: (url: string) => ipcRenderer.invoke('yt:info', url)
}

try {
  contextBridge.exposeInMainWorld('electron', api)
} catch (error) {
  console.error(error)
}
