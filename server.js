"use strict";
const port = 3000;

const express = require('express');
const app = express();

//Webpack stuff
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);

//Setting webpack development middleware
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


//Handling / route (sending index.html from the server)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Listening to client requests
app.listen(port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(`The server is running on port: ${port}`);
    }
});