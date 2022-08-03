const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    firstname: { type: String, required: true },
    lastname: { type: String, require: true },
    role: { type: String, default: "customer" }
})

const user = mongoose.model("user", userschema)

module.exports = user
