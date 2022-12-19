"use strict"


const express = require("express")
let router = express.Router()

const Faculty = require("./../../../Database/Faculty")

router.use(function(req, res, next){
    console.log(req.url)
    next()
})

router
    .route("")
    .post((req, res) => {
        Faculty
        .find()
        .then((result) => res.json(result))
        .catch((e) => console.log(e))
    })


module.exports = router
