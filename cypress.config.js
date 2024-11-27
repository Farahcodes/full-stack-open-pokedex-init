const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.NODE_ENV === 'production'
      ? 'http://localhost:5000'
      : 'http://localhost:8080',
    setupNodeEvents() {
    },
  },
})
