const BrowserScope = require('./BrowserScope');

/**
 * Common context for all scenarios in a feature file.  Allows us to keep the same browser and
 * page instance across all tests within a feature file.
 */
class FeatureScope {
    constructor(){
        this.browserScope = null;
        this.feature = null;
        this.coverageJs = null;
        this.coverageCss = null;
    }

    /**
     * Checks if a new feature is being run.
     * @param {String} currentFeature Name of the feature being run.
     */
    isNewFeature(currentFeature){
        return this.feature !== currentFeature;
    }

    /**
     * Initializes the scope for the current feature file.
     * @param {String} currentFeature Name of the feature being run.
     * @param {Object} worldParameters Parameters passed to the world constructor by Cucumber.js' --world-parameters CLI arg.
     */
    async init(currentFeature, worldParameters){
        this.feature = currentFeature;
        
        if(this.browserScope){
            await this.browserScope.close();
            this.browserScope = null;
        }
        
        this.browserScope = new BrowserScope({parameters: worldParameters});
        await this.browserScope.init();
    }

    async coverageStart(){
        if(this.browserScope && this.browserScope.page){
            await Promise.all([
                this.browserScope.page.coverage.startJSCoverage(),
                this.browserScope.page.coverage.startCSSCoverage()
            ]);
        }
    }

    async coverageStop(){
        if(this.browserScope && this.browserScope.page){
            [this.coverageJs, this.coverageCss] = await Promise.all([
                this.browserScope.page.coverage.stopJSCoverage(),
                this.browserScope.page.coverage.stopCSSCoverage(),
            ]);        
        }
    }
}

module.exports = FeatureScope;