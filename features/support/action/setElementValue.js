const assert = require('assert').strict;

/**
 * Sets the value of an input, textarea or select element.  Will only set the value if the element is not
 * disabled/readonly, and in the case of a select, contains an option with a matching value.
 * @param {String} selector The selector of the element to set the alue of.
 * @param {String} value The value to set on the element.
 */
module.exports = async function(selector, value) {
    const valueToSet = value ? value : '';

    /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
    const setValue = (el, valueToSet) => {
        const tagName = el.tagName ? el.tagName.toLowerCase() : null;
        const validTagNames = ['input', 'select', 'textarea'];

        // Is it a valid tag and not disabled/readonly?
        if(validTagNames.includes(tagName) && !el.disabled && !el.readOnly){

            // Does the select element contain the value to be set?
            if(tagName === 'select'){
                for(let i = 0, len = el.options.length; i < len; i++){
                    let option = el.options[i];
                    if(option.value === valueToSet){
                        el.value = valueToSet;
                        option.selected = true;
                        break;
                    }
                }
            } else {
                el.value = valueToSet;              
            }
        }
        return el.value === valueToSet;
    };
    
    const isValueSet = await this.page.$eval(selector, setValue, valueToSet);    
    assert.strictEqual(isValueSet, true, `Error: unable to set "${selector}" value to "${value}"`);
};