const { Given, When, Then, Before, After } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAsPromised);

const Page = require('../../lib/home_page');
var page,
    btn,
    alert;

Before(async function () {
    page = await new Page();
})

After(async function () {
    await page.quit();
})

Given('home page is opened', async function () {
    await page.visit('https://library-app.firebaseapp.com/');
});

When('user types a valid email', async function () {
    btn = await page.requestBtn();
});

Then('button opacity changes to 1', async function () {
    await btn.opacity.should.eventually.equal('1');
});

Then('request button becomes enabled', async function () {
    await btn.state.should.eventually.be.true;
});

Given('home page is reopened', async function () {
    await page.visit('https://library-app.firebaseapp.com/');
});

When('user types a valid email and press request button', async function () {
    alert = page.alertSuccess();
});

Then('success alert is displayed', async function () {
    await alert.should.eventually.contain("Thank you!");
});