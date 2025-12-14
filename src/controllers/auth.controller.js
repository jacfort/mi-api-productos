import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  const { user, password } = req.body;

  console.log("--- DEBUG LOGIN ---");
  console.log("Recibido user:", `"${user}"`); 
  console.log("Recibido pass:", `"${password}"`);

  if (!user || !password) {
    return res.status(400).json({ message: 'Faltan credenciales' });
  }


  const envUser = process.env.ADMIN_USER || 'admin';
  const envPass = process.env.ADMIN_PASS || '1234';

  const ADMIN_USER = String(envUser).trim();
  const ADMIN_PASS = String(envPass).trim();

  console.log("Esperado user:", `"${ADMIN_USER}"`);
  console.log("Esperado pass:", `"${ADMIN_PASS}"`);

  if (user !== ADMIN_USER || password !== ADMIN_PASS) {
    console.log(">> La comparación falló");
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