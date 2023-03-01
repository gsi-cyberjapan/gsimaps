const assert = require('assert');

/**
 * Determine if an element is visible.
 * @param {String} selector CSS selector of the element.
 * @param {String} not Null when checking for visible, otherwise checking for hidden.
 * @param {Number} seconds Number of seconds to wait for element to be visible or hidden. 
 */
module.exports = async function(selector, not, seconds) {
    let error = null;
    const visibilityProp = not ? 'hidden' : 'visible';
    const options = {timeout: seconds ? Number(seconds) * 1000 : 1000};
    options[visibilityProp] = true;

    try {
        await this.page.waitForSelector(selector, options);
    } catch(e){
        error = e;
    }

    assert(error === null, `Expected "${selector}" to be ${visibilityProp}`);
};
