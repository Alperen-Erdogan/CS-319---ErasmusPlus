const Faculty = require("./Faculty")
const FacultyStaff = require("./FacultyStaf")
const dbConnect = require("./dbConnect")
const MongoClient = require("mongodb").MongoClient
const SchoolCourses = require("./SchoolCourses")
dbConnect()

/*
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
*/

const school = new SchoolCourses({
    "Erasmus": "Erasmus",
    "HostUniName": "Uppsala University",
    "HostUniDep": "unknown",
    "CourseCode": "1DT044",
    "CourseName": "Operating Systems 1",
    "CourseCredit": "5.00 S",
    "BilkentCourseCode": "CS342",
    "BilkentCourseName": "Operating Systems",
    "BilkentCourseCredit": "4.00",
    "BilkentCourseDesignation": "CS Required Course",
    "Exemption": " ",
    "FYKDate": "10.12.13/8.11.13/12.9.13",
    "EntryDate": "10/8/2013",
    "Description": "uncertain credit type"
})

const school1 = new SchoolCourses({
    "Erasmus": "Erasmus",
        "HostUniName": "Uppsala University",
        "HostUniDep": "unknown",
        "CourseCode": "1TD388",
        "CourseName": "Computer Graphics",
        "CourseCredit": "10.00 S",
        "BilkentCourseCode": "-",
        "BilkentCourseName": "Technical Elective (CS465)",
        "BilkentCourseCredit": "3.00",
        "BilkentCourseDesignation": "CS Required Course",
        "Exemption": "CS465",
        "FYKDate": "10.12.13/8.11.13/12.9.13",
        "EntryDate": "11/22/2013",
        "Description": ""
})

const school2 = new SchoolCourses({
    "Erasmus": "Bilateral",
        "HostUniName": "University of California, Los Angeles",
        "HostUniDep": "unknown",
        "CourseCode": "ELENG102",
        "CourseName": "Systems and Signals",
        "CourseCredit": "4.00 Q",
        "BilkentCourseCode": " EEE321",
        "BilkentCourseName": "Signals and Systems",
        "BilkentCourseCredit": "4.00",
        "BilkentCourseDesignation": "EEE Required Course",
        "Exemption": " ",
        "FYKDate": "20/9/13",
        "EntryDate": "10/8/2013",
        "Description": ""
})

const school3 = new SchoolCourses({
    "Erasmus": "Erasmus",
        "HostUniName": "Uppsala University",
        "HostUniDep": "unknown",
        "CourseCode": "1DT044",
        "CourseName": "Operating Systems 1",
        "CourseCredit": "5.00 S",
        "BilkentCourseCode": "CS342",
        "BilkentCourseName": "Operating Systems",
        "BilkentCourseCredit": "4.00",
        "BilkentCourseDesignation": "CS Required Course",
        "Exemption": " ",
        "FYKDate": "10.12.13/8.11.13/12.9.13",
        "EntryDate": "10/8/2013",
        "Description": "uncertain credit type"
})

const school4 = new SchoolCourses({
    "Erasmus": "Erasmus",
    "HostUniName": "Uppsala University",
    "HostUniDep": "unknown",
    "CourseCode": "1TD388",
    "CourseName": "Computer Graphics",
    "CourseCredit": "10.00 S",
    "BilkentCourseCode": "-",
    "BilkentCourseName": "Technical Elective (CS465)",
    "BilkentCourseCredit": "3.00",
    "BilkentCourseDesignation": "CS Required Course",
    "Exemption": "CS465",
    "FYKDate": "10.12.13/8.11.13/12.9.13",
    "EntryDate": "11/22/2013",
    "Description": ""
})

const school5 = new SchoolCourses({
    "Erasmus": "Bilateral",
        "HostUniName": "University of California, Los Angeles",
        "HostUniDep": "unknown",
        "CourseCode": "ELENG102",
        "CourseName": "Systems and Signals",
        "CourseCredit": "4.00 Q",
        "BilkentCourseCode": " EEE321",
        "BilkentCourseName": "Signals and Systems",
        "BilkentCourseCredit": "4.00",
        "BilkentCourseDesignation": "EEE Required Course",
        "Exemption": " ",
        "FYKDate": "20/9/13",
        "EntryDate": "10/8/2013",
        "Description": ""
})

school.save()
school1.save()
school2.save()
school3.save()
school4.save()
school5.save()


