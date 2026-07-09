import express from 'express';
import { getAllBooks, createBook } from '../repositories/bookRepository.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const books = await getAllBooks();
    res.json({ success: true, data: books });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newBook = await createBook(req.body);
    res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    next(error);
  }
});

export default router;
