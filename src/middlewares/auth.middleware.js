import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Token no enviado' });
    }

    const token = authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // guardamos el usuario en el request por si lo necesitás después
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token no válido o expirado' });
  }
};
