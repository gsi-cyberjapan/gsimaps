const assert = require('assert').strict;

/**
 * Checks if an element's attribute does (or does not) contain a given string.  Fails if the element or attribute does not exist.
 * @param {String} attribute The attribute value to check.
 * @param {String} selector CSS selector of the element to check the property of.
 * @param {String} not The string "not" to negate the check (should not match the property value).
 * @param {String} containedValue Expected value to check the property for.
 */
module.exports = async function(attribute, selector, not, containedValue) {
  /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
  const attributeValue = await this.page.$eval(selector, (el, attribute) => { return el.getAttribute(attribute) }, attribute);
  const shouldValueBeContained = not ? false : true;

  assert(attributeValue !== null, `Expected "${attribute}" to exist`);
  assert.strictEqual(attributeValue.includes(containedValue), shouldValueBeContained, `Expected "${attributeValue}" to ${shouldValueBeContained ? 'contain' : 'not contain'} "${containedValue}" of element "${selector}" attribute "${attribute}"`);
}