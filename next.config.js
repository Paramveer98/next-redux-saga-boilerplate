const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const webpack = require('webpack');
// Initialize doteenv library
require('dotenv').config();
module.exports = withLess(
  withCSS({
    /* config options here */
    webpack: config => {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        if (
          entries['main.js'] &&
          !entries['main.js'].includes('./polyfills.js')
        ) {
          entries['main.js'].unshift('./polyfills.js');
        }

        return entries;
      };
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      };
      /**
       * Returns environment variables as an object
       */
      const env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
      }, {});

      /** Allows you to create global constants which can be configured
       * at compile time, which in our case is our environment variables
       */
      config.plugins.push(new webpack.DefinePlugin(env));
      return config;
    }
  })
);
