const mongoose = require("mongoose");
//const express = require("express");
//const app = express();
//const User = require("./User")
const Student = require("./Student");
const Application = require("./Application");
const MyApplications = require("./MyApplications");
const Task = require('./Task');
const Staff = require('./Staff');

const url = "mongodb+srv://alperenerdogan:123456aaa@cluster0.qengqba.mongodb.net/?retryWrites=true&w=majority";

// Connect to the database 
//************************* */
/*
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
*/


async function connect(){
    try{
        await mongoose.connect(url);
        console.log("Connected to MongoDB")
        run()
    }
    catch(error){
        console.error(error);
    }
    /*
    finally{
        mongoose.connection.close()
    }
    */
}



async function run() {
    
    try{
        // Create a new student
const student = new Student({
    name: 'ahmet Smith',
    applications: [],
    studentId: 21806517
  });
  
  // Save the student to the database
  student.save();
  
  // Create a new application


  const application = await Application.create({
    schoolName: 'Manchester University',
    status: 'Pending'
  });

  const application2 = await Application.create({
    schoolName: 'Kiev University',
    status: 'Pending'
  });

  // Insert the application into the student's applications array
  const myApplications = new MyApplications();

  // Creating the first application in MyApplications class
  myApplications.createApplication(student._id, application)
    .then(student => console.log(student))
    .catch(error => console.error(error));
  // Creating the second application in MyApplications class
    myApplications.createApplication(student._id, application2)
    .then(student => console.log(student))
    .catch(error => console.error(error)); 

  // Get the list of applications for the student
  const task = new Task();

  
  console.log("Getting the first application");
  task.getApplication(application._id)
    .then(applications => {
      console.log(applications);
  
      // Find the application that was just inserted
      //const application = applications.find(app => app.status === 'Pending');
  
      // Create a new staff member
      const staff = new Staff({
        name: 'Jane Doe',
        role: 'Erasmus Coordinator'
      });
  
      // Save the staff member to the database
      staff.save();
  
      // Accept the first application
      //task.acceptApplication(application._id, staff._id)
      task.acceptApplication(application._id)
        .then(application => console.log(application))
        .catch(error => console.error(error));
    
      // Reject the second application
      task.rejectApplication(application2._id)
        .then(application2 => console.log(application2))
        .catch(error => console.error(error));
    })

    
    /*
    const myApplications = await  MyApplications.create({studentId: 21801365});
    myApplications.createApplication("Erasmus Program","London University")
    const student = await Student.create({
        name:"Kerem",
        studentId: 21801365, 
        email: "kerem@gmail.com",
        password: "123456",
        department: "EE",
        title: "Student",
        //applications:[],
        myApplications: myApplications
    });
    //await student.save();
    
    
    const application = new Application({
        applicationType:"Erasmus Application",
        schoolName: "Rome University",
        //preference:1
    })
    //await application.save();

    //student.applications.push(application);

    
    async function addApplication(student,applicationType,schoolName){
        const application = new Application({
            applicationType:applicationType,
            schoolName: schoolName,
        })
        student.applications.push(application);
    }
    


    

    //const application = new Application("Approved","Erasmus Application",1);

    //await application.save();

   // student.applications.push(application);

    //await student.save();
    //const students = await Student.find({name:"Ahmet"})


    //addApplication(student,"Exchange Program","Berlin University")
    
    console.log(student)
    //const myApplications = new MyApplications(student)
    
    //myApplications.seeAllOfTheApplications();
    //myApplications.deleteApplication(application)
    console.log(student.applications)
    //myApplications.seeAllOfTheApplications();

    //const students = await Student.find({name:"Ahmet"})
    //const students = await Student.where( "name" ).equals("Ahmet");
    const students = await Student.find({});
    
    console.log(students)
    
    const applications = await Application.deleteMany(
        {applicationType:"Erasmus Program"}
    )
*/
    }
    
    catch(e){
        console.log(e.message)
    }
}
connect()

/*

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MyApplications = require('./controllers/MyApplications');

app.post('/students/:id/applications', MyApplications.insertApplication);
app.delete('/students/:id/applications/:appId', MyApplications.deleteApplication);
app.get('/students/:id/applications/:appId', MyApplications.viewApplications);

const Task = require('./Task');

app.get('/students', Task.viewAllStudents);
app.get('/applications', Task.viewAllApplications);
app.get('/students/:id', Task.viewStudent);
app.get('/applications/:id', Task.viewApplication);
app.put('/applications/:id/accept', Task.acceptApplication);
app.put('/applications/:id/reject', Task.rejectApplication);
app.put('/applications/:id/comment', Task.writeComment);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
*/

