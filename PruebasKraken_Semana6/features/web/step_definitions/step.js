const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert')
When("I enter email {string}", async function (email) {
  let element = await this.driver.$("input#identification");
  return await element.setValue(email);
});

When("I enter password {string}", async function (password) {
  let element = await this.driver.$("input#password");
  return await element.setValue(password);
});

When("I click login button", async function () {
  let element = await this.driver.$(`#ember5`);
  return await element.click();
});

When("I click New Tags button", async function () {
  let element = await this.driver.$(`a[href="#/tags/new/"]`);
  return await element.click();
});

When("I click tags button", async function () {
  let element = await this.driver.$(`a[data-test-nav="tags"]`);
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
  let element = await this.driver.$(`.gh-btn.gh-btn-primary.gh-btn-icon.ember-view`);
  return await element.click();
});

Then("I see the tag {string}", async function (value) {
  let element = await this.driver.$(`a.gh-list-data.gh-tag-list-title.ember-view[href="#/tags/${value}/"]`);
  return await element;
});

When("I click the tag {string} button", async function (value) {
  let element = await this.driver.$(`a.gh-list-data.gh-tag-list-title.ember-view[href="#/tags/${value}/"]`);
  return await element.click();
});

When("I click the delete tag button", async function () {
  let element = await this.driver.$(`button.gh-btn.gh-btn-red.gh-btn-icon[data-test-button="delete-tag"]`);
  return await element.click();
});

When("I click the confirm delete tag button", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view");
  return await element.click();
});

Then("I see the tags title", async function () {
  let element = await this.driver.$(`h2.gh-canvas-title`);
  return await element;
});

When("I click the internal tags button", async function () {
  let element = await this.driver.$("div.gh-contentfilter button:not(.gh-btn-group-selected)");
  return await element.click();
});

When("I click tags button from internal", async function () {
  let element = await this.driver.$(`a.ember-view[href="#/tags/?type=internal"]`);
  return await element.click();
});