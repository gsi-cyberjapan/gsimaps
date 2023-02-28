const assert = require('assert').strict;

/**
 * Checks the web page `<title>` contains a given string.
 * @param {String} not String "not" to indicate that the element should not have the given text.
 * @param {String} substring Expected substring contained by the page title.
 */
module.exports = async function (not, substring) {    
    const titleValue = await this.page.title();
    const containsTitle = titleValue && substring && titleValue.includes(substring);
    const shouldContainExpectedTitle = not ? false : true;

    assert.strictEqual(containsTitle, shouldContainExpectedTitle, `Expected "${titleValue}" to ${shouldContainExpectedTitle ? 'contain' : 'not contain'} "${substring}"`);
}