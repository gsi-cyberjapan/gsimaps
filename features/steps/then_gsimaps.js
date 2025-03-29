const { Then } = require('@cucumber/cucumber');

const checkElementVisible = require('../support/check/checkElementVisible');

const assert = require('assert');
const checkContainsText = require('../support/check/checkContainsText');

Then(
  "メインマップが表示されている",
  async function() {
    await checkElementVisible.call(this, ".leaflet-container", '');
  }
);

Then(
  "地図を選択するメニューが表示されていない",
  async function() {
    await checkElementVisible.call(this, ".gsi-mapmenu-container", ' not');
  }
);

Then(
  "地図を選択するメニューが表示されている",
  async function() {
    await checkElementVisible.call(this, ".gsi-mapmenu-container", '');
  }
);

Then(
  "メインマップのソースに {string} が含まれている",
  async function(contains) {
    const urls = await this.page.evaluate(`
      Object.values(GSI.GLOBALS.gsimaps._mainMap._map._layers).map(x => x._url)
    `);
    assert(urls.findIndex(x => x && x.indexOf(contains) >= 0) >= 0, `Expected ${contains} to be in the list of layers: ${urls.join(', ')}`);
  }
);

Then(
  "メインマップのソースに {string} が含まれていない",
  async function(contains) {
    const urls = await this.page.evaluate(`
      Object.values(GSI.GLOBALS.gsimaps._mainMap._map._layers).map(x => x._url)
    `);
    assert(urls.findIndex(x => x && x.indexOf(contains) >= 0) === -1, `Expected ${contains} to not be in the list of layers: ${urls.join(', ')}`);
  }
);

Then(
  "選択中の地図に {string} が含まれている",
  async function(contains) {
    await checkContainsText.call(this, ".gsi-showingmaplist-scrollframe", '', contains);
  }
)

Then(
  "表示されているタイルがすべて読み込み済みになっている",
  async function() {
    const unloadedTiles = await this.page.evaluate(`
      Array.from(document.querySelectorAll('#map .leaflet-container .leaflet-tile:not(.leaflet-tile-loaded)'));
    `);
    assert(unloadedTiles.length === 0, `Expected all tiles to be loaded, but got ${unloadedTiles.length} tiles: ${unloadedTiles.map(x => `x=${x._leaflet_pos.x} y=${x._leaflet_pos.y}`).join(', ')}`);
  }
);
