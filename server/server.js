import express from 'express';
import colors from 'colors';

import { PORT } from './configs/env.js';

const app = express();

// Server
const startServer = () => {
   app.listen(PORT, () => {
      console.log(`Server started on port: http://localhost:${PORT}`.yellow);
   });
};

startServer();
