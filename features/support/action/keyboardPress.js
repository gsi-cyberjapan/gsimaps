/**
 * Presses a key on the keyboard
 * @param {String} key The key to press
 * @param {String} selector The element to focus before pressing the key
 */
module.exports = async function(key, selector) {
    if(selector){
        await this.page.focus(selector);
    }
    await this.page.keyboard.press(key);
};