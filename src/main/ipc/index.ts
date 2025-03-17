import { ipcMain } from 'electron'

function ipcHandle<Key extends keyof IpcEventMapping>(
  key: Key,
  handler: IpcEventMapping[Key]
): void {
  ipcMain.handle(key, (_, data) => handler(data))
}

function ipcOn<Key extends keyof IpcEventMapping>(key: Key, handler: IpcEventMapping[Key]): void {
  ipcMain.on(key, (_, data) => handler(data))
}

export function setIpcEventHandlers(): void {
  ipcHandle('yt:info', async (url) => {
    return { title: url, author: 'author' }
  })
}
