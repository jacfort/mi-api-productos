import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

const VALID_USER = process.env.ADMIN_USER || 'admin';
const VALID_PASS = process.env.ADMIN_PASS || '1234';

export const authenticate = async (username, password) => {
  if (username === VALID_USER && password === VALID_PASS) {
    const payload = { username };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    return { token };
  } else {
    const err = new Error('Credenciales inválidas');
    err.status = 401;
    throw err;
  }
};
