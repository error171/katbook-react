const { proxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    proxyMiddleware('/manga',{
        target: 'https://api.mangadex.org/',
        changeOrigin: true
    }));
};
