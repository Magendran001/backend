const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json())
const connect = require("./db/db");
var cors = require('cors')
app.use(cors())
const logincontroller = require("./controller/usercontroller");
const productcontroller = require("./controller/productcontroller")



app.get("/", (req, res) => {
    return res.send("maggi")
})
app.use("", logincontroller)
app.use("/product", productcontroller)

app.listen(process.env.PORT || 5000, async () => {
    await connect
    console.log("listening on 5000 port")
})