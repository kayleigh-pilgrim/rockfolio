// Keep all four arguments: Express uses the signature to identify this.
function errorHandler(err, _req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);

  if (err.type === 'entity.parse.failed') {
    res.statusMessage = 'Invalid JSON';
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  if (err.type === 'entity.too.large') {
    res.statusMessage = 'Request body too large';
    return res.status(413).json({ error: 'Request body too large' });
  }

  if (err.name === 'ValidationError') {
    res.statusMessage = 'Validation error';
    return res.status(400).json({ error: 'Validation error' });
  }

  if (err.name === 'CastError') {
    res.statusMessage = 'Invalid ID';
    return res.status(400).json({ error: 'Invalid ID' });
  }

  // If trying to add duplicate entry
  if (err.code === 11000) {
    res.statusMessage = 'Duplicate entry';
    return res.status(400).json({ error: 'Duplicate entry' });
  }

  res.statusMessage = 'Internal server error';
  return res.status(500).json({ error: 'Internal server error' });
}

module.exports = errorHandler;
