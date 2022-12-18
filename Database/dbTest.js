const Faculty = require("./Faculty")
const FacultyStaff = require("./FacultyStaf")
const dbConnect = require("./dbConnect")
const MongoClient = require("mongodb").MongoClient

dbConnect()

const facStaff1 = new FacultyStaff({
    name: "Efe Can",
    lastName: "Tepe",
    title: "Candidate Prof",
    link: "bilkent.org"
})

const facStaff2 = new FacultyStaff({
    name: "Hasan Can",
    lastName: "Kaya",
    title: "Comedian",
    link: "tsf"
})

const facStaff3 = new FacultyStaff({
    name: "Zeynep",
    lastName: "Cagrici",
    title: "Master Ninja",
    link: "zeynep.com"
})


const faculty = new Faculty({
    facultyName: "Bilkent Computer Science",
    coordinatorName: "Efe Can Tepe"
})

const faculty1 = new Faculty({
    facultyName: "Bilkent Electrics And Electronics",
    coordinatorName: "Seref Tepe"
})

const faculty2 = new Faculty({
    facultyName: "Bilkent Art",
    coordinatorName: "Halit Yavuz Ibik"
})



faculty.save()
faculty1.save()
faculty2.save()
