import sequelize from '../config/database.js';
import Student from './student.js';
import Class from './class.js';
import AttendanceRecord from './attendanceRecord.js';

// Define relationships
Student.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Student);

Class.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Class);

export {
  sequelize,
  Student,
  Class,
  AttendanceRecord
};
