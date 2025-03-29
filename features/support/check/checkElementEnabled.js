const assert = require('assert').strict;

/**
 * Checks if an element is enabled or disabled.
 * @param {String} selector CSS selector of the element to check.
 * @param {String} not String "not" to indicate that the element should not be enabled.
 */
module.exports = async function (selector, not) {
    /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
    const isElementDisabled = await this.page.$eval(selector, el => el.disabled);
    const shouldElementBeDisabled = not ? true : false;

    assert(isElementDisabled !== undefined, `Error: element "${selector}" cannot be enabled or disabled`)
    assert.strictEqual(isElementDisabled, shouldElementBeDisabled, `Expected "${selector}" to be ${shouldElementBeDisabled ? 'disabled' : 'enabled'}`);
}