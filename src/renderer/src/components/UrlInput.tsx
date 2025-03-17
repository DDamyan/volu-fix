import { useState } from "react"

function UrlInput(): JSX.Element {

  const [urlValue, setUrlValue] = useState<string>("");

  return (
    <div>
        <div>URL:</div>
        <input type="url" placeholder="Enter URL" value={urlValue} onChange={(e) => setUrlValue(e.target.value)} />
        <button
          onClick={async () => {
            const res = await window.electron.getYtInfo(urlValue)
            console.log(res)
          }}
        >Go</button>
    </div>
  )
}

export default UrlInput
