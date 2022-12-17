/* eslint-disable no-unused-vars */
"use strict"
const express = require("express")
let router = express.Router()

router.use(function(req,res,next){
    console.log(req.url)
    next();
})

router
    .route("/overview")
    .get((req,res) => {
        res.json({"name " : "Efe"})
    })
    .post((req,res) => {
        
    })
/*
router
    .route("/overview/?id&name")
    .post((req, res) => {
        res.send("Regular Expression worked")
    })
*/
router
    .route("/updateProfile")
    .get((req,res) => {
        res.send("student/updateProfile")
    })
    .post((req, res) => {

        let id = req.query.id
        let name = req.query.name
        let surname = req.query.surname
        let email = req.query.email
        let date = req.query.date
        let nationalId = req.query.nationalId
        let bilkentId = req.query.bilkentId

        console.log( id)
        console.log( name)
        console.log( surname)
        console.log( email )
        console.log( date ) 
        console.log( nationalId )  
        console.log( bilkentId )

        res.send("Hello")

        // These Objects will be send to the ProfileHandler
    })


module.exports = router