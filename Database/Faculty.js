const mongoose = require('mongoose')
const facultyStaff = require('./FacultyStaf')

const facultyScheme = new mongoose.Schema({

    facultyName: {
        type: String,
        required: [true, "Please Provide Faculty Name"]
    },

    coordinatorName: {
        type: String ,
        required: [false]
    }



})

module.exports = mongoose.model.Coordinators || mongoose.model("Coordinators", facultyScheme)