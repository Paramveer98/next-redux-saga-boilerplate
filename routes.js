const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

const signupRoutes = require('./src/routes/signup/routes');

const APP_ROUTES = [
  {
    page: 'index',
    pattern: '/'
  },
  // ...signupRoutes,
];

APP_ROUTES.forEach(route => routes.add(route));
