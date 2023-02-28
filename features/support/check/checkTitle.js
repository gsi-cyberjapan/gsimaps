const assert = require('assert');

/**
 * Checks if the web page `<title>` matches the given string.
 * @param {String} title Expected title of the web page.
 */
module.exports = async function(title) {
  const pageTitle = await this.page.title();
  assert(pageTitle === title, `Expected "${pageTitle}" to equal "${title}"`);
}