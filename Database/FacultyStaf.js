const mongoose = require('mongoose')

const FacultyStaf = new mongoose.Schema({

    name: {
        type: String,
        require: [true, "Please Provide Name"]
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