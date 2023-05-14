const playwright = require('playwright');

const url = 'http://localhost:2368/ghost';

(async () => {
  
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ['chromium', 'firefox']) { //webkit
    //Contenido de la prueba
    console.log(browserType+'-------------------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    var screenshotPath = './imagenes-test/tags/scenariox';
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 7000));
    await page.screenshot({path:`${screenshotPath}/pagina.png`})
    console.log('Project loaded')

    //Interactuar con la aplicación web
    // await testScenario1(page);
    // await testScenario5(page);
    // await testScenario6(page);
    // await testScenario7(page);
    // await testScenario8(page);
    // await testScenario9(page);

    // await testEscenario11(page)
    // await testEscenario12(page)
    // await testEscenario13(page)
    // await testEscenario14(page)
    // await testEscenario15(page)
    // await testEscenario16(page)
    // await testEscenario17(page)
    // await testEscenario18(page)
    // await testEscenario19(page)
    // await testEscenario20(page)

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función

async function login(page, screenshotPath){
  if(!screenshotPath)
    screenshotPath = './imagenes-test/0-login'
  await page.type('css=#identification', 'myjachis@gmail.com');
  await page.type('css=#password', 'Mr.hellno.19');
  await page.click('css=button.login')
  await new Promise(r => setTimeout(r, 7000));
  console.log(`Clicked on login button, URL is now ${page.url()}`)
  await page.screenshot({path:`${screenshotPath}0-loginbutton.png`});
}

async function logout(page, screenshotPath){
  if(!screenshotPath)
    screenshotPath = './imagenes-test/99-logout'
  await page.click('div.pe-all');
  await page.click('a[href="#/signout/"]')
  console.log('Logged out');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}logoutscreen.png`});
}

async function testScenario1(page){
  //Scenario 1: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios y ver los detalles de un usuario
  //#region GIVEN
  var screenshotPath = './imagenes-test/users-scenario1';
  await login(page, screenshotPath);
  //#endregion

  //#region WHEN
  //Go to users (staff)
  await page.click('a[href="#/members/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-1-staffpage.png`})

  //Go to user 
  //await page.getByTestId('members-list-item').click()
  var userName = (await page.locator('css=h3.ma0.pa0.gh-members-list-name').innerText()).valueOf()
  console.log('username: ' + userName);
  await page.locator('css=h3.ma0.pa0.gh-members-list-name').click()
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-2-ghostuser.png`})
  console.log('Clicked on user')
  //#endregion 

  //#region THEN
  await expect.expect(page.locator('h2.gh-canvas-title')).toHaveText(userName)
  console.log('Expect ok')
  //#endregion

  await logout(page, screenshotPath);
}

async function testScenario5(page){
  //Scenario 5: Como usuario quiero loguearme en la pagina, listar etiquetas y crear una etiqueta
  //#region GIVEN
  var screenshotPath = './imagenes-test/tags-scenario5';
  await login(page, screenshotPath);
  //#endregion 

  //#region WHEN
  //Go to tags page
  await page.click('a[href="#/tags/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-1-tagsPage.png`})
  console.log('Clicked on tags page')

  //Go to new tag page
  await page.click('a[href="#/tags/new/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-2-newTagPage.png`})
  console.log('Clicked on create new tag')

  //Fill new tag fields
  await page.fill('input#tag-name', 'NewTag');
  await page.fill('input#tag-slug', 'NewTag-Slug');
  await page.getByPlaceholder("15171A").fill("00ff00");
  await page.fill('textarea#tag-description', 'lorem ipsum...');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-3-newTagFilled.png`})
  console.log('Filled new tag details')

  //Save new Tag
  await page.getByRole('button', { name: 'Save' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-4-newTagSaved.png`})
  console.log('Saved new tag');
  //#endregion

  //#region THEN
  await expect.expect(page.getByRole('heading', { name: 'NewTag' })).toBeVisible();
  console.log('Expect ok')
  //#endregion

  //Delete tag (cleanup)
  await page.getByRole('button', { name: 'Delete tag', exact: true }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-5-newTagDeleted.png`})
  console.log('Deleted new tag');

  await logout(page, screenshotPath);
}

async function testScenario6(page){
  //Scenario 6: Como usuario quiero loguearme en la pagina, listar etiquetas, crear una etiqueta y editarla
  //#region GIVEN
  var screenshotPath = './imagenes-test/tags-scenario6';
  await login(page, screenshotPath);
  //#endregion

  //#region WHEN
  //Go to tags page
  await page.click('a[href="#/tags/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-1-tagsPage.png`})
  console.log('Clicked on tags page')

  //Go to new tag page
  await page.click('a[href="#/tags/new/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-2-newTagPage.png`})
  console.log('Clicked on create new tag')

  //Fill new tag fields
  await page.fill('input#tag-name', 'NewTag');
  await page.fill('input#tag-slug', 'NewTag-Slug');
  await page.getByPlaceholder("15171A").fill("00ff00");
  await page.fill('textarea#tag-description', 'lorem ipsum...');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-3-newTagFilled.png`})
  console.log('Filled new tag details')

  //Save new Tag
  await page.getByRole('button', { name: 'Save' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-4-newTagSaved.png`})
  console.log('Saved new tag');

  //Edit new tag
  await page.fill('input#tag-name', 'NewTag_edited');
  await page.fill('input#tag-slug', 'NewTag-Slug_edited');
  await page.getByPlaceholder("15171A").fill("0000ff");
  await page.fill('textarea#tag-description', 'lorem ipsum... edited');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-5-newTagEdited.png`})
  console.log('Edited new tag details')

  //Save edited Tag
  await page.getByRole('button', { name: 'Save' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-6-newTagEditedSaved.png`})
  console.log('Saved new tag');
  //#endregion

  //#region THEN
  await expect.expect(page.locator('input#tag-name')).toHaveValue('NewTag_edited')
  console.log('Expect ok')
  //#endregion

  //Delete tag (cleanup)
  await page.getByRole('button', { name: 'Delete tag', exact: true }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-7-newTagDeleted.png`})
  console.log('Deleted new tag');
  
  await logout(page, screenshotPath);
}

async function testScenario7(page){
  //Como usuario quiero loguearme en la pagina, listar etiquetas, crear una etiqueta y borrar una etiqueta
  //#region GIVEN
  var screenshotPath = './imagenes-test/tags-scenario7';
  await login(page, screenshotPath);
  //#endregion

  //#region WHEN
  //Go to tags page
  await page.click('a[href="#/tags/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-1-tagsPage.png`})
  console.log('Clicked on tags page')

  //Go to new tag page
  await page.click('a[href="#/tags/new/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-2-newTagPage.png`})
  console.log('Clicked on create new tag')

  //Fill new tag fields
  await page.fill('input#tag-name', 'NewTag-Scen7');
  await page.fill('input#tag-slug', 'NewTag-Slug');
  await page.getByPlaceholder("15171A").fill("00ff00");
  await page.fill('textarea#tag-description', 'lorem ipsum...');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-3-newTagFilled.png`})
  console.log('Filled new tag details')

  //Save new Tag
  await page.getByRole('button', { name: 'Save' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-4-newTagSaved.png`})
  console.log('Saved new tag');

  //Delete tag 
  await page.getByRole('button', { name: 'Delete tag', exact: true }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-5-newTagDeleted.png`})
  console.log('Deleted new tag');
  //#endregion

  //#region THEN
  await expect.expect(page.getByText('NewTag-Scen7')).toBeHidden();
  console.log('Expect ok')
  //#endregion
  

  await logout(page, screenshotPath);
}

async function testScenario8(page){
  //Scenario 8: Como usuario quiero loguearme en la pagina, listar etiquetas y crear una etiqueta interna
  //#region GIVEN
  var screenshotPath = './imagenes-test/tags-scenario8';
  await login(page, screenshotPath);
  //#endregion

  //#region WHEN
  //Go to tags page
  await page.click('a[href="#/tags/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-1-tagsPage.png`})
  console.log('Clicked on tags page')

  //Go to internal tags page
  await page.getByRole('button', { name: 'Internal tags' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-2-internalTagsPage.png`})
  console.log('Clicked on internal tags page')

  //Go to new tag page
  await page.click('a[href="#/tags/new/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-3-newTagPage.png`})
  console.log('Clicked on create new internal tag')

  //Fill new tag fields
  await page.fill('input#tag-name', '#NewInternalTag');
  await page.fill('input#tag-slug', 'NewInternalTag-Slug');
  await page.getByPlaceholder("15171A").fill("ff00ff");
  await page.fill('textarea#tag-description', 'lorem ipsum...');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-4-newInternalTagFilled.png`})
  console.log('Filled new internal tag details')

  //Save new Tag
  await page.getByRole('button', { name: 'Save' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-5-newInternalTagSaved.png`})
  console.log('Saved new internal tag');
  //#endregion

  //#region THEN
  await expect.expect(page.getByRole('heading', { name: '#NewInternalTag' })).toBeVisible();
  console.log('Expect ok')
  //#endregion

  //Delete tag (cleanup)
  await page.getByRole('button', { name: 'Delete tag', exact: true }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-6-newInternalTagDeleted.png`})
  console.log('Deleted new internal tag');
  
  await logout(page, screenshotPath);
}

async function testScenario9(page){
  //Scenario 9: Como usuario quiero iniciar sesion en la pagina y crear un post draft
  //#region GIVEN
  var screenshotPath = './imagenes-test/drafts-scenario9';
  await login(page, screenshotPath);
  //#endregion

  //#region WHEN
  //Go to posts page
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-1-postsPage.png`})
  console.log('Clicked on posts page')

  //Go to new post page
  await page.click('a[href="#/editor/post/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-2-newPostPage.png`})
  console.log('Clicked on create new post')

  //Fill new post fields
  await page.getByPlaceholder("Post Title").fill("Test draft title");
  await page.fill('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'lorem ipsum...');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-3-newPostFilled.png`})
  console.log('Filled new post details')

  // See draft in list
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-4-draftList.png`})
  //#endregion

  //#region THEN
  await expect.expect(page.getByText('Test draft title')).toBeVisible();
  console.log('Expect ok')
  //#endregion

  //Open draft and delete it (cleanup)
  await page.getByText('Test draft title').click()
  await new Promise(r => setTimeout(r, 500));
  await page.getByTitle('Settings').click()
  await new Promise(r => setTimeout(r, 500));
  await page.getByText('Delete post').click()
  await new Promise(r => setTimeout(r, 500));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 500));
  console.log('Deleted draft (cleanup)');

  await logout(page, screenshotPath);
}
