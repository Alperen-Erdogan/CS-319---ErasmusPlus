const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, "Please Provide Email"]
    },

    password: {
        type: String,
        required: [true, "Please Provide a password"],
        unique: false
    },

    firstName: {
        type: String,
        unique : false,
    },
    lastName: {
        type: String,
        unique : false,
    },
    bilkentId: {
        type: String,
        unique : false,
    },
    doB: {
        type: String,
        unique : false,
    },
    cgpa: {
        type: String,
        unique : false,
    },

    
})

module.exports = mongoose.model.Users || mongoose.model("Users", userSchema)