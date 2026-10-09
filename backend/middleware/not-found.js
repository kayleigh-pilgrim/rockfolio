function apiNotFound(_req, res) {
  res.status(404).json({ error: 'Unknown API endpoint' });
}

function notFound(_req, res) {
  res.status(404).json({ error: 'Unknown endpoint' });
}

module.exports = { apiNotFound, notFound };