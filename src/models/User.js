const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, maxLength: 20, required: true, unique: true  },
    email: { type: String, maxLength: 96, required: true, unique: true   },
    password: { type: String, required: true }
});

module.exports = User = mongoose.model("users", userSchema);