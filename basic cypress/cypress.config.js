const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  screenshotOnRunFailure: true,
  video: false,
  //watchForFileChanges: true,
  screenshotsFolder: "cypress\screenshots",
  videosFolder: "cypress\videos",
  experimentalStudio: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
