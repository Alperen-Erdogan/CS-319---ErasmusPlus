const mongoose = require('mongoose')

const facultyScheme = new mongoose.Schema({

    facultyName: {
        type: String,
        required: [true, "Please Provide Faculty Name"]
    },

    



})

module.exports = mongoose.model.Coordinators || mongoose.model("Coordinators", facultyScheme)