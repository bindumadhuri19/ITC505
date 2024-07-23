const express = require('express');
const logger = require('morgan');
const path = require('path');

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Serve static files from 'public' directory
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

// Handle POST request for Mad Libs
server.post('/ITC505/lab-7', (req, res) => {
  const { noun, verb, adjective, adverb, pluralNoun } = req.body;
  if (!noun || !verb || !adjective || !adverb || !pluralNoun) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out ALL fields</p>
      <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
    `);
    return;
  }
  const madLib = `Once upon a time, a ${adjective} ${noun} decided to ${verb} ${adverb}. It was a sight to behold as ${pluralNoun} joined in.`;
  res.send(`
    <h1>Submission Successful</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
  `);
});

// Set up the server to listen on the appropriate port
let port = 80;
if (process.argv[2] === 'local') {
    port = 8081; // Change to another port like 8081
}
server.listen(port, () => console.log(`Server is running on port ${port}`));
