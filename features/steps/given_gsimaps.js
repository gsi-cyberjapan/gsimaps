const { Given } = require('@cucumber/cucumber');

const checkAttribute = require('../support/check/checkAttribute');
const checkAttributeContains = require('../support/check/checkAttributeContains');
const checkContainsText = require('../support/check/checkContainsText');
const checkElementEnabled = require('../support/check/checkElementEnabled');
const checkElementExists = require('../support/check/checkElementExists');
const checkElementValue = require('../support/check/checkElementValue');
const checkElementVisible = require('../support/check/checkElementVisible');
const checkIsEmpty = require('../support/check/checkIsEmpty');
const checkUrl = require('../support/check/checkUrl');
const checkHasFocus = require("../support/check/checkHasFocus");
const checkIsChecked = require('../support/check/checkIsChecked');
const checkCookieExists = require("../support/check/checkCookieExists");
const checkCookieValue = require("../support/check/checkCookieValue");
const openUrl = require('../support/action/openUrl');
const checkTitleContains = require("../support/check/checkTitleContains");
const checkUrlContains = require("../support/check/checkUrlContains");

Given(
  "地理院地図を開く",
  async function() {
    await openUrl.call(this, "http://localhost:4444");
  }
);

Given(
  "URL {string} が開かれている",
  async function(url) {
    await openUrl.call(this, "http://localhost:4444/" + url);
  }
);
