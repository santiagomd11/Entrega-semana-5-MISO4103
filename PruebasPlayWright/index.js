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
    //Login
    await login(page, screenshotPath);

    //Go to tags page
    await page.click('a[href="#/tags/"]')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:`${screenshotPath}/tagsPage.png`})
    console.log('Clicked on tags page')

    //Go to internal tags page
    await page.getByRole('button', { name: 'Internal tags' }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:`${screenshotPath}/internalTagsPage.png`})
    console.log('Clicked on internal tags page')

    //Go to new tag page
    await page.click('a[href="#/tags/new/"]')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:`${screenshotPath}/newTagPage.png`})
    console.log('Clicked on create new internal tag')

    //Fill new tag fields
    await page.fill('input#tag-name', '#NewInternalTag');
    await page.fill('input#tag-slug', 'NewInternalTag-Slug');
    await page.getByPlaceholder("abcdef").fill("ff00ff");
    await page.fill('textarea#tag-description', 'lorem ipsum...');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:`${screenshotPath}/newInternalTagFilled.png`})
    console.log('Filled new internal tag details')

    //Save new Tag
    await page.getByRole('button', { name: 'Save' }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:`${screenshotPath}/newInternalTagSaved.png`})
    console.log('Saved new internal tag');

    //Delete tag (cleanup)
    await page.getByRole('button', { name: 'Delete tag', exact: true }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.getByRole('button', { name: 'Delete', exact: true }).click();
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:`${screenshotPath}/newInternalTagDeleted.png`})
    console.log('Deleted new internal tag');
    
    await logout(page, screenshotPath);

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función


async function login(page, screenshotPath){
  await page.type('css=.email.ember-text-field.gh-input.ember-view', 'myjachis@gmail.com');
  await page.type('css=.password.ember-text-field.gh-input.ember-view', 'Mr.hellno.19');
  await page.click('css=.login.gh-btn.gh-btn-blue')
  await new Promise(r => setTimeout(r, 7000));
  console.log(`Clicked on login button, URL is now ${page.url()}`)
  await page.screenshot({path:`${screenshotPath}/0-loginbutton.png`});
}

async function logout(page, screenshotPath){
  await page.click('span.gh-user-name.mb1');
  await page.click('a[href="#/signout/"]')
  console.log('Logged out');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/logoutscreen.png`});
}

async function testScenario1(page){
  //Scenario 1: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios y ver los detalles de un usuario
  var screenshotPath = './imagenes-test/users/scenario1';
  await login(page, screenshotPath);

//Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/1-staffpage.png`})

  //Go to user ghost
  await page.locator('css=h3.apps-card-app-title').filter({ hasText: 'Ghost' }).click()
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/2-ghostuser.png`})
  console.log('Clicked on ghost user')

  await logout(page);
}

async function testScenario2(page){
  //Scenario 2: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios y crear un usuario nuevo
  var screenshotPath = './imagenes-test/users/scenario2';
  await login(page, screenshotPath)

  //Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/1-staffpage.png`})

  //Click on create user
  await page.click('css=.gh-btn.gh-btn-green')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/2-createUser.png`})
  console.log('Clicked on create new user')

  //Fill new user email new-user-email
  await page.type('css=#new-user-email', 'kmilo2106@gmail.com');
  await page.screenshot({path:`${screenshotPath}/3-fillnewUserEmail.png`})
  await page.getByRole('button', { name: 'Send invitation now' }).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/4-clickSendInvite.png`})
  await page.getByRole('button', { title: 'Close' }).click();
  await page.screenshot({path:`${screenshotPath}/5-newUserList.png`})
  console.log('Added new user')

  //Borrar usuario para no generar conflictos
  await page.click('a[href="#revoke"]');
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/6-userListAfterDelete.png`})
  console.log('Deleted user')

  await logout(page);
}

async function testScenario3(page){
  //Scenario 3: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios, y editar un usuario
  var screenshotPath = './imagenes-test/users/scenario3';
  await login(page, screenshotPath)

  //Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/1-staffpage.png`})

  //Go to user ghost
  await page.locator('css=h3.apps-card-app-title').filter({ hasText: 'Ghost' }).click()
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/2-ghostuser.png`})
  console.log('Clicked on ghost user')

  //Edit fields
  await page.fill('css=#user-slug', 'ghost_edited');
  await page.fill('css=#user-email', 'ghost-author_edited@example.com');
  await page.locator('select#new-user-role').selectOption({ label: 'Contributor' })
  await page.fill('css=#user-location', 'The Internet_edited');
  await page.fill('css=#user-website', 'https://ghost-edited.org');
  await page.fill('css=#user-bio', 'You can delete this user to remove all the welcome posts _edited');
  await page.screenshot({path:`${screenshotPath}/3-editedUserFields.png`})
  console.log('Edited user fields')
  await new Promise(r => setTimeout(r, 2000));
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.reload()
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/4-editedUserSave.png`});
  console.log('Saved edited user');

  //Deshacer cambios para quedar con los valores iniciales
  await page.fill('css=#user-slug', 'ghost');
  await page.fill('css=#user-email', 'ghost-author@example.com');
  await page.locator('select#new-user-role').selectOption({ label: 'Author' })
  await page.fill('css=#user-location', 'The Internet');
  await page.fill('css=#user-website', 'https://ghost.org');
  await page.fill('css=#user-bio', 'You can delete this user to remove all the welcome posts');
  await page.screenshot({path:`${screenshotPath}/5-editedUserFields_rollback.png`})
  console.log('Rolled back edited user fields')
  await new Promise(r => setTimeout(r, 2000));
  await page.getByRole('button', { name: 'Save' }).click();
  
  await logout(page);
}

