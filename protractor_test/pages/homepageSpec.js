'use strict';

var AngularPage = function () {
  browser.get('https://pi.mediamath.com/tools/');
};

AngularPage.prototype  = Object.create({}, {
  allButton:  {   get: function ()     { return element(by.xpath('//button[contains(text(), "All")]'));             }},
  advanceButton:  {   get: function ()     { return element(by.xpath('//button[contains(text(), "Advanced")]'));             }},
  CreativesButton:  {   get: function ()     { return element(by.xpath('//button[contains(text(), "Creatives")]'));             }},
  PixelsButton:  {   get: function ()     { return element(by.xpath('//button[contains(text(), "Pixels")]'));             }},
  WorkflowButton:  {   get: function ()     { return element(by.xpath('//button[contains(text(), "Workflow")]'));             }},
  allbuttonClickable:    { get: function ()  { return this.allButton.getAttribute('class');          }},
  advancebuttonClickable:    { get: function ()  { return this.advanceButton.getAttribute('class');          }},
  creativebuttonClickable:    { get: function ()  { return this.CreativesButton.getAttribute('class');          }},
  pixelsbuttonClickable:    { get: function ()  { return this.PixelsButton.getAttribute('class');          }},
  workflowbuttonClickable:    { get: function ()  { return this.WorkflowButton.getAttribute('class');          }},

 //addButton: {   get: function ()     { return element(by.css('[value="add"]'));          }},
  //yourName:  {   get: function ()     { return element(by.model('yourName'));             }},
  //greeting:  {   get: function ()     { return element(by.binding('yourName')).getText(); }},
  //todoList:  {   get: function ()     { return element.all(by.repeater('todo in todos')); }},
  //typeName:  { value: function (keys) { return this.yourName.sendKeys(keys);              }} ,
  //todoAt:    { value: function (idx)  { return this.todoList.get(idx).getText();          }},
  clickAllButton:   { value: function () {
    this.allButton.click();
  }},

  clickAdvanceButton:   { value: function () {
    this.advanceButton.click();
  }},

  clickCreativeButton:   { value: function () {
    this.CreativesButton.click();
  }},

  clickPixelButton:   { value: function () {
    this.PixelsButton.click();
  }},
  
  clickWorkflowButton:   { value: function () {
    this.WorkflowButton.click();
  }}

});

module.exports = AngularPage;