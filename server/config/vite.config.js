const { defineConfig } = require('vite');
const { resolve } = require('path');

module.exports = defineConfig({
  root: resolve(__dirname, '../client'),
  server: {
    port: 3000
  }
});