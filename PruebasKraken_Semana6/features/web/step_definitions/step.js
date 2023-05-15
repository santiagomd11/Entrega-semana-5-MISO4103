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
  let element = await this.driver.$(`a[href="#/tags/"]`);
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

// *********************** POSTS FEATURE *********************************

When("I click posts button", async function () {
  let element = await this.driver.$(`a.ember-view[href="#/posts/"]`);
  return await element.click();
});

When("I click New post button", async function () {
  let element = await this.driver.$(`a.ember-view[href="#/editor/post/"]`);
  return await element.click();
});

When("I click the back button", async function () {
  let element = await this.driver.$(`a.ember-view[href="#/posts/"]`);
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
  let element = await this.driver.$("button.gh-publish-trigger");
  return await element.click();
});

When("I click in the Right now option", async function () {
  let element = await this.driver.$("div.gh-publish-setting.last");
  return await element.click();
});

When("I Select the set it live now option", async function () {
  let element = await this.driver.$("div.gh-radio.active");
  return await element.click();
});

When("I click in the continue and final review button", async function () {
  let element = await this.driver.$("div.gh-publish-cta");
  return await element.click();
});

When("I click the publish post option", async function () {
  let element = await this.driver.$("button.gh-btn-pulse.ember-view");
  return await element.click();
});


When("I click in the editor button", async function () {
  let element = await this.driver.$("button.gh-publish-back-button");
  return await element.click();
});

When("I enter in the post body {string}", async function (value) {
  let element = await this.driver.$("article.koenig-editor");
  return await element.setValue(value);
});

When("I click in the update option", async function () {
  let element = await this.driver.$("button.gh-editor-save-trigger");
  return await element.click();
});

When("I Select the Schedule it for later option", async function () {
  const labels = await this.driver.$$('div.gh-publish-schedule label');
  for (const label of labels) {
    const labelText = await label.getText();
    if (labelText.includes('Schedule for later')) {
      await label.click();
      return;
    }
  }
});

When("I click in the post with name {string}", async function (value) {
  const postSelector = `li[data-test-post-id]`;
  const elements = await this.driver.$$(postSelector);

  for (const element of elements) {
    const titleElement = await element.$("h3.gh-content-entry-title");
    const text = await titleElement.getText();

    if (text.includes(value)) {
      await element.click();
      return;
    }
  }
});

When("I click in the settings button", async function () {
  let element = await this.driver.$("button.settings-menu-toggle");
  return await element.click();
});

When("I click on Delete Post", async function () {
  let element = await this.driver.$("div.settings-menu-delete-button");
  return await element.click();
});

When("I click on Delete Post confirmation", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view");
  return await element.click();
});

When("I click draft button", async function () {
  let element = await this.driver.$(`a.ember-view[href="#/posts/?type=draft"]`);
  return await element.click();
});

When("I click new draft post button", async function () {
  let element = await this.driver.$(`a.ember-view[href="#/editor/post/"]`);
  return await element.click();
});

Then("I see the post with name {string}", async function (value) {
  const postSelector = `li[data-test-post-id]`;
  const elements = await this.driver.$$(postSelector);

  for (const element of elements) {
    const titleElement = await element.$("h3.gh-content-entry-title");
    const text = await titleElement.getText();

    if (text.includes(value)) {
      return await element;
    }
  }
});

Then("I don't see the post with name {string}", async function (value) {
  const postSelector = `li[data-test-post-id]`;
  const elements = await this.driver.$$(postSelector);

  for (const element of elements) {
    const titleElement = await element.$("h3.gh-content-entry-title");
    const text = await titleElement.getText();

    if (text.includes(value)) {
      throw new Error(`Post with name "${value}" is present, but it should not be.`);
    }
  }
});