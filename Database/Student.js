//const mongoose = require('mongoose');
//const Application = require("./Application");
//const MyApplications = require("./MyApplications");

/*
class Student extends User {
    constructor(name,id,email,password,department,title,hostSchool) {
      super(name,id,email,password,department,title);
      this.hostSchool = hostSchool;
      this.applications = [];
    }
    // Define a method in the child class
    myMethod() {
      // Use the super keyword to call the myMethod method of the base class
      return `${super.myMethod()} and this is the child class`;
    }
  }
*/
// Define the Student schema, which extends the User schema
/*
const StudentSchema = new mongoose.Schema({
  hostSchool: String,
  applications:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }]
});
*/
/*
// Create the Student model, which extends the User model
module.exports = User.discriminator('Student', StudentSchema);
*/





// Define the Student schema
/*
const StudentSchema = new mongoose.Schema({
  name: String,
  studentId:Number,
  email:String,
  password:String, 
  department:String,
  title:String,
  gpa:Number,
  
  hostSchool: {type:String,
              default:""
  },
  
  applications: [Application.schema],
  //myApplications:  MyApplications.schema


});
*/

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  }],
  studentId: Number
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;


//module.exports = mongoose.model('Student', StudentSchema);

