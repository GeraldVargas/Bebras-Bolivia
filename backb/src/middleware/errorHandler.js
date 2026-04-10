// Global error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(err);

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    status: 'error',
    message,
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
};

export default errorHandler;
