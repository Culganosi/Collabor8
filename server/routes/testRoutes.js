

const express = require("express");
const router = express.Router();

module.exports = () => {

    //Login
    router.post("/", async (req, res) => {

        console.log(req.body[0].data)

        res.status(200)

    })

    return router;

};