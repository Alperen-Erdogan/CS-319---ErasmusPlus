"use strict"

const express = require("express")
let router = express.Router()

router.use(function(req, res, next){
    console.log(req.url)
    next()
})

router
    .route("")
    .get((req, res) => {
        console.log("/StudentCoordinator/")
        res.send("Coordinators")
    })


module.exports = router
