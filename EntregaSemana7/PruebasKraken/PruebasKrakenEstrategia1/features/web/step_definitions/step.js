const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert')
const fs = require('fs');
const path = require('path');

const poolJson = fs.readFileSync(path.join(__dirname, 'pool.json'))
const pool = JSON.parse(poolJson);

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
  let element = await this.driver.$(`a.ember-view[href="#/tags/"]`);
  return await element.click();
});

Then("I click tags button from internal", async function () {
  let element = await this.driver.$(`a.ember-view[href="#/tags/?type=internal"]`);
  return await element.click();
});

Then("I click New Tags button", async function () {
  let element = await this.driver.$("a.gh-btn.gh-btn-green");
  return await element.click();
});

Then("I see the tag {string}", async function (value) {
  let element = await this.driver.$(`a.gh-list-data.gh-tag-list-title.ember-view[href="#/tags/${value}/"]`);
  return await element;
});

When("I enter the name input field {string} from the pool", async function (value) {
  let element = await this.driver.$("input#tag-name");
  elementIndex = parseInt(value.slice(-1)) - 1
  postBody = pool['data_tags'][elementIndex][value]
  return await element.setValue(postBody);
});


When("I enter the slug input field {string} from the pool", async function (value) {
  let element = await this.driver.$("input#tag-slug");
  elementIndex = parseInt(value.slice(-1)) - 1
  postBody = pool['data_tags'][elementIndex][value]
  return await element.setValue(postBody);
});

When("I enter the color input field {string} from the pool", async function (value) {
    let element = await this.driver.$(`input[name="accent-color"]`);
    elementIndex = parseInt(value.slice(-1)) - 1
    postBody = pool['data_tags'][elementIndex][value]
    return await element.setValue(postBody);
});

