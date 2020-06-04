const express = require("express");
const router = express.Router();
const Images = require('../models/Images.js')
 
router.get("/", (req, res) => {
    Images.find().then(data => {
        res.json(data)
    })
})
router.get("/page/:skip/:limit", (req, res) => {
    let skip = parseInt(req.params.skip)
    let limit = parseInt(req.params.limit)
    Images.find({},null,{limit:limit,skip:skip}).then(data => {
        res.json(data)
    }).catch(err=>console.log(err))
})

router.get("/update/:id", (req,res)=>{
    Images.findById(req.params.id).then(update=>res.json(update))
})
router.put("/update/:id", (req, res) => {
    Images.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(update => res.json(update))
})

router.post("/new", (req, res) => {
    Images.create(req.body).then(Images => res.json(Images))
})

router.delete("/delete/:id", (req, res) => {
        Images.findByIdAndDelete(req.params.id).then(deleted => res.json(deleted))
        // Images.findOneAndDelete({ _id: req.params.id }).then(deleted => res.json(deleted))
    })


module.exports = router