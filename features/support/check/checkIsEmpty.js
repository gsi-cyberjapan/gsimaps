const assert = require('assert').strict;

/**
 * Checks if a given element has any child elements.  Fails if the element does not exist.
 * @param {String} selector CSS selector of the element to check for child elements.
 * @param {String} not The string "not" to negate the check (the element should not have child elements).
 */
module.exports = async function(selector, not) {
  /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
  const childCount = await this.page.$eval(selector, el => el.children.length);
  const shouldBeEmpty = not ? false : true;

  assert.strictEqual(childCount === 0, shouldBeEmpty, `Expected "${selector}" to ${shouldBeEmpty ? 'be empty' : 'not be empty'}`);
}