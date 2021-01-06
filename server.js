/* eslint-disable no-undef */
const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const routes = require('./routes');
const config = require('./config');
const appEnv = process.env.APP_ENV;

const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(cookieParser());
    server.get('*', (req, res) => {
      return handler(req, res, req.query);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on port:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