When("I enter the description input field {string} from the pool", async function (value) {
    let element = await this.driver.$("textarea#tag-description");
    elementIndex = parseInt(value.slice(-1)) - 1
    postBody = pool['data_tags'][elementIndex][value]
    return await element.setValue(postBody);
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


Then("I see the tags title", async function () {
  let element = await this.driver.$("h2.gh-canvas-title");
  return await element;
});

When("I click the internal tags new tag button", async function () {
    let element = await this.driver.$(`a.gh-btn.gh-btn-green.gh-btn-lg.ember-view`);
    return await element.click();
});


// *********************** POSTS FEATURE *********************************

When("I click posts button", async function () {
  let element = await this.driver.$(`a.ember-view[href="#/posts/"]`);
  return await element.click();
});

When("I click New post button", async function () {
  let element = await this.driver.$("a.gh-btn.gh-btn-green");
  return await element.click();
});

When("I click draft button", async function () {
  let element = await this.driver.$(`a.ember-view[href="#/posts/?type=draft"]`);
  return await element.click();
});

When("I click new draft post button", async function () {
  let element = await this.driver.$(`a.ember-view.gh-btn.gh-btn-green`);
  return await element.click();
});

When("I click the back button", async function () {
  let element = await this.driver.$(`a.blue.link`);
  return await element.click();
});

When("I click the post", async function (value) {
  let element = await this.driver.$(`a.permalink[title="Edit this post"]`);
  return await element.click();
});

When("I enter in the post name the {string} from the pool", async function (value) {
  let element = await this.driver.$("textarea.gh-editor-title");
  elementIndex = parseInt(value.slice(-1)) - 1
  postName = pool['data_posts'][elementIndex][value]
  return await element.setValue(postName);
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

When("I enter in the post body the {string} from the pool", async function (value) {
  let element = await this.driver.$("article.koenig-editor");
  elementIndex = parseInt(value.slice(-1)) - 1
  postBody = pool['data_posts'][elementIndex][value]
  return await element.setValue(postBody);
});

When("I click in the update option", async function () {
  let element = await this.driver.$("div.gh-publishmenu-trigger");
  return await element.click();
});

When("I click in the Published option", async function () {
  let element = await this.driver.$("div.gh-publishmenu-radio.active");
  return await element.click();
});

When("I click in the update button", async function () {
  let element = await this.driver.$("button.gh-publishmenu-button");
  return await element.click();
});

When("I Select the Schedule it for later option", async function () {
  let element = await this.driver.$("div.gh-date-time-picker-time");
  return await element.click();
});

When("I click in the Schedule button", async function () {
  let element = await this.driver.$("button.gh-publishmenu-button");
  return await element.click();
});

When("I click in the post with name {string} from the pool", async function (value) {
  const postSelector = `li.gh-list-row.gh-posts-list-item`;
  const elements = await this.driver.$$(postSelector);
  elementIndex = parseInt(value.slice(-1)) - 1
  postName = pool['data_posts'][elementIndex][value]

  for (const element of elements) {
    const titleElement = await element.$("h3.gh-content-entry-title");
    const text = await titleElement.getText();

    if (text.includes(postName)) {
      await element.click();
      return;
    }
  }
});

When("I click in the settings button", async function () {
  let element = await this.driver.$("button.post-settings");
  return await element.click();
});

When("I click on Delete Post", async function () {
  const deleteButtonSelector = ".settings-menu-delete-button";
  const deleteButton = await this.driver.$(deleteButtonSelector);
  await deleteButton.scrollIntoView();
  await deleteButton.click();
});

When("I click on Delete Post confirmation", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view");
  return await element.click();
});

Then("I see the post with {string} from the pool", async function (value) {
  const postSelector = `li.gh-list-row.gh-posts-list-item`;
  const elements = await this.driver.$$(postSelector);
  elementIndex = parseInt(value.slice(-1)) - 1
  postName = pool['data_posts'][elementIndex][value]
  for (const element of elements) {
    const titleElement = await element.$("h3.gh-content-entry-title");
    const text = await titleElement.getText();

    if (text.includes(postName)) {
      return await element;
    }
  }
});

Then("I don't see the post with {string} from the pool", async function (value) {
  const postSelector = `li.gh-list-row.gh-posts-list-item`;
  const elements = await this.driver.$$(postSelector);
  elementIndex = parseInt(value.slice(-1)) - 1
  postName = pool['data_posts'][elementIndex][value]

  for (const element of elements) {
    const titleElement = await element.$("h3.gh-content-entry-title");
    const text = await titleElement.getText();

    if (text.includes(postName)) {
      throw new Error(`Post with name "${value}" is present, but it should not be.`);
    }
  }
});

// *********************** STAFF FEATURE *********************************
When("I click staff button", async function () {
  let element = await this.driver.$(`a[href="#/staff/"].ember-view`);
  return await element.click();
});

Then("I see the password changed notification", async function () {
  let element = await this.driver.$(`span.gh-notification-title`);
  return await element.getValue();
});
When("I click staff {string} button", async function (value) {
  let element = await this.driver.$(`a[href="#/staff/${value}/"].ember-view`);
  return await element.click();
});

When("I enter the user name input field {string} from the pool", async function (value) {
  let element = await this.driver.$("input#user-name");
  elementIndex = parseInt(value.slice(-1)) - 1
  postBody = pool['data_staff'][elementIndex][value]
  return await element.setValue(postBody);
});

Then ("I see the suspended badge", async function () {
  let element = await this.driver.$("span.gh-badge.suspended");
  return await element.getValue();
});
When("I enter the email input field {string} from the pool", async function (value) {
  let element = await this.driver.$("input#user-email");
  elementIndex = parseInt(value.slice(-1)) - 1
  postBody = pool['data_staff'][elementIndex][value]
  return await element.setValue(postBody);
});


When("I enter in the invite form email {string} from the pool", async function (value) {
  let element = await this.driver.$(`input.email.ember-text-field.gh-input[type="email"]`);
  elementIndex = parseInt(value.slice(-1)) - 1
  postBody = pool['data_staff'][elementIndex][value]
  return await element.setValue(postBody);
});
When("I enter the user location input field {string} from the pool", async function (value) {
  let element = await this.driver.$("input#user-location");
  elementIndex = parseInt(value.slice(-1)) - 1
  postBody = pool['data_staff'][elementIndex][value]
  return await element.setValue(postBody);
});

When("I enter the user new password input field {string} from the pool", async function (value) {
  let element = await this.driver.$("input#user-password-new");
  elementIndex = parseInt(value.slice(-1)) - 1
  postBody = pool['data_staff'][elementIndex][value]
  return await element.setValue(postBody);
});

When("I enter the user password verification input field {string} from the pool", async function (value) {
  let element = await this.driver.$("input#user-new-password-verification");
  elementIndex = parseInt(value.slice(-1)) - 1
  postBody = pool['data_staff'][elementIndex][value]
  return await element.setValue(postBody);
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

// *********************** PAGES FEATURE *********************************

When("I click pages button", async function () {
  let element = await this.driver.$(`a[href="#/pages/"].ember-view`);
  return await element.click();
});

When("I click New page button", async function () {
  let element = await this.driver.$("a.gh-btn.gh-btn-green");
  return await element.click();
});


When("I enter in the page name the {string} from the pool", async function (value) {
  let element = await this.driver.$("textarea.gh-editor-title");
  elementIndex = parseInt(value.slice(-1)) - 1
  postName = pool['data_pages'][elementIndex][value]
  return await element.setValue(postName);
});


When("I click page button", async function () {
  let element = await this.driver.$("a.blue.link.fw4");
  return await element.click();
});

When("I enter in the page body the {string} from the pool", async function (value) {
  let element = await this.driver.$("article.koenig-editor");
  elementIndex = parseInt(value.slice(-1)) - 1
  postBody = pool['data_pages'][elementIndex][value]
  return await element.setValue(postBody);
});


When("I click in the page with name {string} from the pool", async function (value) {
  const postSelector = `li.gh-list-row.gh-posts-list-item`;
  const elements = await this.driver.$$(postSelector);
  elementIndex = parseInt(value.slice(-1)) - 1
  pageName = pool['data_pages'][elementIndex][value]

  for (const element of elements) {
    const titleElement = await element.$("h3.gh-content-entry-title");
    const text = await titleElement.getText();

    if (text.includes(pageName)) {
      await element.click();
      return;
    }
  }
});

When("I click on Delete Page", async function () {
  const deleteButtonSelector = ".settings-menu-delete-button";
  const deleteButton = await this.driver.$(deleteButtonSelector);
  await deleteButton.scrollIntoView();
  await deleteButton.click();
});

When("I click on Delete Page confirmation", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view");
  return await element.click();
});

Then("I see the page with name {string} from the pool", async function (value) {
  const postSelector = `li.gh-list-row.gh-posts-list-item`;
  const elements = await this.driver.$$(postSelector);
  elementIndex = parseInt(value.slice(-1)) - 1
  pageName = pool['data_pages'][elementIndex][value]
  for (const element of elements) {
    const titleElement = await element.$("h3.gh-content-entry-title");
    const text = await titleElement.getText();

    if (text.includes(pageName)) {
      return await element;
    }
  }
});

Then("I don't see the page with name {string} from the pool", async function (value) {
  const postSelector = `li.gh-list-row.gh-posts-list-item`;
  const elements = await this.driver.$$(postSelector);
  elementIndex = parseInt(value.slice(-1)) - 1
  pageName = pool['data_pages'][elementIndex][value]
  for (const element of elements) {
    const titleElement = await element.$("h3.gh-content-entry-title");
    const text = await titleElement.getText();

    if (text.includes(pageName)) {
      throw new Error(`Page with name "${pageName}" is present, but it should not be.`);
    }
  }
});
