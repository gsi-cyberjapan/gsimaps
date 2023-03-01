const assert = require('assert').strict;
const puppeteer = require('puppeteer');

/**
 * Open a URL in a web page.
 * @param {String} url The URL to open in a new page object.  This will have the config's
 * rootUrl prepended if it doesn't start with 'http'
 * @param {String} userAgent The browser user agent to set.
 * @param {String} device The device to emulate.  Valid device names can be found in https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js
 */
module.exports = async function(url, userAgent, device) {
    const fullUrl = url.match(/^http.*$/i) ? url : this.config.rootUrl + url;

    // Set the user agent if it exists
    if(userAgent){
        await this.page.setUserAgent(userAgent);
    }

    // Set the device to emulate
    if(device){
        const deviceSettings = puppeteer.devices[device];
        assert.strict(deviceSettings !== undefined, `Error: could not find a device to emulate for "${device}"`);
        await this.page.emulate(deviceSettings);
    }

    return await this.page.goto(fullUrl, {waitUntil: 'networkidle0'});
};