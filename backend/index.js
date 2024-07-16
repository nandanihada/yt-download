const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
const port = 5000;

app.use(cors());

app.get('/download', (req, res) => {
  const { url, format } = req.query;
  
  if (!ytdl.validateURL(url)) {
    return res.status(400).send('Invalid URL');
  }

  res.header('Content-Disposition', `attachment; filename="video.${format}"`);

  ytdl(url, { format: format === 'mp3' ? 'audioonly' : 'videoandaudio' }).pipe(res);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
