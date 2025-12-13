export const login = (req, res) => {
  console.log('ADMIN_USER:', process.env.ADMIN_USER);
  console.log('ADMIN_PASS:', process.env.ADMIN_PASS);
  console.log('BODY:', req.body);

  const { user, password } = req.body;

  if (
    user !== process.env.ADMIN_USER ||
    password !== process.env.ADMIN_PASS
  ) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  res.json({ ok: true });
};
