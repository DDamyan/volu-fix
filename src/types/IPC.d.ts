export {}

declare global {
  interface IpcEventMapping {
    'yt:info': (url: string) => Promise<{ title: string; author: string }>
  }
}
