const route = require("express").Router();
const {Average} = require("../db/models");

route.get('/number', async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
} )


route.post('/newnumber', async (req, res) => {
    try {
        await Average.create(req.body)
    } catch (error) {
        console.log(error)
    }
})

module.exports = route;