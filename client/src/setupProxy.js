//This file sets up the proxy that will automatically run when the app is run on localhost
//Makes it consistent with "static.json" which sets up the same thing for the deployed app

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://collabor8-api.herokuapp.com/',
      changeOrigin: true,
      "pathRewrite": {
        "^/api": "/"
      }
    })
  );
};