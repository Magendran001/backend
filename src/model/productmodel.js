const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    product: { type: String, required: true }
})
const product = mongoose.model("product", productschema);
module.exports = product;