require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const githubData =   {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/username', (req, res) => {
    res.send('<h1>Hello user how are you bro </h1>')
});

app.get('/login', (req, res) => { 
    res.send('<h2>Please log our website </h2>')
});

app.get('/github', (req, res) => {
    res.json(githubData)
});

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})