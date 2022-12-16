const mongoose = require('mongoose');

/*
class User {
  // Define the class constructor
  constructor(name,id,email,password,department,title) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.password = password;
    this.department = department;
    this.title = title;
  }

  // Define a class function
  myFunction() {
    // Use the this keyword to access the data property of the class
    return this.data;
  }
}
*/

// Create a schema for the class
const userSchema = new mongoose.Schema({
  data: String,
  id:Number,
  email:String,
  password:String, 
  department:String,
  title:String
});

// Create a model for the class using the schema
module.exports = mongoose.model('User', userSchema);
