const route = require("express").Router();
const {Message} = require('../db/models')

route.post("/", async (req,res) => {
    try {
        await Message.create(req.body)
    } catch (error) {
        console.log(error)
    }
})

module.exports = route;