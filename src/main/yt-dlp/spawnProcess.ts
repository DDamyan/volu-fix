import { spawn } from 'child_process'
import { YTDLP_PATH } from './paths'

interface SpawnOptions {
  // command: string;
  args: string[]
  onProgress: (data: string) => void
  //   onError?: (error: string) => void
  // onStdoutData?: (data: string) => void;
}

export function spawnProcess(config: SpawnOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    const process = spawn(YTDLP_PATH, config.args)

    process.stderr.setEncoding('utf8')
    process.stderr.on('data', (data) => {
      if (data.includes('Video unavailable')) {
        reject('Video unavailable')
      }
      reject(new Error(data))
    })

    process.stdout.setEncoding('utf8')
    process.stdout.on('data', (data: string) => {
      if (data.includes('file is already')) {
        reject('File already exists')
      }

      config.onProgress(data)
    })

    process.addListener('close', () => {
      resolve()
    })
  })
}
