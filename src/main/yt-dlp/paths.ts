import { app } from 'electron'
import path from 'path'

export const RESOURCES_PATH = path.join(app.getAppPath(), 'resources')
export const YTDLP_PATH = path.join(app.getAppPath(), 'resources', 'yt-dlp.exe')
export const DOWNLOAD_PATH = path.join(app.getAppPath(), 'ytdlp download')
