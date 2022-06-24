const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware({
      target: 'http://192.168.108.1:3000/',
      changeOrigin: true,
    })
  );
};
