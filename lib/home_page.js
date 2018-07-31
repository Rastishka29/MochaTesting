'use strict'
var webdriver = require ('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var Page = require ('./base_page');
var locator = require ('../utils/locators');

var emailInput = locator.emailInput;
var requestInviteBtn = locator.requestInviteBtn;
var alertSuccess = locator.alertSuccess;
 
Page.prototype.requestBtn = async function(){
    await this.write(emailInput,this.fake().email);
    await this.driver.sleep(1000);
    return await {
        opacity: this.find(requestInviteBtn).getCssValue('opacity'),
        state: this.find(requestInviteBtn).isEnabled()
    }
}

Page.prototype.clickSubmit = async function(){
    return await this.find(requestInviteBtn).click();
}

Page.prototype.alertSuccess = async function(){
    await this.requestBtn();
    await this.clickSubmit();
    await this.driver.wait(until.elementLocated(By.css(alertSuccess)),10000);
    return await this.driver.findElement(By.css(alertSuccess)).getText();
}

module.exports = Page;
