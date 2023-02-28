const assert = require('assert').strict;

/**
 * Scrolls the element on which it's called into the visible area of the browser window.
 * @param {String} selector The selector of the element to scroll to.
 */
module.exports = async function(selector) {
    let failed = null;
    
    try {        
        //Scroll desired element into view and wait a second for the scroll to complete
        /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
        await this.page.$eval(selector, el => el.scrollIntoView());
        await this.page.waitForTimeout(1000);

    } catch (error) {
        failed = error;
    }
    
    assert.strictEqual(failed, null, `Error: failed to scroll to element matching selector "${selector}"`);
};