/**
 * Sets the style attribute of an elements that match a given selector.
 * @param {String} selector Comma separated list of selectors.
 * @param {String} styleProp CSS style property to set.
 * @param {String} styleValue CSS style value to set.
 */
module.exports = async function(selector, styleProp, styleValue) {
    // Turn comma separated list of selectors into an array
    const selectors = selector.split(',');

    // Loop over all the selectors
    for(let i = 0, len = selectors.length; i < len; i++){
        /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
        await this.page.$$eval(selector, (elements, styleProp, styleValue) => {
            elements.forEach(el => el.style[styleProp] = styleValue); // Set the style of each matching element
        }, styleProp, styleValue);   
    }
};