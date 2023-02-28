/**
 * Configure the test suite
 * https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/api_reference.md
 */
const { After, AfterAll, Before, BeforeAll, Status, defineParameterType, setDefaultTimeout, setWorldConstructor } = require('@cucumber/cucumber');
const FeatureScope = require('./scope/FeatureScope');
const BrowserScope = require('./scope/BrowserScope');
const { createFolder } = require('./util/FileSystem');

// Process .env file
require('dotenv').config()

// Timeout, in milliseconds, for puppeteer actions
setDefaultTimeout(30 * 1000);

// `BrowserScope` is provided to all hooks and test steps in a scenario as `this`
setWorldConstructor(BrowserScope)

// String environment variable.  If the string value starts with '$', it's assumed to be the key for an environment variable.
defineParameterType({
  regexp: /"([^"]*)"/,
  transformer: (string) => string.startsWith('$') ? process.env[string.slice(1)] : string,
  name: 'string-env',
  useForSnippets: false
});

// Keep a consistent web browser and page for all scenarios in a feature file.
const featureScope = new FeatureScope();

// Config object passed to every test
const config = {

  // Environment the tests are running in
  environment: process.env.ENV ? process.env.ENV : '',

  // Path used to save generated test reports
  reportPath: process.env.REPORT_PATH ? process.env.REPORT_PATH : './test/reports',

  // Root URL to prepend to URLs when using action/openUrl.js with a URL that doesn't include the http(s) protocol
  rootUrl: process.env.ROOT_URL ? process.env.ROOT_URL : '',

  // Path used by checkScreenshot visual regression tests to save and compare screenshotss
  // Defaults to /test/screenshots if a SCREENSHOT_PATH environment variable isn't pressent.
  screenshotPath: process.env.SCREENSHOT_PATH ? process.env.SCREENSHOT_PATH : './test/screenshots'
}

// Create required folders
BeforeAll(async function(){
  await createFolder(`${config.reportPath}`);
  await createFolder(`${config.screenshotPath}/compare`);
  await createFolder(`${config.screenshotPath}/diff`);
  await createFolder(`${config.screenshotPath}/error`);
  await createFolder(`${config.screenshotPath}/ref`);
});


// Use the same BrowserScope object for each scenario in a feature
Before(async function(scenario) {

  // Check if the current scenario is in the same feature test
  const currentFeature = 'http://localhost:8080';
  if(featureScope.isNewFeature(currentFeature))
    await featureScope.init(currentFeature, this.worldParameters);

  this.page = featureScope.browserScope.page;
  this.browser = featureScope.browserScope.browser;
  this.config = config;
});

// After hook for each scenario
After(async function(scenario){
  featureScope.browserScope = this;

  // Take a screenshot if a scenario fails
  if(scenario.result.status === Status.FAILED) {
    const screenShotName = scenario.pickle.name.replace(/[\W_]+/g, '-');
    await this.page.screenshot({
      path: `${config.screenshotPath}/error/${screenShotName}.png`
    });
  }
});

// After all feature tests are complete
AfterAll(async function() {
  await featureScope.browserScope.close();
});
