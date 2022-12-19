const Faculty = require("./Faculty")
const FacultyStaff = require("./FacultyStaf")
const dbConnect = require("./dbConnect")
const MongoClient = require("mongodb").MongoClient

dbConnect()


const faculty = new Faculty({
    facultyName: "Hacettepe Medicine",
    coordinatorName: "Bilgesu Tepe"
})

const faculty1 = new Faculty({
    facultyName: "Ankara Medicine",
    coordinatorName: "Zuhra Tepe"
})

const faculty2 = new Faculty({
    facultyName: "Cankaya Law",
    coordinatorName: "Ugur Doga Yazici"
})

const faculty3 = new Faculty({
    facultyName: "Istanbul University Medicine",
    coordinatorName: "Aziz Sancar"
})

const faculty4 = new Faculty({
    facultyName: "Ankara Medicine",
    coordinatorName: "Zuhra Tepe"
})

const faculty6 = new Faculty({
    facultyName: "Bilkent Engineering",
    coordinatorName: "Orkun Ozyurt"
})

const faculty7 = new Faculty({
    facultyName: "Bilgi History",
    coordinatorName: "Emrah Safa Gurkan"
})

const faculty8 = new Faculty({
    facultyName: "Bilkent CTIS",
    coordinatorName: "Ayberk Kucukarslan"
})

const faculty9 = new Faculty({
    facultyName: "Harvard Computer Science",
    coordinatorName: "Arda Senyurek"
})


faculty.save()
faculty1.save()
faculty2.save()
faculty3.save()
faculty4.save()
faculty6.save()
faculty7.save()
faculty8.save()
faculty9.save()