"use strict";
const port = 3000;

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(`The server is running on port: ${port}`);
    }
});