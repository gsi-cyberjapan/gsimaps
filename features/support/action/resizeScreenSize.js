/**
 * Resize the screnn to a desired size.
 * @param {Number} width The desired width of the screen.
 * @param {Number} height The desired height of the screen.
 */
module.exports = async function(width, height) {

    try {
      //Set viewport to a given width and height and wait a second to allow the viewport change to finish
      await this.page.setViewport({width, height});
      await this.page.waitForTimeout(1000);
      
    }catch (e){
      throw new Error(`Error: width "${width}" or height "${height}" is invalid`);
    }
};