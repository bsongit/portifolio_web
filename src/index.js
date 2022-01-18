require('dotenv').config();
const express = require('express');
const connection = require('./config/database');

const app = express();
app.use(express.json());

const server = require('http').createServer(app);
app.use('/api', require('./routes'));

connection(process.env.MONGO_URI);
server.listen(process.env.PORT, () => {
    console.log(`Listenning on port : ${process.env.PORT}`);
  });