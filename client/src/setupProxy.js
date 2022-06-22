const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware({
      target: 'https://gesundheitswesen.cyber-city.systems/api',
      changeOrigin: true,
    })
  );
};