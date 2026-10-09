// Keep all four arguments: Express uses the signature to identify this.
function errorHandler(err, _req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  if (err.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Request body too large' });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: 'Validation error' });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  return res.status(500).json({ error: 'Internal server error' });
}

module.exports = errorHandler;
