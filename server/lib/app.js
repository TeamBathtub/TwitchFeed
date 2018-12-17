const express = require('express');
const app = express();
const morgan = require('morgan');
const twitch = require('./routes/twitch/twitch');
app.use(morgan('dev'));

app.use(express.json());

app.use(express.static('public'));

app.use('/api/twitch', twitch);

module.exports = app;