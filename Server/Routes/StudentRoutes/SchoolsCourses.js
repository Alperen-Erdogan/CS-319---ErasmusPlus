"use strict"
const express = require("express")

let router = express.Router()

router.use(function(req,res,next){
    console.log(req.url)
    next()
})

router
    .route("/")
    .get((req,res) => {
        res.send("Hello World")
    })
    .post((req,res) => {
        let filterName = req.query.filterName
        console.log(filterName)
        res.send(filterName)
    })

module.exports = router