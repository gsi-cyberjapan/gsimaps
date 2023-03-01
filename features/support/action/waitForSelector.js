/**
 * Wait for a selector to exist.
 * @param {String} selector The selector to wait for. 
 * @param {Number} seconds The number of seconds to wait.
 */
module.exports = async function(selector, seconds) {
    const timeout = seconds ? seconds : 30;
    const options = {timeout: timeout * 1000};
    await this.page.waitForSelector(selector, options);
};