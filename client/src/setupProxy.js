const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://gesundheitswesen_ba:5000',
      changeOrigin: true,
    })
  );
};