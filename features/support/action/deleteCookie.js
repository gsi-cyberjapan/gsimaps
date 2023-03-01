const assert = require('assert').strict;
/**
 * Delete the cookie present in the web page.
 * @param {String} cname The name of the cookie to delete in a web page.
 */
module.exports = async function(cname) {
    const cookieJar = await this.page.cookies();
    let cookiePicked;
    for (let i = 0, length = cookieJar.length ; i < length; i++) {
        const cookie = cookieJar[i];
        if(cname === cookie.name){
            cookiePicked = i;
        }
    }
    assert(cookiePicked !== undefined, `Error: unable to find '${cname}'.`)
    return await this.page.deleteCookie(cookieJar[cookiePicked]);
};