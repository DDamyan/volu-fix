import { DEFAULT_MP3_PARAMS } from './params'
import { extractDownloadPercent } from './utils'
import { spawnProcess } from './spawnProcess'

// important links
// https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file
// https://github.com/microlinkhq/youtube-dl-exec/blob/master/src/index.js

class YTDLP {
  static download(url: string, progressCallback: (percent: number) => void): void {
    spawnProcess({
      args: [url, ...DEFAULT_MP3_PARAMS],
      onProgress: (data: string) => {
        const downloadPercent = extractDownloadPercent(data)
        if (downloadPercent !== null) progressCallback(downloadPercent)
      }
    })
      .then(() => {
        console.log('Download complete!')
      })
      .catch((error) => {
        console.error('Error!!!:', error)
      })
    // const params = [url, ...DEFAULT_MP3_PARAMS]

    // const proc = spawn(YTDLP_PATH, params)
    // // , {
    // //   shell: true,
    // //   detached: true,
    // //   windowsHide: true
    // // })

    // proc.stderr.setEncoding('utf8')
    // proc.stderr.on('data', (data) => {
    //   if (data.includes('Video unavailable')) {
    //     throw new Error('Video unavailable')
    //   }

    //   throw new Error(data)
    // })

    // proc.stdout.setEncoding('utf8')
    // proc.stdout.on('data', (data: string) => {
    //   if (data.includes('file is already')) {
    //     console.error('File already exists')
    //   }

    //   const downloadPercent = extractDownloadPercent(data)
    //   if (downloadPercent !== null) progressCallback(downloadPercent)
    // })
  }
}

function test_callback_download(percent: number) {
  console.log(`${percent}/100`)
}

YTDLP.download('b2rcpxNuHJM', test_callback_download)
