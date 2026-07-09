import { Author, Book } from '../models/index.js';

const getAllAuthors = async () => {
	const authors = await Author.findAll();
	console.log(authors);
	return authors;
};

const getBooksByAuthorId = async (authorId) => {
	const booksByAuthor = await Book.findAll({
		include: [
			{
				model: Author,
				where: { id: authorId },
				through: {
					attributes: [],
				},
				attributes: [],
			},
		],
	});

	return booksByAuthor;
};

const createAuthor = async (author) => {
	const createdAuthor = await Author.create(author);
	return createdAuthor;
};

export { getAllAuthors, createAuthor, getBooksByAuthorId };
