import express from 'express';
import { getAllAuthors, createAuthor, getBooksByAuthorId } from '../repositories/authorRepository.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const authors = await getAllAuthors();
    res.json({ success: true, data: authors });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const author = await createAuthor(req.body);
    res.status(201).json({ success: true, data: author });
  } catch (error) {
    next(error);
  }
});

router.get('/:id/books', async (req, res, next) => {
  try {
    const books = await getBooksByAuthorId(req.params.id);
    res.json({ success: true, data: books });
  } catch (error) {
    next(error);
  }
});

export default router;
