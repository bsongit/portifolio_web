require('dotenv').config();
const express = require('express');
const connection = require('./config/database');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: process.env.ORIGIN_URL,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json());

const server = require('http').createServer(app);
app.use('/api', require('./routes'));
connection(process.env.MONGO_URI);

server.listen(process.env.PORT, () => {
    console.log(`Listenning on port : ${process.env.PORT}`);
  });