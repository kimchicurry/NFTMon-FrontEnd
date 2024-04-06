const { override, fallback } = require("customize-cra");

module.exports = override(
  fallback({
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
    crypto: require.resolve("crypto-browserify"),
  })
);
