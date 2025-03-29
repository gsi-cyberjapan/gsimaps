const assert = require('assert').strict;

/**
 * Clicks an element, drags it by the given amount, then releases it.
 */
module.exports = async function(selector, direction, pixels) {
    let failed = null;

    const deltaX = direction === 'Left' ? -pixels : direction === 'Right' ? pixels : 0;
    const deltaY = direction === 'Up' ? -pixels : direction === 'Down' ? pixels : 0;

    try {
      const page = this.page;
      let elm = await (await page.waitForSelector(selector, { visible: true }));
      let bounding_box = await elm.boundingBox();
      let x = bounding_box.x + bounding_box.width / 2;
      let y = bounding_box.y + bounding_box.height / 2;
      await page.mouse.move(x, y);
      await page.mouse.down();
      await new Promise(resolve => setTimeout(resolve, 50));
      await page.mouse.move(x + deltaX, y + deltaY, { steps: 10 });
      await new Promise(resolve => setTimeout(resolve, 50));
      await page.mouse.up();
      await new Promise(resolve => setTimeout(resolve, 50));

    } catch (error) {
        failed = error;
    }

    assert.strictEqual(failed, null, `Error: failed to scroll element matching selector "${selector}": ${failed}`);
};