async function testScenario4(page){
  //Scenario 4: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios y eliminar un usuario
  var screenshotPath = './imagenes-test/users/scenario4';
  await login(page, screenshotPath)

  //Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/1-staffpage.png`})

  //Click on create user
  await page.click('css=.gh-btn.gh-btn-green')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/2-createUser.png`})
  console.log('Clicked on create new user')

  //Fill new user email new-user-email
  await page.type('css=#new-user-email', 'kmilo2106@gmail.com');
  await page.screenshot({path:`${screenshotPath}/3-fillnewUserEmail.png`})
  await page.getByRole('button', { name: 'Send invitation now' }).click();
  console.log('Clicked on send invitation')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/4-clickSendInvite.png`})
  await page.getByTitle('Close').click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/5-userListAfterAdd.png`})
  console.log('Added new user')

  //Delete user
  await page.click('a[href="#revoke"]');
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/6-userListAfterDelete.png`})
  console.log('Deleted user');

  await logout(page);
}

async function testScenario5(page){
  //Scenario 5: Como usuario quiero loguearme en la pagina, listar etiquetas y crear una etiqueta
  var screenshotPath = './imagenes-test/tags/scenario5';
  await login(page, screenshotPath);

  //Go to tags page
  await page.click('a[href="#/tags/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/1-tagsPage.png`})
  console.log('Clicked on tags page')

  //Go to new tag page
  await page.click('a[href="#/tags/new/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/2-newTagPage.png`})
  console.log('Clicked on create new tag')

  //Fill new tag fields
  await page.fill('input#tag-name', 'NewTag');
  await page.fill('input#tag-slug', 'NewTag-Slug');
  await page.getByPlaceholder("abcdef").fill("00ff00");
  await page.fill('textarea#tag-description', 'lorem ipsum...');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/3-newTagFilled.png`})
  console.log('Filled new tag details')

  //Save new Tag
  await page.getByRole('button', { name: 'Save' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/4-newTagSaved.png`})
  console.log('Saved new tag');

  //Delete tag (cleanup)
  await page.getByRole('button', { name: 'Delete tag', exact: true }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/5-newTagDeleted.png`})
  console.log('Deleted new tag');
}

async function testScenario6(page){
  //Scenario 6: Como usuario quiero loguearme en la pagina, listar etiquetas, crear una etiqueta y editarla
  var screenshotPath = './imagenes-test/tags/scenario6';
  await login(page, screenshotPath);

  //Go to tags page
  await page.click('a[href="#/tags/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/1-tagsPage.png`})
  console.log('Clicked on tags page')

  //Go to new tag page
  await page.click('a[href="#/tags/new/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/2-newTagPage.png`})
  console.log('Clicked on create new tag')

  //Fill new tag fields
  await page.fill('input#tag-name', 'NewTag');
  await page.fill('input#tag-slug', 'NewTag-Slug');
  await page.getByPlaceholder("abcdef").fill("00ff00");
  await page.fill('textarea#tag-description', 'lorem ipsum...');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/3-newTagFilled.png`})
  console.log('Filled new tag details')

  //Save new Tag
  await page.getByRole('button', { name: 'Save' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/4-newTagSaved.png`})
  console.log('Saved new tag');

  //Edit new tag
  await page.fill('input#tag-name', 'NewTag_edited');
  await page.fill('input#tag-slug', 'NewTag-Slug_edited');
  await page.getByPlaceholder("abcdef").fill("0000ff");
  await page.fill('textarea#tag-description', 'lorem ipsum... edited');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/5-newTagEdited.png`})
  console.log('Edited new tag details')

  //Save edited Tag
  await page.getByRole('button', { name: 'Save' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/6-newTagEditedSaved.png`})
  console.log('Saved new tag');

  //Delete tag (cleanup)
  await page.getByRole('button', { name: 'Delete tag', exact: true }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/7-newTagDeleted.png`})
  console.log('Deleted new tag');
  
  await logout(page);
}

async function testScenario7(page){
  //Como usuario quiero loguearme en la pagina, listar etiquetas, crear una etiqueta y borrar una etiqueta
  var screenshotPath = './imagenes-test/tags/scenario7';
  await login(page, screenshotPath);

  //Go to tags page
  await page.click('a[href="#/tags/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/1-tagsPage.png`})
  console.log('Clicked on tags page')

  //Go to new tag page
  await page.click('a[href="#/tags/new/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/2-newTagPage.png`})
  console.log('Clicked on create new tag')

  //Fill new tag fields
  await page.fill('input#tag-name', 'NewTag');
  await page.fill('input#tag-slug', 'NewTag-Slug');
  await page.getByPlaceholder("abcdef").fill("00ff00");
  await page.fill('textarea#tag-description', 'lorem ipsum...');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/3-newTagFilled.png`})
  console.log('Filled new tag details')

  //Save new Tag
  await page.getByRole('button', { name: 'Save' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/4-newTagSaved.png`})
  console.log('Saved new tag');

  //Delete tag (cleanup)
  await page.getByRole('button', { name: 'Delete tag', exact: true }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/5-newTagDeleted.png`})
  console.log('Deleted new tag');
}

async function testScenario8(page){
  //Scenario 8: Como usuario quiero loguearme en la pagina, listar etiquetas y crear una etiqueta interna
  var screenshotPath = './imagenes-test/tags/scenario8';
  await login(page, screenshotPath);

  //Go to tags page
  await page.click('a[href="#/tags/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/1-tagsPage.png`})
  console.log('Clicked on tags page')

  //Go to internal tags page
  await page.getByRole('button', { name: 'Internal tags' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/2-internalTagsPage.png`})
  console.log('Clicked on internal tags page')

  //Go to new tag page
  await page.click('a[href="#/tags/new/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/3-newTagPage.png`})
  console.log('Clicked on create new internal tag')

  //Fill new tag fields
  await page.fill('input#tag-name', '#NewInternalTag');
  await page.fill('input#tag-slug', 'NewInternalTag-Slug');
  await page.getByPlaceholder("abcdef").fill("ff00ff");
  await page.fill('textarea#tag-description', 'lorem ipsum...');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/4-newInternalTagFilled.png`})
  console.log('Filled new internal tag details')

  //Save new Tag
  await page.getByRole('button', { name: 'Save' }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}/5-newInternalTagSaved.png`})
  console.log('Saved new internal tag');

  //Delete tag (cleanup)
  await page.getByRole('button', { name: 'Delete tag', exact: true }).click();
  await new Promise(r => setTimeout(r, 1000));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}/6-newInternalTagDeleted.png`})
  console.log('Deleted new internal tag');
  
  await logout(page);
}