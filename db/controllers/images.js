const express = require("express");
const router = express.Router();
const Images = require('../models/Images.js')
 
router.get("/", (req, res) => {
    Images.find().then(data => {
        res.json(data)
    })
})
router.get("/page/:skip/:limit", (req, res) => {
    let limit = parseInt(req.params.limit)
    let skip = (parseInt(req.params.skip)-1) * limitgi
    Images.find({},null,{limit:limit,skip:skip}).then(data => {
        res.json(data)
    }).catch(err=>console.log(err))
})

router.get("/pageindex/:skip/:limit", (req, res) => {
    let limit = parseInt(req.params.limit)
    let skip = (parseInt(req.params.skip)-1) * limit

    Images.find({},null,{limit:limit,skip:skip}).then(data => {
        let newData = {};
        for(var i=0;i<data.length;i++){
            newData[i+skip]=data[i];
        }
        // data.forEach((item,index) => {data[index]['sortOrder']=i;
        // i++;}
        // )

        res.json(newData)
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