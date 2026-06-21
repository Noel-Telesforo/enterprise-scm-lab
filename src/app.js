const express = require('express');
const app = express();
const port = 3000


app.get('/', (req, res) => {
  res.json({ message: "Enterprise SCM Lab" });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

module.exports = app;// Added logging
