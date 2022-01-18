const express = require('express')
const router = express.Router()
const FeedItem = require('../models/FeedItem')


router.post("/create", async (req, res) => {
    try {
        const feedItem = await FeedItem.create({...req.body});
        res.json(feedItem)
    } catch (error) {
        res.json(error)
    }
});

router.put("/update", async (req, res) => {
    try {
        const feedItem = await FeedItem.updateOne({_id: req.body._id},{...req.body});
        res.json(feedItem)
    } catch (error) {
        res.json(error)
    }
});

router.delete("/delete", async (req, res) => {
    try {
        const feedItem = await FeedItem.deleteOne({_id: req.body._id});
        res.json(feedItem)
    } catch (error) {
        res.json(error)
    }
});

router.get("/get", async (req, res) => {
    try {
        const feedItem = await FeedItem.findOne({_id: req.body._id});
        res.json(feedItem)
    } catch (error) {
        res.json(error)
    }
});

module.exports = router;