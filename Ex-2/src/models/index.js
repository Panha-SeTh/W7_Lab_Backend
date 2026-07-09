import sequelize from '../config/database.js';
import Author from './author.js';
import Book from './book.js';

// Define Relationships
Author.belongsToMany(Book, { through: 'AuthorBooks' });
Book.belongsToMany(Author, { through: 'AuthorBooks' });

export {
  sequelize,
  Author,
  Book
};
