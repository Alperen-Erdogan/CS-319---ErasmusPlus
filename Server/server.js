/* eslint-disable no-unused-vars */
const express = require("express") // Starting Point of the server
const port = 5000
const MyProfileStudent = require("./Routes/StudentRoutes/MyProfileStudent")
const MyAplicationStudent = require("./Routes/StudentRoutes/MyApplicationStudent")
const DocumentsStudent = require("./Routes/StudentRoutes/DocumentsStudent")
const SchoolCourses = require("./Routes/StudentRoutes/SchoolsCourses")
const Coordinators = require("./Routes/StudentRoutes/Coordinators")
const ArchiveStudent = require("./Routes/StudentRoutes/ArchiveStudent")
const cors = require("cors")

const app = express()
const bcrypt = require("bcrypt")

const users = [] // Just for test

app.use(cors())

app.use(express.urlencoded({ extended: false}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());
app.use("/MyProfileStudent",MyProfileStudent);
app.use("/ApplicationStudent", MyAplicationStudent);
app.use("/DocumentStudent", DocumentsStudent)
app.use("/SchoolCourses", SchoolCourses)
app.use("/StudentCoordinator", Coordinators)
app.use("/ArchiveStudent", ArchiveStudent)

// For Logining this is the first thing user will be see
app.get("/login", (req, res) => {
    // It might not be usefull at all
})

app.post("/login", (req, res) => {
    console.log(req.body.email)
    console.log(req.body.password)
})

app.get("/register", (req, res) => {

})

app.post('/register', async (req, res) => {
    
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now.toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect("/login") // It migth be wrong in the react
    }catch{
        res.redirect("/register") // It might be wrong in the react
    }
    console.log(users)
})

app.get("/", (req,res) => {
    res.json({name : "Ahmet"})
    res.status(200)
})

app.post("/", (req,res) => {

    console.log(req.body.name)
    console.log(req.body.surname)
    console.log(req.body.email)
    let name = req.body.name
    let surname = req.body.surname
    let email = req.body.email

    let userInfo = {"name": name, "surname": surname, "email": email}

    //saveToDabase()
})


app.listen(port, err => {

    if(err){
        return console.log("Error Happened\n", err)
    }

    console.log(`${port} is listening`)
})

