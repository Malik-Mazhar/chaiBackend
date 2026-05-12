require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/username', (req, res) => {
    res.send('<h1>Hello user how are you bro </h1>')
});

app.get('/login', (req, res) => { 
    res.send('<h2>Please log our website </h2>')
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})