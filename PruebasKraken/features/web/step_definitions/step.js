const { Given, When, Then } = require("@cucumber/cucumber");

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

Then("I enter the name input field {string}", async function (name) {
  let element = await this.driver.$("input#tag-name");
  return await element.setValue(name);
});

Then("I send the message", async function () {
  let element = await this.driver.$("span.x3nfvp2:nth-child(3)");
  return await element.click();
});
