const assert = require('assert').strict;

/**
 * Checks if an element contains the given text.
 * @param {String} selector CSS selector of the element to check for the given text.
 * @param {String} not String "not" to indicate that the element should not have the given text.
 * @param {String} expectedText Text to check if the given element contains.
 */
module.exports = async function (selector, not, expectedText) {
    /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
    const elementText = await this.page.$eval(selector, el => el.textContent);
    const containsText = elementText && elementText.includes(expectedText);
    const shouldContainText = not ? false : true;

    assert.strictEqual(containsText, shouldContainText, `Expected "${selector}" to ${shouldContainText ? 'contain' : 'not contain'} "${expectedText}" but had "${elementText}" instead`);
}