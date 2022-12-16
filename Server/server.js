/* eslint-disable no-unused-vars */
const express = require("express") // Starting Point of the server
const port = 5000
const MyProfileStudent = require("./Routes/StudentRoutes/MyProfileStudent")
const MyAplicationStudent = require("./Routes/StudentRoutes/MyApplicationStudent")
const DocumentsStudent = require("./Routes/StudentRoutes/DocumentsStudent")
const SchoolCourses = require("./Routes/StudentRoutes/SchoolsCourses")
const Coordinators = require("./Routes/StudentRoutes/Coordinators")
const ArchiveStudent = require("./Routes/StudentRoutes/ArchiveStudent")

const app = express()

app.use(express.json());
app.use("/MyProfileStudent",MyProfileStudent);
app.use("/ApplicationStudent", MyAplicationStudent);
app.use("/DocumentStudent", DocumentsStudent)
app.use("/SchoolCourses", SchoolCourses)
app.use("/StudentCoordinator", Coordinators)
app.use("/ArchiveStudent", ArchiveStudent)

app.get("/", (req,res) => {
    console.log("Entered")
})


app.listen(port, err => {

    if(err){
        return console.log("Error Happened\n", err)
    }

    console.log(`${port} is listening`)
})

