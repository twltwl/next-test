const express = require('express');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 4711
const next = require('next');

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server ready on http://localhost:${port}`);
  });
});
