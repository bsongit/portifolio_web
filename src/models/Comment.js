const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    user_id : { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    date: {type: Date, default : new Date()},
    menssage: {type: String, required: true, maxLength: 140}
});

module.exports = Comment = mongoose.model("comments", commentSchema);