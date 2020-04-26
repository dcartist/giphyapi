const mongoose = require('../connection.js')
const Schema = mongoose.Schema;

const Image = new mongoose.Schema({
    imgageurl: {
        type: String,
        default: String,
        trim: true
    },
    tags: [],
    optionaltag: {
        type: String,
        default: String,
        trim: true
    },
    name: {
        type: String,
        default: String,
        trim: true
    },
    githubH: {
        type: Number,
        default: 0,
    },
    githubW: {
        type: Number,
        default: 0,
    },
    activityName: {
        type: String,
        default: String,
        trim: true
    }


    // conLastName: {
    //     type: String,
    //     default: String,
    //     uppercase: true,
    //     trim: true
    // },
    // conLicense: {
    //     type: String,
    //     default: 0
    //         // trim: true
    // },
    // property: {
    //     ref: "Property",
    //     type: Schema.Types.ObjectId
    // },
    // owner: {
    //     ref: "Owner",
    //     type: Schema.Types.ObjectId
    // },
    // jobId: Number,
})

let image = mongoose.model('Image', Image)
module.exports = image