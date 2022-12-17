

// This code block checks for whether the given program body of the applicatin
// is proper or not 

function MyAplicationDatabaseHandler(application){

    if(application.name === undefined || application.lastName === undefined 
        || application.department === undefined || application.cgpa === undefined 
        || application.hostUniversity === undefined || application.hostDeparment === undefined){

            return false // Application is failed
        }

}


module.exports = MyAplicationDatabaseHandler