const express = require('express');
const path = require('path');
const port = 3000;

const app = express()

app.use(express.static('public'));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "views", "home.html")));

app.listen(port, () => console.log('server running in https://localhost:' + port));
