import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  console.log('ENV USER:', process.env.ADMIN_USER);
  console.log('ENV PASS:', process.env.ADMIN_PASS);
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
// 

// export const login = (req, res) => {
//   const { email, password } = req.body;

//   // Usuario de prueba (hardcodeado)
//   if (email !== 'admin@admin.com' || password !== '1234') {
//     return res.status(401).json({ message: 'Credenciales inválidas' });
//   }

//   const payload = {
//     email,
//     role: 'admin'
//   };

//   const token = jwt.sign(
//     payload,
//     process.env.JWT_SECRET,
//     { expiresIn: process.env.JWT_EXPIRES }
//   );

//   res.json({
//     token,
//     type: 'Bearer'
//   });
// };