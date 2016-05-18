// An example configuration file

//var HtmlReporter = require('protractor-html-screenshot-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4443/wd/hub',
  
  framework: 'jasmine2',

  // onPrepare: function(){
  //     // set implicit wait times in ms...
  //     browser.manage().timeouts().implicitlyWait(5000);
  //     // set browser size...
  //     browser.manage().window().setSize(1024, 800);

  //     // better jasmine 2 reports...
  //     var SpecReporter = require('jasmine-spec-reporter');
  //     jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'spec'}));
  // },

  // Capabilities to be passed to the webdriver instance.
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './test/reports/',
          filePrefix: 'index'
          //takeScreenshots: true,
          //takeScreenshotsOnlyOnFailures: true
        })
      );
   },

  capabilities: {
    'browserName': 'chrome'
  },

  // multiCapabilities: [{
  //   'browserName': 'firefox'
  // }, {
  //   'browserName': 'chrome'
  // }],

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.

  specs: ['./specs/example-spec.js'],
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    //showColors: true,
    displayStacktrace: true,
    //displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
    //print: function () {},
    //defaultTimeoutInterval: 50000
  }
};