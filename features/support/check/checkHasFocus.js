const assert = require('assert').strict;

/**
 * Checks if a given element is an active element in the DOM.  Fails if the element does not exist.
 * @param {String} selector CSS selector of the element to check for child elements.
 * @param {String} not The string "not" to negate the check (the element should not have focus).
 */
module.exports = async function(selector, not) {

  /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
  const hasFocus = await this.page.$eval(selector, el => el === document.activeElement);
  const shouldBeFocus = not ? false : true;
    
  assert.strictEqual(hasFocus, shouldBeFocus, `Expected "${selector}" to ${shouldBeFocus ? 'have focus' : 'have no focus'}`);
}