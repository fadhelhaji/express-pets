const Pet = require('../models/pet')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res)=>{
    try {
        const createPet = await Pet.create(req.body)
        res.status(201).json({
            message: "Pet succesfully created!",
            pet: createPet
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Failed to create pet:('})
    }
})

module.exports = router