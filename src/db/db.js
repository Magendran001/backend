const mongoose = require("mongoose");

const connect = mongoose.connect(`mongodb+srv://revision:revision@cluster0.xasf1.mongodb.net/maggi`)

module.exports = connect;