const { Given, When, Then, Before, After} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAsPromised);

const Page = require('../../lib/contact_page');
var page,
    infobox,
    infoboxPresent,
    fillOutForm,
    message;

Before(async function () {
    page = await new Page();
})

After(async function () {
    await page.quit();
})

Given('new home page is opened', async function () {
    await page.visit('https://library-app.firebaseapp.com/');
});

When('Petir opens Contact page', async function () {
    await page.visit('https://library-app.firebaseapp.com/contact');
});

Then('Infobox is displayed', async function () {
    infobox = await page.getInfoBoxText();
    infoboxPresent = await page.isInfoboxDisplayed();
    await infoboxPresent.should.be.true;
    await infobox.should.contain("If you have any question");
});

When('Petir fills out the feedback form', async function () {
    fillOutForm = await page.fillOutForm();
});

When('he sends the form', async function () {
    await page.submitForm();
    message = await page.getSuccessMessage();
});

Then('success message is displayed', async function () {
    await message.should.contain("Thank you! Your message is sent.");
    await message.should.contain(fillOutForm.email);
    await message.should.contain(fillOutForm.message);
});