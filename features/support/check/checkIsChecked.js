const assert = require('assert').strict;

/**
 * Determine if an element is cheked. Fails if the element does not exist.
 * @param {String} selector CSS selector of the element.
 * @param {String} not The string "not" to negate the check (the element should not be checked)
 */
module.exports = async function(selector, not) {
    
    /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
    const isChecked = await this.page.$eval(selector, el => el.checked);
    const shouldBeChecked = not ? false : true;

    assert.strictEqual(isChecked !== undefined, true, `Error: "${selector}" is not a checkbox element`);
    assert.strictEqual(isChecked, shouldBeChecked, `Expected "${selector}" to ${shouldBeChecked ? 'be checked' : 'be unchecked'}`);
};
