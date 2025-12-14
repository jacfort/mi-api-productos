import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ message: 'Faltan credenciales' });
  }

  const ADMIN_USER = process.env.ADMIN_USER || 'admin';
  const ADMIN_PASS = process.env.ADMIN_PASS || '1234';

  if (user !== ADMIN_USER || password !== ADMIN_PASS) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = jwt.sign(
    { user, role: 'admin' },
    process.env.JWT_SECRET || 'secret_fallback',
    { expiresIn: '1h' }
  );

  res.json({
    token,
    type: 'Bearer'
  });
};
