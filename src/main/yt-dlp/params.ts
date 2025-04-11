import { DOWNLOAD_PATH, RESOURCES_PATH } from './paths'

export const DEFAULT_MP3_PARAMS = [
  '--progress',

  '--embed-thumbnail',

  '--ffmpeg-location',
  RESOURCES_PATH,

  '--extract-audio',
  '--audio-format',
  'mp3',

  '--paths',
  DOWNLOAD_PATH,

  '--output',
  '%(title)s.%(ext)s',

  '--restrict-filenames'
]
//possible params:\\
// '--progress-template',
// 'download:[download]%(progress._percent_str)s',
// '--newline',

// '--quiet'
// '--no-warnings'

// '--format',
// 'ba',
/////////////////////
