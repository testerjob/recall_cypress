/*
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
      watchForFileChanges:false,
      //baseUrl: 'http://www.thetestingworld.com',
      pageLoadTimeout:100000,
      //retries: 3,
      //reporter: "mochawesome",
      //reporter: '../node_modules/cypress-mochawesome-reporter',
      //reporterOptions: {
        //charts: true,
        //overwrite: false,
        //html: false,
        //json: true,
        //reportDir: 'reports/mochawesome',
        //reportDir: "cypress/reports",
    }

  },
})
*/

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    reporter: "mochawesome",
    projectId: "i3ct1d",
    video: false,
    //retries: 3,
    reporterOptions : {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/reports/mochawesome-report",
      reportPageTitle :"Project Frame Report",
      embeddedScreenshots: true,
    },
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
    },
    
  },
})