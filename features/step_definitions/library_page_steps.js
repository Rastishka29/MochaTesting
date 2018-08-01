const { Given, When, Then, Before, After } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAsPromised);

const Page = require('../../lib/libraries_page');
var page,
    libraries,
    addLibrary,
    filterLibraries;

Before(async function () {
    page = await new Page();
})

After(async function () {
    await page.quit();
})

Given('home page is opened from fresh start', async function () {
    await page.visit('https://library-app.firebaseapp.com/');
});

When('user opens libraries page', async function () {
    await page.visit('https://library-app.firebaseapp.com/libraries');
});

Then('list of libraries contains at least 10 items', async function () {
    libraries = page.listLibraries();
    await libraries.should.eventually.have.length.above(10);
});

When('user is adding new library', async function () {
    addLibrary = await page.addLibrary();
});

Then('new library is present in the list', async function () {
    await addLibrary.libraryList.should.eventually.contain(addLibrary.libraryName);
});

When('user filters libraries', async function () {
    filterLibraries = await page.filterLibraries();
});

Then('list contains only filtered items', async function () {
    await filterLibraries.libraryList.should.eventually.contain(filterLibraries.libraryName);
});