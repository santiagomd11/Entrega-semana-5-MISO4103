const playwright = require('playwright');

const url = '';

(async () => {
  for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
    console.log(browserType+'-------------------------------------------')

    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Code for the scenarios here



    await browser.close();
  }
  return;
})();