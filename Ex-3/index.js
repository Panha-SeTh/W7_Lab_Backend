import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './src/models/index.js';
import attendanceRoutes from './src/routes/attendanceRoutes.js';
import classRoutes from './src/routes/classRoutes.js';
import studentRoutes from './src/routes/studentRoutes.js';
import { errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/attendance', attendanceRoutes);
app.use('/classes', classRoutes);
app.use('/students', studentRoutes);

// Error Handling Middleware
app.use(errorHandler);

async function startServer() {
  try {
    // Sync DB
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully!');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();
