const product = require("../model/productmodel")

const express = require("express");
const router = express.Router();
const authenticate = require("../authenticate/authenticate.js");
const autherization = require("../authorization/authorization")

router.get("", async (req, res) => {
    try {

        let Product = await product.find().lean().exec();

        return res.send(Product)
    }
    catch (err) {

        return res.send(err)
    }
})
router.post("", authenticate, autherization(["seller", "customer"]), async (req, res) => {

    try {

        let Product = await product.create(req.body);

        return res.send(Product)
    }
    catch (err) {

        return res.send(err)
    }

})
module.exports = router;