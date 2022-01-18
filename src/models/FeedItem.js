const mongoose = require("mongoose");

const feedItemSchema = new mongoose.Schema({
    user_id : { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    date: {type: Date, default : new Date()},
    title: {type: String, required: true, maxLength: 140},
    content: {type: String, default: ''},
    commentList: {type: Array, default: []}
});

module.exports = FeedItem = mongoose.model("feedItems", feedItemSchema);