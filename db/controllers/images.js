const express = require("express");
const router = express.Router();
const Images = require('../models/Images.js')
 
router.get("/", (req, res) => {
    Images.find().then(Images => {
        res.json(Images)
    })
})

router.get("/name/:conLastName", (req, res) => {
    let theName = req.params.conLastName
    Images.find({ conLastName: theName }).then(showName => res.json(showName))
})
router.get("/id/:id", (req, res) => {
    let theName = req.params.conLastName
    Images.find({  _id: req.params.id }).then(showName => res.json(showName))
})

router.post("/new", (req, res) => {
    Images.create(req.body).then(Images => res.json(Images))
})

router.put("/update/:id", (req, res) => {
    Images.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(update => res.json(update))
})

router.delete("/delete/:id", (req, res) => {
    Images.findOneAndDelete({ _id: req.params.id }).then(deleted => res.json(deleted))
})

module.exports = router