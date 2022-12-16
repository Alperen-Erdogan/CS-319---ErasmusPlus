"use strict"

const express = require("express")
let router = express.Router()

router.use(function(req,res, next) {
    console.log(req.url)
    next()
})

router  
    .route("/documents")
    // eslint-disable-next-line no-unused-vars
    .get((req,res) => {
        console.log("Documents Entered")
    })

router
    .route("/documents/open")
    .get((req,res) => {
        console.log("/documents/open entered")
    })

router
    .route("/documents/download")
    .post((req,res) => {
        let id = req.query.id
        // function for retrieving the object from the document
        console.log("Id is ", id)
    })


module.exports = router