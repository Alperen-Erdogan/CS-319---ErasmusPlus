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
const jwt = require("jsonwebtoken")

const auth = require("./auth")

/*
    USER MODEL "!!!!!!!"
*/

    const User = require("./../Database/UserSchema") 
    const dbConnect = require("./../Database/dbConnect") // Connecting to the database
    const { request, response } = require("express")

dbConnect()

/* THIS COD MIGHT BE BOILER PLATE CODE */
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });




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

app.post("/login", (request, response) => {
    
    const result = async () => {

    }

    User.findOne({ email: request.body.email })
    
      // if email exists
      .then((user) => {
        
        console.log(user)
        
        bcrypt
          .compare(request.body.password, user.password)
  
          // if the passwords match
          .then((passwordCheck) => {
            
            // check if password matches
            if(!passwordCheck) {
              return response.status(400).send({
                message: "Passwords does not match",
                error: "Error Message"
              });
            }
  
            //   create JWT token
            const token = jwt.sign(
              {
                userId: user._id,
                userEmail: user.email,
              },
              "RANDOM-TOKEN",
              { expiresIn: "24h" }
            );
  
            //   return success response
            response.status(200).send({
              "message": "Login Successful",
              "email": user.email,
              "token":token,
              "success": true,
              "user": user
            })          
          })
          // catch error if password does not match
          .catch((error) => {
            response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          });
      })
      // catch error if email does not exist
      .catch((e) => {
        response.status(404).send({
          message: "Email not found",
          e,
        });
      });      
  });

app.get("/register", (req, res) => {

})

app.post("/register", (request, response) => {
    // hash the password
    bcrypt
      .hash(request.body.password, 10)
      .then((hashedPassword) => {
        // create a new user instance and collect the data
        const user = new User({
          email: request.body.email,
          password: hashedPassword,
          firstName: request.body.firstName,
          lastName: request.body.lastName,
          bilkentId: request.body.bilkentId,
          doB: request.body.doB,
          cgpa: request.body.cgpa,
          userType: request.body.userType
        });

        console.log(user)
  
        // save the new user
        user
          .save()
          // return success if the new user is added to the database successfully
          .then((result) => {
            console.log("User is saved")
            response.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          // catch error if the new user wasn't added successfully to the database
          .catch((error) => {
            response.status(500).send({
              message: "Error creating user",
              error,
            });
          });
      })
      // catch error if the password hash isn't successful
      .catch((e) => {
        response.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      });
  });

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

app.get("/free-endpoint", (request, response) => {
    response.json({message: "You are free to accesss"})
})

app.get("/auth-endpoint", auth, (request, response) => {
    response.json({message: "You are authorized"})
})


app.listen(port, err => {

    if(err){
        return console.log("Error Happened\n", err)
    }

    console.log(`${port} is listening`)
})

