const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'frontend', 'dist');
const destination = path.join(root, 'backend', 'gui');

if (!fs.existsSync(path.join(source, 'index.html'))) {
  throw new Error('Frontend build is missing dist/index.html.');
}

fs.rmSync(destination, { recursive: true, force: true });
fs.cpSync(source, destination, { recursive: true });

console.info('Copied frontend build to backend/gui.');
