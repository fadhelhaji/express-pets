const Pet = require('../models/pet')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res)=>{
    res.json(req.body)
})



module.exports = router