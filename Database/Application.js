const mongoose = require('mongoose')

const Application = new mongoose.Schema({

    currentSemesterDate: {
        type: String,
    },

    firstName: {
        type: String
    },

    lastName: {
        type: String
    },

    hostUniversity: {
        type: String
    },

    department: {
        type: String
    },

    cgpa: {
        type: String
    },

    hostDepartment: {
        type:String
    },

    binData:{
        type: 'Buffer'
    }

})

module.exports = mongoose.model.Application || mongoose.model("Application", Application )