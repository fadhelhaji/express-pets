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

router.delete('/:id', async (req, res)=>{
    try {
        const deletePet = await Pet.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Pet deleted"})
    } catch (error) {
        res.status(500).json({message: "Pet not deleted:)"})
    }
})

router.put('/:id', async (req, res)=>{
    try {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body)
        if(!updatedPet){
            res.status(404).json({message: "Pet not found"})
        } else {
            res.status(200).json({message: "Pet succesfully updated"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Pet could not be updated:("})
    }
})
module.exports = router