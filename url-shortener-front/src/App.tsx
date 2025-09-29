import { useState } from "react"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import axios from "axios"

function App() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")

  async function handleShorten() {
    if (!url) {
      return
    }

    try {
      const { data } = await axios.post("http://localhost:3000", { url })

      setShortUrl(data)
    } catch (error) {
      console.error("Error shortening URL:", error)
    }
  }

  return (
    <Container className="container" maxWidth="sm">
      <h1>URL Shortener</h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <TextField
          label="Enter URL to shorten"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleShorten}>
          Shorten
        </Button>
      </Box>

      {shortUrl && (
        <div className="result">
          short link :
          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>
        </div>
      )}
    </Container>
  )
}

export default App
