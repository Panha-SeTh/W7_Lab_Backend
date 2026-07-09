import { AttendanceRecord, Student, Class } from '../models/index.js';

class AttendanceRepository {
  // Mark attendance for a student in a class on a given date
  async markAttendance(studentId, classId, date, status) {
    // Check if record already exists to update it, or create a new one
    const [record, created] = await AttendanceRecord.findOrCreate({
      where: { StudentId: studentId, ClassId: classId, date: date },
      defaults: { status }
    });
    
    if (!created) {
      record.status = status;
      await record.save();
    }
    return record;
  }

  // Get attendance for a student on a specific date
  async getAttendanceForStudentByDate(studentId, date) {
    return await AttendanceRecord.findAll({
      where: { StudentId: studentId, date: date },
      include: [Class]
    });
  }

  // List attendance for all students in a class
  async getAttendanceByClass(classId) {
    return await AttendanceRecord.findAll({
      where: { ClassId: classId },
      include: [Student]
    });
  }

  // Get attendance summary for a student
  async getStudentSummary(studentId) {
    return await AttendanceRecord.findAll({
      where: { StudentId: studentId },
      include: [Class]
    });
  }
}

export default new AttendanceRepository();
