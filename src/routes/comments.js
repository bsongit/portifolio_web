const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')


router.post("/create", async (req, res) => {
    try {
        const comment = await Comment.create({...req.body});
        res.json(comment)
    } catch (error) {
        res.json(error)
    }
});

router.put("/update", async (req, res) => {
    try {
        const comment = await Comment.updateOne({_id: req.body._id},{...req.body});
        res.json(comment)
    } catch (error) {
        res.json(error)
    }
});

router.delete("/delete", async (req, res) => {
    try {
        const comment = await Comment.deleteOne({_id: req.body._id});
        res.json(comment)
    } catch (error) {
        res.json(error)
    }
});

router.get("/get", async (req, res) => {
    try {
        const comment = await Comment.findOne({_id: req.body._id});
        res.json(comment)
    } catch (error) {
        res.json(error)
    }
});

module.exports = router;