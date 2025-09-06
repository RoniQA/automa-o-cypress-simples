const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    baseUrl: null,
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    }
  }
})
