import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  const { email, password } = req.body;

  // Usuario de prueba (hardcodeado)
  if (email !== 'admin@admin.com' || password !== '1234') {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const payload = {
    email,
    role: 'admin'
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );

  res.json({
    token,
    type: 'Bearer'
  });
};
