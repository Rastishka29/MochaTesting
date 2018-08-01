'use strict'

var webdriver = require ('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var Page = require ('./base_page');
var locator = require ('../utils/locators');

var libraryItem = locator.libraryItem;
var libraryContainer = locator.libraryContainer;
var addLibrary = locator.addLibrary;
var nameInput = locator.nameInput;
var addressInput = locator.addressInput;
var phoneInput = locator.phoneInput;
var createBtn = locator.createBtn;
var inputFilter = locator.inputFilter;
var abcBtn = locator.abcBtn;
var abcBtnList = locator.abcBtnList;


Page.prototype.listLibraries = async function(){
    await this.driver.wait(until.elementsLocated(By.css(libraryItem)),10000);
    return await this.findAll(libraryItem);
}

Page.prototype.addLibrary = async function (desiredName) {
    var fakeLibraryName;
    if(desiredName){
        fakeLibraryName = desiredName;
    } else { fakeLibraryName = await this.fake().libraryName;
    }
    var fakeLibraryAddress = await this.fake().address;
    var fakeLibraryPhone = await this.fake().phone;

    await this.findLink("Add new").click();
    await this.write(nameInput,fakeLibraryName);
    await this.write(addressInput,fakeLibraryAddress);
    await this.write(phoneInput,fakeLibraryPhone);
    await this.driver.sleep(1000);
    await this.find(createBtn).click();
    await this.driver.wait(until.elementsLocated(By.css(libraryContainer)),5000);
    return await {
        libraryList: this.find(libraryContainer).getText(),
        libraryName: fakeLibraryName
    }
}

Page.prototype.filterLibraries = async function () {
    var newLibrary = await this.fake().libraryName;
    await this.addLibrary(newLibrary)
    await this.write(inputFilter,newLibrary);
    await this.driver.wait(until.elementsLocated(By.css(libraryContainer)),5000);
    return await {
        libraryList: this.find(libraryContainer).getText(),
        libraryName: newLibrary
    }
}

module.exports = Page;
