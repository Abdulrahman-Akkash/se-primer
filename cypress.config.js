const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/**/*.cy.js',
    excludeSpecPattern: 'cypress/e2e/demo.cy.js', // demo ayrı: npm run demo
    supportFile: false,
    video: true,                 // koşudan 60 sn demo video (cypress/videos/)
    screenshotOnRunFailure: true,
    viewportWidth: 390,          // telefon genişliği
    viewportHeight: 844
  }
});
