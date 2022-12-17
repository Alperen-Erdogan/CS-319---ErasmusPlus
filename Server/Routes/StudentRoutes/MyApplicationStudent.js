/* eslint-disable no-unused-vars */
"use strict"

const express = require('express')
let router = express.Router()

router.use(function(req,res,next) {
    console.log(req.url)
    next()
})


router
    .route("/newApplication")
    .get((req,res) => {
        res.send("newApplication entered")
    })
    .post((req,res) => {

        let firstName = req.query.firstName
        let lastName = req.query.lastName
        let department = req.query.department
        let cgpa = req.query.cgpa
        let hostUniversity = req.query.hostUniversity
        let hostDepartment = req.query.hostDepartment

        console.log(firstName) 
        console.log(lastName) 
        console.log(department) 
        console.log(cgpa) 
        console.log(hostUniversity) 
        console.log(hostDepartment)
        
    })

router
    .route("/editApplication")
    .get((req,res) => {
        
        // Edit application will be fetched by database if it is 
        // Not loaded
        
        res.send("edit application entered")


        
    })
    .post((req,res) => {

        let firstName = req.query.firstName
        let lastName = req.query.lastName
        let department = req.query.department
        let cgpa = req.query.cgpa
        let hostUniversity = req.query.hostUniversity
        let hostDepartment = req.query.hostDepartment

        console.log(firstName) 
        console.log(lastName) 
        console.log(department) 
        console.log(cgpa) 
        console.log(hostUniversity) 
        console.log(hostDepartment)
        
        // Aplication Handler function will be called here

    })

module.exports = router