const assert = require('assert').strict;

/**
 * Checks if an element does, or does not, exist on the page.
 * @param {String} selector CSS selector of the element to check for.
 * @param {String} not The string "not" to negate the check (element should not exist).
 */
module.exports = async function(selector, not) {
  const elem = await this.page.$(selector);
  const shouldElementExist = not ? false : true;

  assert.strictEqual(elem !== null, shouldElementExist, `Expected "${selector}" to ${shouldElementExist ? 'exist' : 'not exist'}`);
}