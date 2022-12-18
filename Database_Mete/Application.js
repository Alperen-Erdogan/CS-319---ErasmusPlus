//const mongoose = require('mongoose');
/*
class Application {
  // Define the class constructor
  constructor(status,applicationType,preference) {
    this.status = status;
    this.applicationType = applicationType;
    this.date = Date.now();
    this.comment = "";
    this.preference = preference;
  }

  // Define a class function
  
  myFunction() {
    // Use the this keyword to access the data property of the class
    return this.data;
  }
  
}
*/

/*
// Create a schema for the class
const applicationSchema = new mongoose.Schema({
  status: {type: String,
            default: "Pending"},
  applicationType:String,
  studentName: {type: String,
            default: "",
            },
  studentId: Number,
  schoolName: {type: String,
                default:""},
  date:{type :Date,  
        default: Date.now},
  comment:{ type: String,
            default : ""},
  //preference:Number
});

// Create a model for the class using the schema
module.exports = mongoose.model('Application', applicationSchema);
*/

const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  schoolName : String,
  semester: {type:String,
    requied: true},
  status: {
    type: String,
    required: true,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending"
  },
  comment: {
    type: String
  }
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;