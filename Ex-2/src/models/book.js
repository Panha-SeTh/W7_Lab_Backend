import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publicationYear: {
    type: DataTypes.INTEGER
  },
  pages: {
    type: DataTypes.INTEGER
  }
});

export default Book;
