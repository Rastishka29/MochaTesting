'use strict'

var Page = require('../lib/home_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
var page;
chai.use(chaiAsPromised);

describe ('On the Home Page', function(){
 this.timeout(50000);

  beforeEach(( async function(){
     page = await new Page();
     await page.visit('https://library-app.firebaseapp.com/');
  }));

  afterEach(( async function(){ 
     await page.quit();
  }));
  
  it('Typing valid email changes button opacity to 1', async function(){
    var btn = await page.requestBtn();
    await btn.opacity.should.eventually.equal('1');
  })

  it('Typing valid email enables request button', async function(){
    var btn = await page.requestBtn();
    await btn.state.should.eventually.be.true;
  });

  it('Clicking on request button triggers a success message', async function(){
    var alert = page.alertSuccess();
    await alert.should.eventually.contain("Thank you!");
  }); 
});
