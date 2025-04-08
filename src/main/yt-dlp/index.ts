import { spawn } from 'child_process'

// Path to your .exe file
// const exePath = path './resources/yt-dlp.exe'
const exePath = 'G:\\Quellcode\\volu-fix\\resources\\yt-dlp.exe'
const ffmpegPath = 'G:\\Quellcode\\volu-fix\\resources\\'

const downloadPath = 'G:\\Quellcode\\volu-fix\\ytdlp download'

const params = [
  'https://www.youtube.com/watch?v=fYnvKYN9_CE',
  // '-s',
  '--progress',
  // '--progress-template',
  // 'download:[download]%(progress._percent_str)s',
  // '--newline',

  '--ffmpeg-location',
  ffmpegPath,

  '--extract-audio',
  '--audio-format',
  'mp3',

  // '--format',
  // 'ba',

  '--paths',
  downloadPath

  // '--quiet'
  // '--no-warnings'
]

// const command = `"${exePath}" ${params.join(' ')}`

//-P, --paths [TYPES:]PATH
//--restrict-filenames
//--write-playlist-metafiles
//--embed-thumbnail

// Run the .exe
// const cp = exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`)
//     return
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`)
//   }
//   console.log(`stdout: ${stdout}`)
// })

const ytdlp = spawn(exePath, params)

// ytdlp.stderr.setEncoding('utf8')
ytdlp.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
  // const lines = data.split('\n')
})

ytdlp.stdout.on('error', (data) => {
  console.log(`stdout !!error!!: ${data}`)
})

// ytdlp.stdout.setEncoding('utf8')
ytdlp.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)

  if (data.includes('file is already')) {
    console.error('File already exists')
  }

  //TODO: parse the data to get the download progress !!!!

  // const lines = data.split('\n')
  // const downloadProcess = lines.find((line) => line.includes('[download]'))
  // console.log(downloadProcess)
})

ytdlp.on('close', (code) => {
  console.error(`stderr - code: ${code}`)
})
