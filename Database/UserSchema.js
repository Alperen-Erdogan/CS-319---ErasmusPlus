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
    }

})

module.exports = mongoose.model.Users || mongoose.model("Users", userSchema)