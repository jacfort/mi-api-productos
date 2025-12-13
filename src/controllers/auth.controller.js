import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  const { user, password } = req.body;

  // Validación básica
  if (!user || !password) {
    return res.status(400).json({ message: 'Faltan credenciales' });
  }

  // Comparar contra variables de entorno
  if (
    user !== process.env.ADMIN_USER ||
    password !== process.env.ADMIN_PASS
  ) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  // Crear JWT
  const token = jwt.sign(
    {
      user,
      role: 'admin'
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    token,
    type: 'Bearer'
  });
};
