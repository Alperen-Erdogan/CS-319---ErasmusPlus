const mongoose = require("mongoose");
const Student = require("./Student");
const Application = require("./Application");

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
        this.student.applications.push(application);
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
*/
    }



  }


 module.exports = MyApplications;