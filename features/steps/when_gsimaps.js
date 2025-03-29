const { When, defineParameterType } = require('@cucumber/cucumber');

const clickElement = require('../support/action/clickElement');
const deleteCookie = require('../support/action/deleteCookie');
const fileUpload = require('../support/action/fileUpload');
const keyboardPress = require('../support/action/keyboardPress');
const openUrl = require('../support/action/openUrl');
const resizeScreenSize = require('../support/action/resizeScreenSize')
const setElementStyle = require('../support/action/setElementStyle');
const setElementValue = require('../support/action/setElementValue');
const setUserAgent = require('../support/action/setUserAgent');
const scrollToElement = require('../support/action/scrollToElement');
const waitFor = require('../support/action/waitFor');
const waitForSelector = require('../support/action/waitForSelector');
const clickAndDragElement = require('../support/action/clickAndDragElement');

defineParameterType({
  regexp: /左|右|上|下/,
  transformer(direction) {
    const directions = {
      左: 'Left',
      右: 'Right',
      上: 'Up',
      下: 'Down',
    };
    return directions[direction];
  },
  name: 'direction',
});

When(
  "地理院地図が開かれている",
  async function() {
    await openUrl.call(this, "http://localhost:4444");
  }
);

When(
  '{string} をクリック',
  async function(title) {
    await clickElement.call(this, `[title=${title}]`,  null);
  }
);

When(
  '{float} 秒待つ',
  waitFor
);

When(
  "{string} の地図を選択する",
  async function(mapName) {
    await clickElement.call(this, `.gsi-basemappanel-container [title=${mapName}]`, null);
  }
);

When(
  "地図を {direction} に {int} px移動する",
  async function(direction, pixels) {
    await clickAndDragElement.call(this, '.leaflet-container', direction, pixels);
  }
)
