const downloadRegex = /(\d{1,3}\.\d)%/ //gets the percent of an string "[69.6]%"

export function extractDownloadPercent(line: string): number | null {
  const match = line.match(downloadRegex)
  return match ? parseFloat(match[1]) : null
}
