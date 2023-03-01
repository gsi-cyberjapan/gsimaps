const puppeteer = require('puppeteer');
const puppeteerOptions = require('../../../package.json').puppeteerOptions;

/**
 * Manage the Puppeteer browser and page objects.
 */
class BrowserScope {
    constructor(args){
        this.browser = null;
        this.config = null;
        this.page = null;
        this.worldParameters = args && args.parameters ? args.parameters : {};
        this.attach = args && args.attach ? args.attach : null;
    }

    async init(){
        const defaultOptions = {
            args: ['--no-sandbox', '--disable-dev-shm-usage'], 
            ignoreHTTPSErrors: true
        }
        this.close();

        this.config = {...defaultOptions, ...puppeteerOptions, ...this.worldParameters};
        if('browserWSEndpoint' in this.config) {
            this.browser = await puppeteer.connect(this.config);
        } else {
            this.browser = await puppeteer.launch(this.config);
        }
        this.page = await this.browser.newPage();
    }

    async close(){
        if(this.browser) {
            if('browserWSEndpoint' in this.config) {
                await this.browser.disconnect();
            } else {
                await this.browser.close();
            }
        }

        this.browser = null;
        this.config = null;
        this.page = null;
    }
}

module.exports = BrowserScope;
