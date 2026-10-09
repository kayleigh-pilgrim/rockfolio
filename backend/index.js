const path = require('node:path');
const stoneRoutes = require('./routes/stones');
const createSpaFallback = require('./middleware/spa-fallback');
const errorHandler = require('./middleware/error-handler');
const { apiNotFound, notFound } = require('./middleware/not-found');

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
app.use('/api/stones', stoneRoutes);

// Unknown API routes must not receive the React HTML fallback.
app.use('/api', apiNotFound);

app.use(express.static(guiDirectory));

// Support client-side routes when a frontend build exists.
// Express 5 requires a named wildcard; braces include the root path.
app.get('/{*path}', createSpaFallback(indexFile));

app.use(notFound);

app.use(errorHandler);

const server = app.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}`);
});

server.on('error', (err) => {
  console.error('Server failed to start:', err);
  process.exitCode = 1;
});
