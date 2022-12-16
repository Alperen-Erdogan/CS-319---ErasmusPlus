const mongoose = require("mongoose");
//const express = require("express");
//const app = express();
//const User = require("./User")
const Student = require("./Student");
const Application = require("./Application");
const MyApplications = require("./MyApplications");

const url = "mongodb+srv://Mete:mernstack@cluster0.rd7giid.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
    try{
        await mongoose.connect(url);
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.error(error);
    }
}

/*
mongoose.connect("mongodb://localhost/testdb2", () => {
    console.log("Connected")
})
*/

async function run() {
    
    try{
        
    const student = new Student({
        name:"Ahmet",
        id: 22004365, 
        email: "ahmet@gmail.com",
        password: "123456",
        department: "CS",
        title: "Erasmus Student",
        hostSchool: "Paris University",
        applications:[]
    });
    //await student.save();
    
    
    const application = new Application({
        status:"Approved",
        applicationType:"Erasmus Application",
        schoolName: "Paris University",
        //preference:1
    })
    await application.save();
    student.applications.push(application);

    /*
    async function addApplication(student,applicationType,schoolName){
        const application = new Application({
            applicationType:applicationType,
            schoolName: schoolName,
        })
        student.applications.push(application);
    }
    */


    

    //const application = new Application("Approved","Erasmus Application",1);

    //await application.save();

   // student.applications.push(application);

    //await student.save();
    //const students = await Student.find({name:"Ahmet"})


    //addApplication(student,"Exchange Program","Berlin University")
    console.log(student)
    const myApplications = new MyApplications(student)
    myApplications.createApplication("Erasmus Program","London University")
    myApplications.seeAllOfTheApplications();
    //myApplications.deleteApplication(application)
    console.log(student.applications)
    //myApplications.seeAllOfTheApplications();

    //const students = await Student.find({name:"Ahmet"})
    //const students = await Student.where( "name" ).equals("Ahmet");
    //console.log(students)
    
    }
    catch(e){
        console.log(e.message)
    }
}
connect()

run()
