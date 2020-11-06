const express = require('express')
const parser = require('body-parser')
const app = express()
const cors = require('cors')

const imagesController = require('./db/controllers/images')
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(cors())
app.get("/", (req, res) => {
        res.send("Welcome to images")
    })
app.use('/img', imagesController)
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`${app.get("port")} works`);
});
