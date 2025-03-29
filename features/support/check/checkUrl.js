const assert = require('assert').strict;

/**
 * Checks if a page's URL matches the expected value
 * @param {String} not The string "not" to indicate the URL should not match the expected.
 * @param {String} expectedUrl The expected URL 
 */
module.exports = async function(not, expectedUrl) {
  const url = await this.page.url();
  const shouldUrlEqual = not ? false : true;

  assert(url !== null, 'Page URL cannot be null');
  assert.strictEqual(url === expectedUrl, shouldUrlEqual, `Expected "${expectedUrl}" to ${shouldUrlEqual ? 'equal' : 'not equal'} "${url}"`);
}