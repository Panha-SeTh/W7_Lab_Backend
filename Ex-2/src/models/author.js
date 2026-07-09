import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Author = sequelize.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthYear: {
    type: DataTypes.INTEGER
  }
});

export default Author;
