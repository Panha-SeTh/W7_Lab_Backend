import express from 'express';
import attendanceRepository from '../repositories/attendanceRepository.js';

const router = express.Router();

// POST /attendance?studentId=1&date=2025-06-17
// Body: { "classId": 1, "status": "Present" }
router.post('/', async (req, res, next) => {
  try {
    const { studentId, date } = req.query;
    const { classId, status } = req.body;
    
    if (!studentId || !date || !classId || !status) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const record = await attendanceRepository.markAttendance(studentId, classId, date, status);
    res.status(201).json({ success: true, data: record });
  } catch (error) {
    next(error);
  }
});

// GET /attendance?studentId=1&date=2025-06-17
router.get('/', async (req, res, next) => {
  try {
    const { studentId, date } = req.query;
    if (!studentId || !date) {
      return res.status(400).json({ error: 'Missing studentId and date query parameters' });
    }

    const records = await attendanceRepository.getAttendanceForStudentByDate(studentId, date);
    res.json({ success: true, data: records });
  } catch (error) {
    next(error);
  }
});

export default router;
