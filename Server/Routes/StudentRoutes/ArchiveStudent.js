"use strict"

const express = require("express")
let router = express.Router()

router.use(function(req,res,next){
    console.log(req.url)
    next()
})

router 
    .route("")
    .get((req,res) => {

        // Erasmus Applications will be sended

        res.send("Archive Student") // this code will be changed
    })
    
router
    .route("/download")
    .post((req,res) =>{
        let downloadId = req.query.downloadId 

        console.log("Download Id is ", downloadId)
    })

module.exports = router