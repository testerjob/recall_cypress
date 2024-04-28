const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false,
    //baseUrl: 'http://www.thetestingworld.com',
    pageLoadTimeout:100000,
    //retries: 3,
  },
});
