import express from 'express';
import attendanceRepository from '../repositories/attendanceRepository.js';

const router = express.Router();

// GET /classes/:id/attendance
router.get('/:id/attendance', async (req, res, next) => {
  try {
    const classId = req.params.id;
    const records = await attendanceRepository.getAttendanceByClass(classId);
    res.json({ success: true, data: records });
  } catch (error) {
    next(error);
  }
});

export default router;
