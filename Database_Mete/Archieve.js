const Application = require('./Application');

class Archieve {
    async getArchieveApplications(semester) {
        try {
          const applications = await Application.find({semester: semester});
          return applications;
        } catch (error) {
          throw error;
        }
      }
}

module.exports = Archieve;