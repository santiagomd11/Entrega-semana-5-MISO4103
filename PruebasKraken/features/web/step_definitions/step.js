const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert')
When("I enter email {string}", async function (email) {
  let element = await this.driver.$("#ember8");
  return await element.setValue(email);
});

When("I enter password {string}", async function (password) {
  let element = await this.driver.$("#ember10");
  return await element.setValue(password);
});

When("I click login button", async function () {
  let element = await this.driver.$("#ember12");
  return await element.click();
});

Then("I click tags button", async function () {
  let element = await this.driver.$("#ember38");
  return await element.click();
});

Then("I click New Tags button", async function () {
  let element = await this.driver.$("a.gh-btn.gh-btn-green");
  return await element.click();
});

When("I enter the name input field {string}", async function (value) {
  let element = await this.driver.$("input#tag-name");
  return await element.setValue(value);
});

When("I enter the slug input field {string}", async function (value) {
  let element = await this.driver.$("input#tag-slug");
  return await element.setValue(value);
});

When("I enter the color input field {string}", async function (value) {
    let element = await this.driver.$(`input[name="accent-color"]`);
    return await element.setValue(value);
});

When("I enter the description input field {string}", async function (value) {
    let element = await this.driver.$("textarea#tag-description");
    return await element.setValue(value);
});

When("I click save button", async function () {
    let element = await this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
    return await element.click();
});

When("I click the tag {string} button", async function (value) {
    let element = await this.driver.$(`a.gh-list-data.gh-tag-list-title.ember-view[href="#/tags/${value}/"]`);
    return await element.click();
});

When("I click the delete tag button", async function () {
    let element = await this.driver.$("button.gh-btn.gh-btn-red.gh-btn-icon.mb15");
    return await element.click();
});

When("I click the confirm delete tag button", async function () {
    let element = await this.driver.$("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view");
    return await element.click();
});

When("I click the internal tags button", async function () {
    let element = await this.driver.$("div.gh-contentfilter button:not(.gh-btn-group-selected)");
    return await element.click();
});

When("I click the internal tags new tag button", async function () {
    let element = await this.driver.$(`a.gh-btn.gh-btn-green.gh-btn-lg.ember-view`);
    return await element.click();
});


// Feature posts

When("I click posts button", async function () {
  let element = await this.driver.$("#ember28");
  return await element.click();
});

When("I click New post button", async function () {
  let element = await this.driver.$("a.gh-btn.gh-btn-green");
  return await element.click();
});

When("I enter in the post name {string}", async function (value) {
  let element = await this.driver.$("textarea.gh-editor-title");
  return await element.setValue(value);
});

When("I click on the editor", async function () {
  let element = await this.driver.$("article.koenig-editor");
  return await element.click();
});

When("I click in the publish option", async function () {
  let element = await this.driver.$("div.gh-publishmenu-trigger");
  return await element.click();
});

When("I Select the set it live now option", async function () {
  let element = await this.driver.$("div.gh-publishmenu-radio-button");
  return await element.click();
});

When("I click in the publish button", async function () {
  let element = await this.driver.$("button.gh-publishmenu-button");
  return await element.click();
});

When("I click post button", async function () {
  let element = await this.driver.$("a.blue.link.fw4");
  return await element.click();
});

// *********************** STAFF FEATURE *********************************
When("I click staff button", async function () {
  let element = await this.driver.$(`a[href="#/staff/"].ember-view`);
  return await element.click();
});

When("I click staff ghost button", async function () {
  let element = await this.driver.$(`a[href="#/staff/ghost/"].ember-view`);
  return await element.click();
});

When("I enter the user name input field {string}", async function (value) {
  let element = await this.driver.$("input#user-name");
  return await element.setValue(value);
});

When("I enter the email input field {string}", async function (value) {
  let element = await this.driver.$("input#user-email");
  return await element.setValue(value);
});

When("I enter the user location input field {string}", async function (value) {
  let element = await this.driver.$("input#user-location");
  return await element.setValue(value);
});

When("I enter the user new password input field {string}", async function (value) {
  let element = await this.driver.$("input#user-password-new");
  return await element.setValue(value);
});

When("I enter the user password verification input field {string}", async function (value) {
  let element = await this.driver.$("input#user-new-password-verification");
  return await element.setValue(value);
});

When("I click save change password button", async function () {
  let element = await this.driver.$("button.gh-btn-red");
  return await element.click();
});

When("I change the user role to Editor", async function () {
  let element = await this.driver.$("select#new-user-role");
  return await element.selectByIndex(1);
});

When("I click save edit staff button", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view");
  return await element.click();
});

When("I click the engine button", async function () {
  let element = await this.driver.$("button.gh-btn-white");
  return await element.click();
});
When("I click the suspend button", async function () {
  let element = await this.driver.$("button.suspend");
  return await element.click();
});

When("I click the unsuspend button", async function () {
  let element = await this.driver.$("button.unsuspend");
  return await element.click();
});

When("I click the confirm suspend button", async function () {
  let element = await this.driver.$("div.modal-footer button.gh-btn.gh-btn-red");
  return await element.click();
});

When("I click the invite people button", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-green");
  return await element.click();
});

When("I select the user role to Contributor", async function () {
  let element = await this.driver.$("select#new-user-role");
  return await element.selectByIndex(3);
});

When("I enter in the invite form email {string}", async function (email) {
  let element = await this.driver.$(`input.email.ember-text-field.gh-input[type="email"]`);
  return await element.setValue(email);
});

When("I click the send invitation button", async function () {
  let element = await this.driver.$("div.modal-footer button.gh-btn.gh-btn-green");
  return await element.click();
});