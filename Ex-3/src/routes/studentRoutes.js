import express from 'express';
import attendanceRepository from '../repositories/attendanceRepository.js';

const router = express.Router();

// GET /students/:id/attendance
router.get('/:id/attendance', async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const records = await attendanceRepository.getStudentSummary(studentId);
    res.json({ success: true, data: records });
  } catch (error) {
    next(error);
  }
});

export default router;
