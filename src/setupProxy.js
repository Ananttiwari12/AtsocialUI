const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth/login",
    createProxyMiddleware({
      target: "https://black-lobster-wrap.cyclic.app",
      changeOrigin: true,
    })
  );
};
