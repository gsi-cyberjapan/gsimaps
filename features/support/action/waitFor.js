/**
 * Wait for a given number of seconds.
 * @param {Float} seconds The number of seconds to wait.
 */
module.exports = async function(seconds) {
    if(seconds > 0){
        await this.page.waitForTimeout(seconds * 1000);
    } else {
        throw new Error(`Error: "${seconds}" is not a valid time to wait`);
    }
};