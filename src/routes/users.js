require('dotenv').config();
const CryptoJS = require("crypto-js");
const express = require('express')
const router = express.Router()
const User = require('../models/User')


router.post("/create", async (req, res) => {
    try {
        const crypt = {secret : process.env.CRYPT_SECRET};
        const password = CryptoJS.HmacSHA1(req.body.password, crypt.secret);
        const user = await User.create({...req.body, password: password.toString()});
        res.status(201).send('User registration had success!');
    } catch (error) {
        res.send({...error, message : "ERROR"});
    }
});

router.put("/update", async (req, res) => {
    try {
        const user = await User.updateOne({_id: req.body._id},{...req.body});
        res.json(user)
    } catch (error) {
        res.json(error)
    }
});

router.delete("/delete", async (req, res) => {
    try {
        const user = await User.deleteOne({_id: req.body._id});
        res.json(user)
    } catch (error) {
        res.json(error)
    }
});

router.get("/get", async (req, res) => {
    try {
        const user = await User.findOne({_id: req.body._id});
        res.json(user)
    } catch (error) {
        res.json(error)
    }
});

module.exports = router;