import express from 'express';
import colors from 'colors';

import { PORT } from './configs/env.js';
import errorMiddleware from './middlewares/error.middleware.js';
import connectToDatabase from './database/mongodb.js';
import authRouter from './routes/auth.routes.js';
import taskRouter from './routes/task.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tasks', taskRouter);

app.use(errorMiddleware);

// Server
const startServer = async () => {
   await connectToDatabase();
   app.listen(PORT, () => {
      console.log(`Server started on port: http://localhost:${PORT}`.yellow);
   });
};

startServer();
