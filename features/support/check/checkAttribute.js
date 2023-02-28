const assert = require('assert').strict;

/**
 * Checks the value of an element's attribute.  Fails if the element or attribute does not exist.
 * @param {String} attribute The attribute value to check.
 * @param {String} selector CSS selector of the element to check the property of.
 * @param {String} not The string "not" to negate the check (should not match the property value).
 * @param {String} expectedValue Expected value to check the property for.
 */
module.exports = async function(attribute, selector, not, expectedValue) {
  /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
  const attributeValue = await this.page.$eval(selector, (el, attribute) => { return el.getAttribute(attribute) }, attribute);
  const shouldValuesBeEqual = not ? false : true;
  const shouldEqual = shouldValuesBeEqual ? 'equal' : 'not equal'

  assert(attributeValue !== null, `Expected "${attribute}" to exist`);
  assert.strictEqual(attributeValue === expectedValue, shouldValuesBeEqual, `Expected "${attributeValue}" to ${shouldValuesBeEqual ? 'equal' : 'not equal'} "${expectedValue}" of element "${selector}" attribute "${attribute}"`);
}