const path = require('node:path');
const fs = require('node:fs');

require('dotenv').config({
  path: path.join(__dirname, '.env'),
});

const express = require('express');

const app = express();
const port = Number(process.env.PORT || 3002);
const guiDirectory = path.join(__dirname, 'gui');
const indexFile = path.join(guiDirectory, 'index.html');

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.');
}

app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));

// API routes come before frontend serving.
app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello World from Express!' });
});

// Unknown API routes must not receive the React HTML fallback.
app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'Unknown API endpoint' });
});

app.use(express.static(guiDirectory));

// Support client-side routes when a frontend build exists.
// Express 5 requires a named wildcard; braces include the root path.
app.get('/{*path}', (req, res, next) => {
  if (!req.accepts('html') || !fs.existsSync(indexFile)) {
    return next();
  }

  return res.sendFile(indexFile);
});

app.use((_req, res) => {
  res.status(404).json({ error: 'Unknown endpoint' });
});

// Keep all four arguments: Express uses the signature to identify this.
app.use((err, _req, res, next) => {
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
});

const server = app.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}`);
});

server.on('error', (err) => {
  console.error('Server failed to start:', err);
  process.exitCode = 1;
});
