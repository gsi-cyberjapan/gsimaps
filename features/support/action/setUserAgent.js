/**
 * Sets the Chrome user agent string.
 * @param {String} userAgent The new user agent string for Chrome.
 */
module.exports = async function(userAgent) {
    await this.page.setUserAgent(userAgent);
};