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

router.get('/', async (req, res)=>{
    try {
        const findPet = await Pet.find()
        res.status(200).json({message: "Pets found!",
            pet: findPet
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "unable to lookup for any pets:("})
    }
})

module.exports = router