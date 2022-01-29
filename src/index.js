require('dotenv').config();
const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const connection = require('./config/database');
const cors = require('cors');
const User = require('./models/User');
const app = express();
const initializePassport = require('./config/passport-config');


initializePassport(passport, email => User.findOne({email: email}));

var corsOptions = {
  origin: process.env.ORIGIN_URL,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json());

const server = require('http').createServer(app);
app.use('/api', require('./routes'));
connection(process.env.MONGO_URI);


app.use(flash());
app.use(session({
    secret : process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());



app.post("/api/login", passport.authenticate('local', {failureFlash: true}),(req, res) => {
  res.send('/sign-up');
});

server.listen(process.env.PORT, () => {
    console.log(`Listenning on port : ${process.env.PORT}`);
  });