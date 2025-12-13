import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import productsRoutes from './src/routes/products.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import { notFoundHandler, errorHandler } from './src/middlewares/error.middleware.js';
import './src/config/firebase.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // ← ESTO

app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
