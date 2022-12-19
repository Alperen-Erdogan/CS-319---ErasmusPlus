"use strict"
const express = require("express")

let router = express.Router()

const SchoolCourses = require("./../../../Database/SchoolCourses")

router.use(function(req,res,next){
    console.log(req.url)
    next()
})

router
    .route("/")
    .post((req,res) => {
        SchoolCourses
        .find()
        .then((result) => res.json(result))
        .catch((e) => console.log(e))

    })

module.exports = router