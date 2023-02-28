/**
 * Set the contents of an input[type='file'] element
 * @param {String} selector CSS selector of the input[type='file'] element.
 * @param {String} filePath The path of the file to upload.
 */
module.exports = async function(selector, filePath) {
    const input = await this.page.$(selector);
    await input.uploadFile(filePath);
};