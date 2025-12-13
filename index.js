import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import productsRoutes from './src/routes/products.routes.js';
import authRoutes from './src/routes/auth.routes.js';

import { notFoundHandler, errorHandler } from './src/middlewares/error.middleware.js';
import './src/config/firebase.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

/* ===== RUTAS ===== */
app.use('/auth', authRoutes);           
app.use('/api/products', productsRoutes);

/* ===== MIDDLEWARES ===== */
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

