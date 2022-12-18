"use strict"

const mongoose = require('mongoose')

const facultySchema = new mongoose.Schema({
    
})

function fetchData(){

}


const express = require("express")
let router = express.Router()

router.use(function(req, res, next){
    console.log(req.url)
    next()
})

router
    .route("")
    .post((req, res) => {
        res.json({"dataTable" : "hello"})
    })


module.exports = router
