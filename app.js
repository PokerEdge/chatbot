const express = require('express');
const builder = require('botbuilder');

// Setup Express Server
const app = express();
const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Chat connector for communicating with Bot Framework Service 

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});