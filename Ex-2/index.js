import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './src/models/index.js';
import authorRoutes from './src/routes/authorRoutes.js';
import bookRoutes from './src/routes/bookRoutes.js';
import { errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);

// Error Handling Middleware
app.use(errorHandler);

async function startServer() {
  try {
    await sequelize.sync();
    console.log('Database synced successfully!');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();
