type Electron_IPC = {
  getYtInfo: (url: string) => Promise<{ title: string; author: string }>
}

// declare global {
interface Window {
  electron: Electron_IPC
}
// }
