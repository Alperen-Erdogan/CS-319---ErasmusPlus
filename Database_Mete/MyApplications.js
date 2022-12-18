//const mongoose = require("mongoose");
//const Student = require("./Student");
//const Application = require("./Application");
/*
class MyApplications {
    constructor(student) {
      this.student = student;  
      this.applications = student.applications;
    }

    // Creates a new application for the student
    async createApplication(applicationType,schoolName){
        const application = new Application({
            applicationType:applicationType,
            schoolName: schoolName,
        })
        //await application.save();
        
        await Student.findOneAndUpdate({
        studentId: this.student.studentId
        },
        {
        $addToSet: {
           applications: application 
        }}
    )
    }

    // Prints all of the applications of the student
    seeAllOfTheApplications(){
        console.log(this.student.applications)
    }


    async deleteApplication(application){
        
        try{
            const deletedApplication = await Student.applications.deleteOne(application._id)
            this.student.applications.filter(x => x.schoolName == deletedApplication.schoolName);
            console.log(this.student.applications)
            console.log("Deletion is successful!")
            
        }
        catch(e){
            console.log(e.message)
        }
    }
}
        
       /*
       // Find the student and remove an application from the applications array
        Student.updateOne({ _id: this.studentId }, { $pull: { applications: application._id } }, function(error) {
        if (error) {
        console.error(error);
        } else {
        console.log('Application removed from student');
        this.student.applications.filter(x => x.schoolName == application.schoolName);
    }
    
  });

    }



  }




const MyApplicationsSchema = new mongoose.Schema({
    studentId:Number,
    applications: [Application.schema]

});

MyApplicationsSchema.methods.createApplication = function (applicationType,schoolName)  {
    const application = new Application({
        applicationType:applicationType,
        schoolName: schoolName,
    })
    //await application.save();
    return this.findOneAndUpdate(
        { _id: this._id }, 
        { $addToSet: {applications: application } }, 
        { new: true });
        /*
    await MyApplicationsSchema.findOneAndUpdate({
    studentId: studentId,
    },
    {
    $addToSet: {
      applications: application 
    }}
    
)

    this.applications.push(application);
    
}
module.exports = mongoose.model('MyApplications', MyApplicationsSchema);
*/

/*
const Student = require('./Student');
const Application = require('./Application');

exports.insertApplication = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    student.applications.push(req.body);
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    student.applications.id(req.params.appId).remove();
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.viewApplications = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.send(student.applications);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = exports;
*/


const Student = require('./Student');
const Application = require('./Application');

class MyApplications {
  async createApplication(studentId, application) {
    try {
      // Create a new application
      const newApplication = new Application(application);
      // Save the application to the database
      await newApplication.save();
      // Find the student by id and push the new application to their applications array
      const student = await Student.findByIdAndUpdate(studentId, {
        $push: { applications: newApplication._id }
      }, { new: true });
      return student;
    } catch (error) {
      throw error;
    }
  }

// _id => applicationId

  async deleteApplication(studentId, _id) {
    try {
      // Find the student by id and remove the application from their applications array
      const student = await Student.findByIdAndUpdate(studentId, {
        $pull: { applications: _id }
      }, { new: true });
      // Delete the application from the database
      await Application.findByIdAndDelete(_id);
      return student;
    } catch (error) {
      throw error;
    }
  }

  async getApplications(studentId) {
    try {
      // Find the student by id and populate their applications array
      const student = await Student.findById(studentId).populate('applications');
      return student.applications;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MyApplications;



