const { defineConfig } = require("cypress");

module.exports = defineConfig({

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mocha",
      overwrite: true,
      html: true,
      json: true,
      video: true
    },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
