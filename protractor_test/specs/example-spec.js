'use strict';

var AngularPage = require('../pages/homepageSpec.js');

describe('angularjs homepage', function () {
  var page;

  beforeEach(function () {
    page = new AngularPage();
  });

  it('click All button', function () {
    page.clickAllButton();
    expect(page.allbuttonClickable).toEqual('btn button-active');
  });

  it('click Advance button', function () {
    page.clickAdvanceButton();
    expect(page.advancebuttonClickable).toEqual('btn button-active');
  });

  it('click Creatives button', function () {
    page.clickCreativeButton();
    expect(page.creativebuttonClickable).toEqual('btn button-active');
  });

  it('click Pixels button', function () {
    page.clickPixelButton();
    expect(page.pixelsbuttonClickable).toEqual('btn button-active');
  });

  it('click Workflow button', function () {
    page.clickWorkflowButton();
    expect(page.workflowbuttonClickable).toEqual('btn button-active');
  });

});