const STATE = process.env.STATE;

const browserName = (STATE === "not-working")
  ? {browserName: 'chrome'}
  : "";

  exports.config = {
    specs: [
        './e2e_tests/specs/**/*.js'
    ],
    maxInstances: 10,
    port: 9515,
    capabilities: [
        {
            maxInstances: 5,
            ...browserName,
            acceptInsecureCerts: true,
            'goog:chromeOptions': {}
        }
    ],
    logLevel: 'error',
    bail: 0,
    baseUrl: "https://webdriver.io",
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
