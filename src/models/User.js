const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, maxLength: 20, required: true },
    midName:{ type: String, default: '', maxLength: 20},
    lastName:{ type: String, maxLength: 20, required: true  },
    email: { type: String, maxLength: 96, required: true  },
    password: { type: String, required: true }
});

module.exports = User = mongoose.model("users", userSchema);