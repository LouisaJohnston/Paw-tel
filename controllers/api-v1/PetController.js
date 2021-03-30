const router = require('express').Router()
const { User, Pet } = require('../../models/user')
const authLockedRoute = require('./authLockedRoute')

router.post('/', authLockedRoute, async (req, res) => {
    try {
        console.log(res.locals, '#####################')
        const newPet = new Pet({
            pet_name: req.body.pet_name,
            breed: req.body.breed,
            age: req.body.age,
            weight: req.body.weight,
            special_needs: req.body.special_needs,
            medications: req.body.medications,
            image_url: req.body.image_url,
            //user_id: res.locals.user._id
        })
        let id = res.locals.user._id
        const foundUser = await User.findById(id)
        newPet.save()
        foundUser.pets.push(newPet)
        await foundUser.save()
        res.json(newPet)
    } catch(err) {
        console.log(err)
        res.status(400).json({ msg: 'Unable to register pet' })
    }
})

// Read (Index)
router.get('/', authLockedRoute, async(req, res) => {
    try {
        let id = res.locals.user._id
        const allPets = await User.findById(id).populate('pets')
        res.json(allPets)
    } catch (err) {
        console.log(err)
        res.status(400).json({msg: 'Unable to find pets'})
    }
})

// Read (Show)
router.get('/:id', async(req, res) => {
    try {
        const foundPet = await Pet.findById(req.params.id)
        if(foundPet) {
            res.json(foundPet)
        }
    } catch (err) {
        console.log(err)
        res.json({
            msg: 'A pet with that id has not been found'
        })
    }
})

// Update
router.put('/:id', authLockedRoute, async (req, res) => {
    try {
        let id = res.locals.user._id
        const foundUser = await User.findById(id).populate('pets')
        const updatedPet = foundUser.pets.id(req.params.id)
        if (req.body.pet_name !== ""){
            updatedPet.pet_name = req.body.pet_name
        }
        if (req.body.breed !== ""){
            updatedPet.breed = req.body.breed
        }
        if (req.body.age !== ""){
            updatedPet.age = req.body.age
        }
        if (req.body.weight !== ""){
            updatedPet.weight = req.body.weight
        }
        if (req.body.special_needs!== ""){
            updatedPet.special_needs = req.body.special_needs
        }
        if (req.body.medications !== ""){
            updatedPet.medications = req.body.medications
        }
        if (req.body.age !== ""){
            updatedPet.age = req.body.age
        }

        await foundUser.save()
        res.json(updatedPet)
    } catch (err) {
        console.log(err)
        res.json({
            msg: 'Unable to update pet'
        })
    }
})

// Delete
router.delete('/:id', authLockedRoute, async (req, res) => {
    try {
        let id = res.locals.user._id
        const foundUser = await User.findById(id).populate('pets')
        const deletedPet = foundUser.pets.id(req.params.id)
        foundUser.pets.remove(deletedPet)
        await foundUser.save()
        res.json(deletedPet)
    } catch (err) {
        console.log(err)
        res.json({
            msg: 'Unable to delete pet'
        })
    }
})


module.exports = router