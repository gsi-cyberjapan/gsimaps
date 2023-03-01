const { When } = require('@cucumber/cucumber');

const clickElement = require('../support/action/clickElement');
const deleteCookie = require('../support/action/deleteCookie');
const fileUpload = require('../support/action/fileUpload');
const keyboardPress = require('../support/action/keyboardPress');
const openUrl = require('../support/action/openUrl');
const resizeScreenSize = require('../support/action/resizeScreenSize')
const setElementStyle = require('../support/action/setElementStyle');
const setElementValue = require('../support/action/setElementValue');
const setUserAgent = require('../support/action/setUserAgent');
const scrollToElement = require('../support/action/scrollToElement');
const waitFor = require('../support/action/waitFor');
const waitForSelector = require('../support/action/waitForSelector');

When(
    'I open the url {string}', async function(url) {
        await openUrl.call(this, url);
    }
);

When(
    'I open the url {string-env} with user agent {string}', async function(url, userAgent) {
        await openUrl.call(this, url, userAgent);
    }
);

When(
    'I open the url {string-env} with device {string}', async function(url, device) {
        await openUrl.call(this, url, null, device);
    }
);

When(
    'I click the element/button/link {string}', async function(selector) {
        await clickElement.call(this, selector,  null);
    }
);

When(
    'I click the element/button/link {string} and wait for the element {string}', async function(selector, waitForSelector) {
        await clickElement.call(this, selector,  waitForSelector);
    }
);

When(
    'I set the element/input/select/textarea {string} value to {string-env}',
    setElementValue
);

When(
    'I wait for {float} second(s)',
    waitFor
);

When(
    'I wait for element {string}', async function(selector) {
        await waitForSelector.call(this, selector, null);
    }
);

When(
    'I wait for element {string} for {float} seconds', async function(selector, seconds) {
        await waitForSelector.call(this, selector, seconds);
    }
);

When(
    'I delete the cookie {string-env}',
    deleteCookie
);

When(
    'I set the browser viewport to {int}px width by {int}px height',
    resizeScreenSize
);

When(
    'I scroll to the element {string}',
    scrollToElement
);

When(
    'I set the user agent to {string}',
    setUserAgent
);

When (
    'I press the {string} key', async function(key) {
        await keyboardPress.call(this, key,  null);
    }
)

When (
    'I press the {string} key on the {string} element', async function(key, selector) {
        await keyboardPress.call(this, key,  selector);
    }
)

When (
    'I set the file element {string} value to {string-env}',
    fileUpload
)

When (
    'I set the element {string} style {string} to {string}',
    setElementStyle
)
