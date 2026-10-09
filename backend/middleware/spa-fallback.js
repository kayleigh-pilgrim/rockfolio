const fs = require('node:fs');

function createSpaFallback(indexFile) {
  return (req, res, next) => {
    if (!req.accepts('html') || !fs.existsSync(indexFile)) {
      return next();
    }

    return res.sendFile(indexFile);
  };
}

module.exports = createSpaFallback;
