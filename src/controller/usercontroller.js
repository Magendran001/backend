const user = require("../model/usermodel");
const express = require("express")
const route = express.Router();
const jwt = require('jsonwebtoken');
var Token = (user) => jwt.sign({ user }, 'shhhhh');


route.post("/signup", async (req, res) => {

    try {
        console.log(req.body)
        let x = await user.create(req.body);
        let token = Token(x)
        return res.send({ x, token })
    }
    catch (err) {

        return res.send(err)

    }
})

route.post("/login", async (req, res) => {

    try {
        console.log(req.body)
        if (!req.body.email) {
            return res.send("kindly enter email")
        }
        let User = await user.findOne({ email: req.body.email }).lean().exec();



        console.log(User)
        if (User.password != req.body.password) {
            return res.send("password not match")
        }
        let token = Token(User)
        return res.send({ User, token })
    }
    catch (err) {

        return res.send(err)

    }
})

module.exports = route