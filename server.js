const express = require('express');
const path = require('path');
const serveIndex = require('serve-index');

const app = express();

// Serve frontend files like index.html, style.css, script.js
app.use(express.static(__dirname));

// Serve the songs folder with file listings
app.use('/songs',
  express.static(path.join(__dirname, 'songs')),
  serveIndex(path.join(__dirname, 'songs'), { icons: true })
);

// Explicitly serve music.svg if needed
app.get('/songs/music.svg', (req, res) => {
  res.sendFile(path.join(__dirname, 'songs/music.svg'));
});

// Start the server
app.listen(3000, () => {
  console.log("✅ Server running at http://127.0.0.1:3000");
});
