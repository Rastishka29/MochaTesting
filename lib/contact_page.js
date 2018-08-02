'use strict'
var webdriver = require ('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var Page = require ('./base_page');
var locator = require ('../utils/locators');

var infoBox = locator.infoBox;
var emailAddress = locator.emailAddress;
var feedbackMessage = locator.feedbackMessage;
var submitBtn = locator.sendBtn;
var successMessage = locator.successMessage;


Page.prototype.isInfoboxDisplayed = async function(){
    await this.driver.wait(until.elementLocated(By.css(infoBox)),10000);
    return await this.find(infoBox).isDisplayed();
}

Page.prototype.getInfoBoxText = async function(){
    await this.driver.wait(until.elementLocated(By.css(infoBox)),10000);
    return this.find(infoBox).getText();
}

Page.prototype.fillOutForm = async function() {
    var fakeEmailAddress = this.fake().email;
    var fakeFeedbackMessage = this.fake().message;
    await this.write(emailAddress, fakeEmailAddress);
    await this.write(feedbackMessage, fakeFeedbackMessage)
    return await {
        email: fakeEmailAddress,
        message: fakeFeedbackMessage
    }
}

Page.prototype.submitForm = async function() {
    return await this.find(submitBtn).click();
}

Page.prototype.getSuccessMessage = async function() {
    await this.driver.wait(until.elementLocated(By.css(successMessage)),10000);
    return this.find(successMessage).getText();
}

module.exports = Page;