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
        res.send("student/overview/")
    })
    .post((req,res) => {
        
        let id = req.query.id
        let email = req.query.email
        console.log("Id is ", id)
        console.log("email is ", email)
        res.send(id)
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

    })


module.exports = router