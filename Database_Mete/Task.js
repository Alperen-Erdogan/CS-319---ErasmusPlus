const Staff = require('./Staff');
const Application = require('./Application');
const Student = require('./Student');

class Task {
  async getAllStudents() {
    try {
      const students = await Student.find();
      return students;
    } catch (error) {
      throw error;
    }
  }

  async getStudent(studentId) {
    try {
      const student = await Student.findById(studentId);
      return student;
    } catch (error) {
      throw error;
    }
  }

  async getAllApplications() {
    try {
      const applications = await Application.find();
      return applications;
    } catch (error) {
      throw error;
    }
  }
 // _id => applicationId
  async getApplication(_id) {
    try {
      const application = await Application.findById(_id);
      return application;
    } catch (error) {
      throw error;
    }
  }
 // _id => applicationId
  async acceptApplication(_id) {
    try {
      const application = await Application.findByIdAndUpdate(_id, {
        $set: { status: 'Accepted' }
      }, { new: true });
      return application;
    } catch (error) {
      throw error;
    }
  }
// _id => applicationId
  async rejectApplication(_id) {
    try {
      const application = await Application.findByIdAndUpdate(_id, {
        $set: { status: 'Rejected' }
      }, { new: true });
      return application;
    } catch (error) {
      throw error;
    }
  }
// _id => applicationId
  async writeComment(_id, comment) {
    try {
      const application = await Application.findByIdAndUpdate(_id, {
        $set: { comment }
      }, { new: true });
      return application;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Task;
