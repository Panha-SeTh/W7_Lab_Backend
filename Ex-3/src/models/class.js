import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Class = sequelize.define('Class', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  schedule: {
    type: DataTypes.STRING
  }
});

export default Class;
