'use strict'

var Page = require('../lib/libraries_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
var page;
chai.use(chaiAsPromised);

describe ('Libraries Page', function(){
 this.timeout(50000);

  beforeEach(( async function(){
     page = await new Page();
     await page.visit('https://library-app.firebaseapp.com/libraries');
  }));

  afterEach(( async function(){ 
     await page.quit();
  }));
  
  it('Should list libraries', async function(){
    var libraries = page.listLibraries();
    await libraries.should.eventually.have.length.above(10);
  })

  it('Should add new library', async function(){
      var addLibrary = await page.addLibrary();
      await addLibrary.libraryList.should.eventually.contain(addLibrary.libraryName);
  });

  it('Should filter libraries', async function(){
      var filterLibraries = await page.filterLibraries();
      await filterLibraries.libraryList.should.eventually.contain(filterLibraries.libraryName);
  }); 
});
