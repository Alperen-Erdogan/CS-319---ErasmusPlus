const express = require("express") // Starting Point of the server
const port = 3000
const MyProfileStudent = require("./Routes/StudentRoutes/MyProfileStudent")
const app = express()

app.use(express.json());
app.use("/MyProfileStudent",MyProfileStudent);

app.get("/", (req,res) => {
    console.log("Entered")
})


app.listen(port, err => {

    if(err){
        return console.log("Error Happened\n", err)
    }

    console.log(`${port} is listening`)
})

