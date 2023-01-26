const route = require('express').Router();
const {Message} = require("../db/models");

route.get("/", async (req, res) => {
    try {
        const data = await Message.findAll({raw: true})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

module.exports = route