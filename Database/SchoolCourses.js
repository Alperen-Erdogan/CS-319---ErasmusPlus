const mongoose = require('mongoose')

const schoolScheme = new mongoose.Schema({
    "Erasmus": String,
    "HostUniName": String,
    "HostUniDep": String,
    "CourseCode": String,
    "CourseName": String,
    "CourseCredit": String,
    "BilkentCourseCode": String,
    "BilkentCourseName": String,
    "BilkentCourseCredit": String,
    "BilkentCourseDesignation": String,
    "Exemption": String,
    "FYKDate": String,
    "EntryDate": String,
    "Description": String
})

module.exports = mongoose.model.School || mongoose.model("School", schoolScheme)