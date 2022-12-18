const mongoose = require('mongoose')

const FacultyStaf = new mongoose.Schema({

    name: {
        type: String,
        require: [true, "Please Provide Name"]
    },

    lastName: {
        type: String,
        require: [true, "Please Provide LastName"]
    },

    title: {
        type: String,
        require: [true, "Please Provide Title"]
    },

    link: {
        type: String,
        require: false,
    }

})

module.exports = mongoose.model.Users || mongoose.model("FacultyStaff", FacultyStaf)