const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: 'https://commerceos.staging.devpayever.com/registration/',
      testAuto: 'https://automationintesting.online/'
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      overwrite: false,
      html: false,
      json: true
    },
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 40000
  }
})
require('@applitools/eyes-cypress')(module)
