require('dotenv').config();
const CryptoJS = require("crypto-js");
const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get("/do-login", async (req, res) => {
    try {
        const crypt = {secret : process.env.CRYPT_SECRET};
        const password = CryptoJS.HmacSHA1(req.body.password, crypt.secret);
        const user = await User.findOne({email: req.body.email, password : password.toString()});
        res.json(user)
    } catch (error) {
        res.json(error)
    }
});

module.exports = router;