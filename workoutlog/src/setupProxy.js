// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/data',
        createProxyMiddleware({
            target: 'http://localhost:4000', // Change to your server's address
            changeOrigin: true,
        })
    );
};
