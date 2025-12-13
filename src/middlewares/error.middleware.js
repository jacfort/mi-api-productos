export const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
};

export const errorHandler = (err, req, res, next) => {
  console.error(err);
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';
  res.status(status).json({ message });
};
