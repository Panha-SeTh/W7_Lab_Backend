import { Book, Author } from '../models/index.js';

const getAllBooks = async () => {
	const books = await Book.findAll();
	return books;
};

const createBook = async (bookAuthors) => {
	const createdBook = await Book.create({
		title: bookAuthors.title,
		publicationYear: bookAuthors.publicationYear,
		pages: bookAuthors.pages,
	});

	await createdBook.addAuthors(bookAuthors.authorIds);
	return createdBook;
};

export { getAllBooks, createBook };
