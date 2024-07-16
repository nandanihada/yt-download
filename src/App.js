import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  const handleDownload = async (format) => {
    const response = await fetch(`http://localhost:5000/download?url=${url}&format=${format}`);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `video.${format}`;
    link.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>YouTube Video Downloader</h1>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={() => handleDownload('mp4')}>Download MP4</button>
        <button onClick={() => handleDownload('mp3')}>Download MP3</button>
      </header>
    </div>
  );
}

export default App;
