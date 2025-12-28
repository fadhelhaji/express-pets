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

router.get('/:id', async (req,res)=>{
    try {
        const petDetails = await Pet.findById(req.params.id)

        if(!petDetails){
            res.status(404).json({message: "Pet not found:("})
        } else {
            res.status(200).json({message: "Pet found and here are the details",
            pet: petDetails
        })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Pet not found:("})
    }
})

module.exports = router