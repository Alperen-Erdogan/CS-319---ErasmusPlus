const mongoose = require('mongoose')
const { func } = require('prop-types')
const { async } = require('q')
const User = require("./user_efe")

mongoose.connect("mongodb://localhost/TestConnection", () =>{
    console.log("Mongo Connected")
})

run()
async function run(){
    const user2 = await User.create({
        name: "Efe", 
        age: 12,
        email: "ASDASD",
        hobbies: ["Chess", "Programming"],
        addresses: {
            street: "Main St",
        }
    
    })

    
    console.log(user2)
}

