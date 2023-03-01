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
    'the url {string-env} is opened', async function(url) {
        await openUrl.call(this, url);
    }
);

Given(
    'the url {string-env} with user agent {string} is opened', async function(url, userAgent) {
        await openUrl.call(this, url, userAgent);
    }
);

Given(
    'the url {string-env} with device {string} is opened', async function(url, device) {
        await openUrl.call(this, url, null, device);
    }
);

Given(
    /^the element "([^"]*)" is( not)? visible$/, async function(selector, not){
        await checkElementVisible.call(this, selector, not);
    }
);

Given(
    /^the element "([^"]*)" is( not)? visible after "([^"]*)" seconds$/, async function(selector, not, seconds){
        await checkElementVisible.call(this, selector, not, seconds);
    }
);

Given(
    /^the element "([^"]*)?" value is( not)? "([^"]*)?"$/,
    checkElementValue
);

Given(
    /^the page url is( not)? "([^"]*)?"$/,
    checkUrl
);

Given(
    /^the attribute "([^"]*)?" from element "([^"]*)?" is( not)? "([^"]*)?"$/,
    checkAttribute
);

Given(
    /^the attribute "([^"]*)?" from element "([^"]*)?"( not)? contain "([^"]*)?"$/,
    checkAttributeContains
);

Given(
    /^the element "([^"]*)"( does not)? contains? text "([^"]*)"$/,
    checkContainsText
);

Given(
    /^element "([^"]*)?" is( not)? on the page$/,
    checkElementExists
);

Given(
    /^the element "([^"]*)?" is( not)? empty$/,
    checkIsEmpty
);

Given(
    /^the element "([^"]*)?" is( not)? checked$/,
    checkIsChecked
);

Given(
    /^the element "([^"]*)?" has( no)* focus$/,
    checkHasFocus
);

Given(
    /^the element "([^"]*)?" is( not)? enabled$/,
    checkElementEnabled
);

Given(
    /^the cookie "([^"]*)?" value is( not)? "([^"]*)?"$/,
    checkCookieValue
);

Given(
    /^the cookie "([^"]*)?"( not)? exist?$/,
    checkCookieExists
);

Given(
    /^the page title (does not )?contains? "([^"]*)?"$/,
    checkTitleContains
);

Given(
    /^the page url (does not )?contains? "([^"]*)?"$/,
    checkUrlContains
);
