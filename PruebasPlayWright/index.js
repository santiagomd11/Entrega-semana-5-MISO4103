const playwright = require('playwright');

const expect = require('@playwright/test');

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
    await testScenario1(page);
    await testScenario2(page);
    await testScenario3(page);
    await testScenario4(page);
    await testScenario5(page);
    await testScenario6(page);
    await testScenario7(page);
    await testScenario8(page);
    await testScenario9(page);
    await testScenario10(page);

    // Feature Post
    await testEscenario11(page)
    await testEscenario12(page)
    await testEscenario13(page)
    await testEscenario14(page)

    // Feature Page
    await testEscenario15(page)
    await testEscenario16(page)
    await testEscenario17(page)
    await testEscenario18(page)

    // Feature Post draft
    await testEscenario19(page)
    await testEscenario20(page)

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función


async function login(page, screenshotPath){
  if(!screenshotPath)
    screenshotPath = './imagenes-test/0-login'
  await page.type('css=.email.ember-text-field.gh-input.ember-view', 'myjachis@gmail.com');
  await page.type('css=.password.ember-text-field.gh-input.ember-view', 'Mr.hellno.19');
  await page.click('css=.login.gh-btn.gh-btn-blue')
  await new Promise(r => setTimeout(r, 7000));
  console.log(`Clicked on login button, URL is now ${page.url()}`)
  await page.screenshot({path:`${screenshotPath}0-loginbutton.png`});
}

async function logout(page, screenshotPath){
  if(!screenshotPath)
    screenshotPath = './imagenes-test/99-logout'
  await page.click('span.gh-user-name.mb1');
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
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-1-staffpage.png`})

  //Go to user ghost
  await page.locator('css=h3.apps-card-app-title').filter({ hasText: 'Ghost' }).click()
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-2-ghostuser.png`})
  console.log('Clicked on ghost user')
  //#endregion 

  //#region THEN
  await expect.expect(page.locator('input#user-name')).toHaveValue('Ghost')
  //#endregion

  await logout(page, screenshotPath);
}

async function testScenario2(page){
  //Scenario 2: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios y crear un usuario nuevo
  //#region GIVEN
  var screenshotPath = './imagenes-test/users-scenario2';
  await login(page, screenshotPath);
  //#endregion

  //#region WHEN
  //Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-1-staffpage.png`})

  //Click on create user
  await page.click('css=.gh-btn.gh-btn-green')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-2-createUser.png`})
  console.log('Clicked on create new user')

  //Fill new user email new-user-email
  var newEmail = 'kmilo2106@gmail.com'
  await page.type('css=#new-user-email', newEmail);
  await page.screenshot({path:`${screenshotPath}-3-fillnewUserEmail.png`})
  await page.getByRole('button', { name: 'Send invitation now', exact: true}).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-4-clickSendInvite.png`})
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.screenshot({path:`${screenshotPath}-5-newUserList.png`})
  console.log('Added new user')
  //#endregion

  //#region THEN
  await expect.expect(page.locator('.gh-invited-users > div.apps-grid > div.apps-grid-cell > article.apps-card-app > div.apps-card-left > div.apps-card-meta > h3.apps-card-app-title')).toHaveText(newEmail);
  //#endregion

  //Borrar usuario para no generar conflictos
  await page.click('a[href="#revoke"]');
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-6-userListAfterDelete.png`})
  console.log('Deleted user')

  await logout(page, screenshotPath);
}

async function testScenario3(page){
  //Scenario 3: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios, y editar un usuario
  //#region GIVEN
  var screenshotPath = './imagenes-test/users-scenario3';
  await login(page, screenshotPath);
  //#endregion

  //#region WHEN
  //Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-1-staffpage.png`})

  //Go to user ghost
  await page.locator('css=h3.apps-card-app-title').filter({ hasText: 'Ghost' }).click()
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-2-ghostuser.png`})
  console.log('Clicked on ghost user')

  //Edit fields
  var editedUserName = 'Ghost_edited_user'
  await page.fill('css=#user-email', 'ghost-author_edited@example.com');
  await page.locator('select#new-user-role').selectOption({ label: 'Contributor' })
  await page.fill('css=#user-location', 'The Internet_edited');
  await page.fill('css=#user-website', 'https://ghost-edited.org');
  await page.fill('css=#user-bio', 'You can delete this user to remove all the welcome posts _edited');
  await page.screenshot({path:`${screenshotPath}-3-editedUserFields.png`})
  console.log('Edited user fields')
  await new Promise(r => setTimeout(r, 2000));
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.reload()
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-4-editedUserSave.png`});
  console.log('Saved edited user');
  //#endregion

  //#region THEN
  await expect.expect(page.locator('input#user-website')).toHaveValue('https://ghost-edited.org')
  await expect.expect(page.locator('input#user-email')).toHaveValue('ghost-author_edited@example.com')
  console.log("Expect ok")
  //#endregion

  //Deshacer cambios para quedar con los valores iniciales
  //await page.fill('css=#user-slug', 'ghost');
  await page.fill('css=#user-email', 'ghost-author@example.com');
  await page.locator('select#new-user-role').selectOption({ label: 'Author' })
  await page.fill('css=#user-location', 'The Internet');
  await page.fill('css=#user-website', 'https://ghost.org');
  await page.fill('css=#user-bio', 'You can delete this user to remove all the welcome posts');
  await page.screenshot({path:`${screenshotPath}-5-editedUserFields_rollback.png`})
  console.log('Rolled back edited user fields')
  await new Promise(r => setTimeout(r, 2000));
  await page.getByRole('button', { name: 'Save' }).click();
  
  await logout(page, screenshotPath);
}

async function testScenario4(page){
  //Scenario 4: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios y eliminar un usuario
  //#region GIVEN
  var screenshotPath = './imagenes-test/users-scenario4';
  await login(page, screenshotPath);
  //#endregion

  //#region WHEN
  //Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-1-staffpage.png`})

  //Click on create user
  await page.click('css=.gh-btn.gh-btn-green')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-2-createUser.png`})
  console.log('Clicked on create new user')

  //Fill new user email new-user-email
  await page.type('css=#new-user-email', 'correo@gmail.com');
  await page.screenshot({path:`${screenshotPath}-3-fillnewUserEmail.png`})
  await page.getByRole('button', { name: 'Send invitation now' }).click();
  console.log('Clicked on send invitation')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:`${screenshotPath}-4-clickSendInvite.png`})
  await page.getByTitle('Close').click();
  await new Promise(r => setTimeout(r, 4000));
  await page.screenshot({path:`${screenshotPath}-5-userListAfterAdd.png`})
  console.log('Added new user')

  //Delete user
  await page.reload()
  await new Promise(r => setTimeout(r, 3000));
  await page.click('a[href="#revoke"]');
  await new Promise(r => setTimeout(r, 7000));
  await page.screenshot({path:`${screenshotPath}-6-userListAfterDelete.png`})
  console.log('Deleted user');
  await page.reload()
  await new Promise(r => setTimeout(r, 3000));
  //#endregion

  //#region THEN
  await expect.expect(page.getByText('correo@gmail.com')).toBeHidden();
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
  await page.getByPlaceholder("abcdef").fill("00ff00");
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
  await expect.expect(page.getByRole('heading', { name: 'Tags NewTag' })).toBeVisible();
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
  await page.getByPlaceholder("abcdef").fill("00ff00");
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
  await page.getByPlaceholder("abcdef").fill("0000ff");
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
  await page.getByPlaceholder("abcdef").fill("00ff00");
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
  await page.getByPlaceholder("abcdef").fill("ff00ff");
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
  await expect.expect(page.getByRole('heading', { name: 'Tags #NewInternalTag' })).toBeVisible();
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
  await page.click('css=button.post-settings');
  await new Promise(r => setTimeout(r, 500));
  await page.getByText('Delete post').click()
  await new Promise(r => setTimeout(r, 500));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 500));
  console.log('Deleted draft (cleanup)');

  await logout(page, screenshotPath);
}

async function testScenario10(page){
  //Scenario 10: Como usuario quiero iniciar sesion en la pagina, crear un post draft y eliminarlo
  //#region GIVEN
  var screenshotPath = './imagenes-test/drafts-scenario10';
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
  var newPostTitle = 'Test draft title scen10'
  await page.getByPlaceholder("Post Title").fill(newPostTitle);
  await page.fill('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'lorem ipsum...');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-3-newPostFilled.png`})
  console.log('Filled new post details')

  // See draft in list
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:`${screenshotPath}-4-draftList.png`})

  //Open draft and delete it (cleanup)
  await page.getByText(newPostTitle).click()
  await new Promise(r => setTimeout(r, 500));
  await page.click('css=button.post-settings');
  await new Promise(r => setTimeout(r, 500));
  await page.getByText('Delete post').click()
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-5-deleteDraftConfirm.png`})
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-6-deletedDraft.png`})
  console.log('Deleted draft');
  //#endregion

  //#region THEN
  await expect.expect(page.getByText(newPostTitle)).toBeHidden();
  console.log('Expect ok')
  //#endregion

  await logout(page, screenshotPath);
}


// Pruebas Feature post

async function testEscenario11(page){
  // Escenario 11: Como usuario quiero loguearme en la pagina, listar posts y crear un post

  console.log('---------------------------------')
  console.log('Escenario 11 -> create new post')
  console.log('---------------------------------')

  //----------------GIVEN---------------------
  var screenshotPath = './imagenes-test/posts-escenario11';
  // Hace el login
  await login(page, `${screenshotPath}-`);
  await page.screenshot({path:`${screenshotPath}-1-login-successful.png`})
  //----------------GIVEN---------------------


  //----------------WHEN---------------------
  // Entra a los post
  await page.click('a[href="#/posts/"]')
  console.log('Clicked on section Posts')

  // Cliquea en new post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-2-list-posts.png`})
  await page.click('css=.ember-view.gh-btn.gh-btn-green')
  console.log('Clicked on button new post')

  const titlePost = "This is a post " + Math.floor(Math.random()*10000001);

  // Rellena los inputs de title an description
  await page.screenshot({path:`${screenshotPath}-3-empty-new-post.png`})
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', titlePost);
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'I write description of this post');
  console.log('Writed about inputs title and description')

  // Despliega la opción de publish
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-4-new-write-post.png`})
  await page.getByText('Publish', { exact: true }).click();
  console.log('Clicked on option new Publish')

  // Publica el post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-5-action-publish-post.png`})
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  console.log('Clicked on button Publish')
  await page.screenshot({path:`${screenshotPath}-6-publishing-post.png`})
  console.log('Post publishing')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-7-created-post.png`})
  console.log('Post created and published')

  // Muestra la lista de post
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-8-verify-created-post.png`})
  //----------------WHEN---------------------


  //----------------THEN---------------------
  const titleResult = await (await page.getByText(titlePost, { exact: true }).textContent()).trim();
  expect.expect(titlePost).toBe(titleResult);
  console.log("----------Expect test---------")
  console.log("Result: " + titleResult)
  console.log("Expect: " + titlePost)
  console.log("----------Expect test---------")
  //----------------THEN---------------------


  await logout(page, `${screenshotPath}-9-`);
  await new Promise(r => setTimeout(r, 2000));
}


async function testEscenario12(page){
  // Escenario 12: Como usuario quiero loguearme en la pagina, listar posts, crear un post, y editar el post

  console.log('-----------------------------------------')
  console.log('Escenario 12 -> create new post and edit')
  console.log('-----------------------------------------')

  //----------------GIVEN---------------------
  var screenshotPath = './imagenes-test/posts-escenario12';
  // Hace el login
  await login(page, `${screenshotPath}-`);
  await page.screenshot({path:`${screenshotPath}-1-login-successful.png`})
  //----------------GIVEN---------------------

 
  //----------------WHEN---------------------
  // Entra a los post
  await page.click('a[href="#/posts/"]')
  console.log('Clicked on section Posts')

  // Cliquea en new post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-2-list-posts.png`})
  await page.click('css=.ember-view.gh-btn.gh-btn-green')
  console.log('Clicked on button new post')

  // Rellena los inputs de title an description
  let titlePost = 'Post to edit ' + Math.floor(Math.random()*10000001)
  await page.screenshot({path:`${screenshotPath}-3-empty-new-post.png`})
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', titlePost);
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'I write description of this post');
  console.log('Writed about inputs title and description')

  // Despliega la opción de publish
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-4-new-write-post.png`})
  await page.getByText('Publish', { exact: true }).click();
  console.log('Clicked on option Publish')

  // Actualiza el post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-5-action-publish-post.png`})
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  console.log('Clicked on button Publish')
  await page.screenshot({path:`${screenshotPath}-6-publishing-post.png`})
  console.log('Post publishing')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-7-created-post.png`})
  console.log('Post created and published')
  await new Promise(r => setTimeout(r, 200));

  // Muestra la lista de post
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-8-Enter-post-created.png`})

  await page.getByText(titlePost, { exact: true }).click();
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', '-edited');
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor', 'I edited this post');
  console.log('Editing inputs title and description')
  await page.screenshot({path:`${screenshotPath}-9-Editing-post-inputs.png`})

  // Despliega la opción de Update
  await new Promise(r => setTimeout(r, 500));
  await page.getByText('Update', { exact: true }).click();
  console.log('Clicked on option Update')
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({path:`${screenshotPath}-10-updating-post.png`})
  await page.getByRole('button', { name: 'Update', exact: true }).click();
  console.log('Clicked on button Update')
  console.log('Post updating')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-11-updated-post.png`})
  console.log('Post updated and published')

  // Muestra la lista de post
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-12-List-after-updated.png`})
  //----------------WHEN---------------------


  //----------------THEN---------------------
  titlePost += '-edited';
  const titleResult = await (await page.getByText(titlePost, { exact: true }).textContent()).trim();
  expect.expect(titlePost).toBe(titleResult);
  console.log("----------Expect test---------")
  console.log("Result: " + titleResult)
  console.log("Expect: " + titlePost)
  console.log("----------Expect test---------")
  //----------------THEN---------------------

  // Hace el logout
  await logout(page, `${screenshotPath}-13-`);
  await new Promise(r => setTimeout(r, 2000));
}


async function testEscenario13(page){
  // Escenario 13: Como usuario quiero loguearme en la pagina, listar posts, crear un post, y dejarlo programado para publicarse mas tarde

  console.log('-----------------------------------------------')
  console.log('Escenario 13 -> Create new post and schedule')
  console.log('-----------------------------------------------')

  //----------------GIVEN---------------------
  var screenshotPath = './imagenes-test/posts-escenario13';
  // Hace el login
  await login(page, `${screenshotPath}-`);
  await page.screenshot({path:`${screenshotPath}-1-login-successful.png`})
  //----------------GIVEN---------------------


  //----------------WHEN---------------------
  // Entra a los post
  await page.click('a[href="#/posts/"]')
  console.log('Clicked on section Posts')

  // Cliquea en new post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-2-list-posts.png`})
  await page.click('css=.ember-view.gh-btn.gh-btn-green')
  console.log('Clicked on button new post')

  // Rellena los inputs de title an description
  let titlePost = 'Post to schedule ' + Math.floor(Math.random()*10000001)
  await page.screenshot({path:`${screenshotPath}-3-empty-new-post.png`})
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', titlePost);
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'I write description schedule post');
  console.log('Writed about inputs title and description')

  // Despliega la opción de publish
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-4-new-write-post.png`})
  await page.getByText('Publish', { exact: true }).click();
  console.log('Clicked on option new Publish')

  // Programa la publicación del post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-5-action-publish-post.png`})
  await page.getByText('Schedule it for later', { exact: true }).click();
  await page.screenshot({path:`${screenshotPath}-6-select-option-schedule.png`})
  await page.getByRole('button', { name: 'Schedule', exact: true }).click();
  console.log('Clicked on button Schedule')
  await page.screenshot({path:`${screenshotPath}-7-scheduling-post.png`})
  console.log('Post scheduling')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-8-scheduled-post.png`})
  console.log('Post scheduled')

  // Muestra la lista de post
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-9-Verify-post-schedule.png`})
  //----------------WHEN---------------------


  //----------------THEN---------------------
  const titleResult = await (await page.getByText(titlePost, { exact: true }).textContent()).trim();
  expect.expect(titlePost).toBe(titleResult);
  console.log("----------Expect test---------")
  console.log("Result: " + titleResult)
  console.log("Expect: " + titlePost)
  console.log("----------Expect test---------")
  //----------------THEN---------------------

  // Hace el logout
  await logout(page, `${screenshotPath}-10-`);
  await new Promise(r => setTimeout(r, 2000));
}


async function testEscenario14(page) {
  // Escenario 14: Como usuario quiero loguearme en la pagina, listar posts y crear un post

  console.log('--------------------------------------------')
  console.log('Escenario 14 -> create new post and delete')
  console.log('--------------------------------------------')

  //----------------GIVEN---------------------
  var screenshotPath = './imagenes-test/posts-escenario14';
  // Hace el login
  await login(page, `${screenshotPath}-`);
  await page.screenshot({path:`${screenshotPath}-1-login-successful.png`})
  //----------------GIVEN---------------------


  //----------------WHEN---------------------
  // Entra a los post
  await page.click('a[href="#/posts/"]')
  console.log('Clicked on section Posts')

  // Cliquea en new post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-2-list-posts.png`})
  await page.click('css=.ember-view.gh-btn.gh-btn-green')
  console.log('Clicked on button new post')

  // Rellena los inputs de title an description
  let titlePost = 'Post to delete ' + Math.floor(Math.random()*10000001)
  await page.screenshot({path:`${screenshotPath}-3-empty-new-post.png`})
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', titlePost);
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'I write description delete post');
  console.log('Writed about inputs title and description')

  // Despliega la opción de publish
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-4-new-write-post.png`})
  await page.getByText('Publish', { exact: true }).click();
  console.log('Clicked on option new Publish')

  // Publica el post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-5-action-publish-post.png`})
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  console.log('Clicked on button Publish')
  await page.screenshot({path:`${screenshotPath}-6-publishing-post.png`})
  console.log('Post publishing')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-7-created-post.png`})
  console.log('Post created and published')

  // Muestra la lista de post
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-8-verify-created-post.png`})
  console.log('Verify list post')

  // Delete post
  await page.getByText(titlePost, { exact: true }).click();
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({path:`${screenshotPath}-9-Enter-post-created.png`})
  console.log('Enter post')
  await page.click('css=.post-settings')
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({path:`${screenshotPath}-10-settings-post.png`})
  console.log('Enter configuration of post')
  await page.click('css=.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({path:`${screenshotPath}-11-confirm-delete-post.png`})
  console.log('Clicked on option Delete post')
  await new Promise(r => setTimeout(r, 200));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await page.screenshot({path:`${screenshotPath}-12-deleting-post.png`})
  console.log('Clicked on button Delete')
  console.log('Deleted post')
  //----------------WHEN---------------------


  //----------------THEN---------------------
  const ButtonExpect = "Delete"
  const ButtonResult = await (await page.getByRole('button', { name: 'Delete', exact: true }).textContent()).trim();
  expect.expect(ButtonExpect).toBe(ButtonResult);
  console.log("----------Expect test---------")
  console.log("Result: " + ButtonResult)
  console.log("Expect: " + ButtonExpect)
  console.log("----------Expect test---------")
  //----------------THEN---------------------

  // Hace el logout
  await logout(page, `${screenshotPath}-13-`);
  await new Promise(r => setTimeout(r, 2000));
}


// Pruebas Feature page

async function testEscenario15(page){
  // Escenario 15: Como usuario quiero loguearme en la pagina, listar pages y crear una page

  console.log('---------------------------------')
  console.log('Escenario 15 -> create new page')
  console.log('---------------------------------')

  //----------------GIVEN---------------------
  var screenshotPath = './imagenes-test/pages-escenario15';
  // Hace el login
  await login(page, `${screenshotPath}-`);
  await page.screenshot({path:`${screenshotPath}-1-login-successful.png`})
  //----------------GIVEN---------------------


  //----------------WHEN---------------------
  // Entra a los page
  await page.click('a[href="#/pages/"]')
  console.log('Clicked on section Pages')

  // Cliquea en new page
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-2-list-pages.png`})
  await page.click('css=.ember-view.gh-btn.gh-btn-green')
  console.log('Clicked on button new page')

  let titlePage = 'This is a page ' + Math.floor(Math.random()*10000001);
  // Rellena los inputs de title an description
  await page.screenshot({path:`${screenshotPath}-3-empty-new-page.png`})
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', titlePage);
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'I write description of this page');
  console.log('Writed about inputs title and description')

  // Despliega la opción de publish
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-4-new-write-page.png`})
  await page.getByText('Publish', { exact: true }).click();
  console.log('Clicked on option new Publish')

  // Publica el page
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-5-action-publish-page.png`})
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  console.log('Clicked on button Publish')
  await page.screenshot({path:`${screenshotPath}-6-publishing-page.png`})
  console.log('page publishing')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-7-created-page.png`})
  console.log('page created and published')

  // Muestra la lista de page
  await page.click('a[href="#/pages/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-8-verify-created-page.png`})
  //----------------WHEN---------------------


  //----------------THEN---------------------
  const titleResult = await (await page.getByText(titlePage, { exact: true }).textContent()).trim();
  expect.expect(titlePage).toBe(titleResult);
  console.log("----------Expect test---------")
  console.log("Result: " + titleResult)
  console.log("Expect: " + titlePage)
  console.log("----------Expect test---------")
  //----------------THEN---------------------

  // Hace el logout
  await logout(page, `${screenshotPath}-`);
  await new Promise(r => setTimeout(r, 2000));
}


async function testEscenario16(page){
  // Escenario 16: Como usuario quiero loguearme en la pagina, listar pages, crear una page, y editar una page

  console.log('-------------------------------------------')
  console.log('Escenario 16 -> create new page and edit')
  console.log('-------------------------------------------')

  //----------------GIVEN---------------------
  var screenshotPath = './imagenes-test/pages-escenario16';
  // Hace el login
  await login(page, `${screenshotPath}-`);
  await page.screenshot({path:`${screenshotPath}-1-login-successful.png`})
  //----------------GIVEN---------------------


  //----------------WHEN---------------------
  // Entra a los page
  await page.click('a[href="#/pages/"]')
  console.log('Clicked on section Pages')

  // Cliquea en new page
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-2-list-pages.png`})
  await page.click('css=.ember-view.gh-btn.gh-btn-green')
  console.log('Clicked on button new page')

  // Rellena los inputs de title y description
  let titlePage = 'Page to edit ' + Math.floor(Math.random()*10000001)
  await page.screenshot({path:`${screenshotPath}-3-empty-new-page.png`})
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', titlePage);
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'I write description of this page');
  console.log('Writed about inputs title and description')

  // Despliega la opción de publish
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-4-new-write-page.png`})
  await page.getByText('Publish', { exact: true }).click();
  console.log('Clicked on option new Publish')

  // Publica el page
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-5-action-publish-page.png`})
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  console.log('Clicked on button Publish')
  await page.screenshot({path:`${screenshotPath}-6-publishing-page.png`})
  console.log('page publishing')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-7-created-page.png`})
  console.log('page created and published')

  // Muestra la lista de page
  await page.click('a[href="#/pages/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-8-verify-created-page.png`})

  // Enter to page
  await page.getByText(titlePage, { exact: true }).click();
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', '-edited');
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor', 'I edited this page');
  console.log('Editing inputs title and description')
  await page.screenshot({path:`${screenshotPath}-9-Editing-page-inputs.png`})

  // Despliega la opción de Update
  await new Promise(r => setTimeout(r, 500));
  await page.getByText('Update', { exact: true }).click();
  console.log('Clicked on option Update')
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({path:`${screenshotPath}-10.updating-page.png`})
  await page.getByRole('button', { name: 'Update', exact: true }).click();
  console.log('Clicked on button Update')
  console.log('Page updating')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-11-updated-page.png`})
  console.log('Page updated and published')

  // Muestra la lista de post
  await page.click('a[href="#/pages/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-12-List-after-updated.png`})
  //----------------WHEN---------------------


  //----------------THEN---------------------
  titlePage += "-edited";
  const titleResult = await (await page.getByText(titlePage, { exact: true }).textContent()).trim();
  expect.expect(titlePage).toBe(titleResult);
  console.log("----------Expect test---------")
  console.log("Result: " + titleResult)
  console.log("Expect: " + titlePage)
  console.log("----------Expect test---------")
  //----------------THEN---------------------

  // Hace el logout
  await logout(page, `${screenshotPath}-`);
  await new Promise(r => setTimeout(r, 2000));
}


async function testEscenario17(page){
  // Escenario 17: Como usuario quiero loguearme en la pagina, listar pages, crear un page, y dejarla programada para publicarse mas tarde

  console.log('-------------------------------------------')
  console.log('Escenario 17 -> Create new page and schedule')
  console.log('-------------------------------------------')

  //----------------GIVEN---------------------
  var screenshotPath = './imagenes-test/pages-escenario17';
  // Hace el login
  await login(page, `${screenshotPath}-`);
  await page.screenshot({path:`${screenshotPath}-1-login-successful.png`})
  //----------------GIVEN---------------------


  //----------------WHEN---------------------
  // Entra a los page
  await page.click('a[href="#/pages/"]')
  console.log('Clicked on section Pages')

  // Cliquea en new page
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-2-list-pages.png`})
  await page.click('css=.ember-view.gh-btn.gh-btn-green')
  console.log('Clicked on button new page')

  // Rellena los inputs de title y description
  let titlePage = 'Page to schedule ' + Math.floor(Math.random()*10000001)
  await page.screenshot({path:`${screenshotPath}-3-empty-new-page.png`})
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', titlePage);
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'I write description schedule page');
  console.log('Writed about inputs title and description')

  // Despliega la opción de publish
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-4-new-write-page.png`})
  await page.getByText('Publish', { exact: true }).click();
  console.log('Clicked on option new Publish')

  // Programa la publicación del post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-5-action-publish-page.png`})
  await page.getByText('Schedule it for later', { exact: true }).click();
  await page.screenshot({path:`${screenshotPath}-6.select-option-schedule.png`})
  await page.getByRole('button', { name: 'Schedule', exact: true }).click();
  console.log('Clicked on button Schedule')
  await page.screenshot({path:`${screenshotPath}-7-scheduling-page.png`})
  console.log('Page scheduling')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-8-scheduled-page.png`})
  console.log('Page scheduled')

  // Muestra la lista de page
  await page.click('a[href="#/pages/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-9-verify-page-schedule.png`})
  //----------------WHEN---------------------


  //----------------THEN---------------------
  const titleResult = await (await page.getByText(titlePage, { exact: true }).textContent()).trim();
  expect.expect(titlePage).toBe(titleResult);
  console.log("----------Expect test---------")
  console.log("Result: " + titleResult)
  console.log("Expect: " + titlePage)
  console.log("----------Expect test---------")
  //----------------THEN---------------------

  // Hace el logout
  await logout(page, `${screenshotPath}-`);
  await new Promise(r => setTimeout(r, 2000));
}


async function testEscenario18(page){
  // Escenario 18: Como usuario quiero loguearme en la pagina, listar pages, crear un page, y eliminarla

  console.log('-------------------------------------------')
  console.log('Escenario 18 -> Create new page and delete')
  console.log('-------------------------------------------')

  //----------------GIVEN---------------------
  var screenshotPath = './imagenes-test/pages-escenario18';
  // Hace el login
  await login(page, `${screenshotPath}-`);
  await page.screenshot({path:`${screenshotPath}-1-login-successful.png`})
  //----------------GIVEN---------------------


  //----------------WHEN---------------------
  // Entra a los page
  await page.click('a[href="#/pages/"]')
  console.log('Clicked on section Pages')

  // Cliquea en new page
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-2.-list-pages.png`})
  await page.click('css=.ember-view.gh-btn.gh-btn-green')
  console.log('Clicked on button new page')

  // Rellena los inputs de title y description
  let titlePage = 'Page to delete ' + Math.floor(Math.random()*10000001)
  await page.screenshot({path:`${screenshotPath}-3-empty-new-page.png`})
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', titlePage);
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'I write description schedule page');
  console.log('Writed about inputs title and description')

  // Despliega la opción de publish
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-4.new-write-page.png`})
  await page.getByText('Publish', { exact: true }).click();
  console.log('Clicked on option new Publish')

  // Publica el page
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-5-action-publish-page.png`})
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  console.log('Clicked on button Publish')
  await page.screenshot({path:`${screenshotPath}-6-publishing-page.png`})
  console.log('page publishing')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-7-created-page.png`})
  console.log('page created and published')

  // Muestra la lista de post
  await page.click('a[href="#/pages/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:`${screenshotPath}-8-verify-created-page.png`})
  console.log('Verify list of page')

  // Delete post
  await page.getByText(titlePage, { exact: true }).click();
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({path:`${screenshotPath}-9-Enter-page-created.png`})
  console.log('Enter page')
  await page.click('css=.post-settings')
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({path:`${screenshotPath}-10-settings-page.png`})
  console.log('Enter configuration of page')
  await page.click('css=.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({path:`${screenshotPath}-11-confirm-delete-page.png`})
  console.log('Clicked on option Delete page')
  await new Promise(r => setTimeout(r, 200));
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await page.screenshot({path:`${screenshotPath}-12-deleting-page.png`})
  console.log('Clicked on button Delete')
  console.log('Deleted page')
  //----------------WHEN---------------------


  //----------------THEN---------------------
  const ButtonExpect = "Delete"
  const ButtonResult = await (await page.getByRole('button', { name: 'Delete', exact: true }).textContent()).trim();
  expect.expect(ButtonExpect).toBe(ButtonResult);
  console.log("----------Expect test---------")
  console.log("Result: " + ButtonResult)
  console.log("Expect: " + ButtonExpect)
  console.log("----------Expect test---------")
  //----------------THEN---------------------

  // Hace el logout
  await logout(page, `${screenshotPath}-`);
  await new Promise(r => setTimeout(r, 2000));
}


async function testEscenario19(page){
  // Escenario 19: Como usuario quiero loguearme en la pagina, y crear un post draft y editarlo

  console.log('------------------------------------------------')
  console.log('Escenario 19 -> create new post draft and edit')
  console.log('------------------------------------------------')

  // Hace el login
  await login(page, "./imagenes-test/post/escenario19");
  await page.screenshot({path:'./imagenes-test/post/escenario19/1.login-successful.png'})

  // Entra a los post
  await page.click('a[href="#/posts/"]')
  console.log('Clicked on section Posts')

  // Cliquea en new post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:'./imagenes-test/post/escenario19/2.list-posts.png'})
  await page.click('css=.ember-view.gh-btn.gh-btn-green')
  console.log('Clicked on button new post')

  // Rellena los inputs de title an description
  let titlePost = 'Post drafts to edit ' + Math.floor(Math.random()*10000001)
  await page.screenshot({path:'./imagenes-test/post/escenario19/3.empty-new-post.png'})
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', titlePost);
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'I write description of this post');
  await page.screenshot({path:'./imagenes-test/post/escenario19/4.Editing-post-inputs.png'})
  console.log('Writed about inputs title and description')

  // Muestra la lista de post
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:'./imagenes-test/post/escenario19/5.Enter-post-created.png'})

  await page.getByText(titlePost, { exact: true }).click();
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', '-edited');
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor', 'I edited this post');
  console.log('Editing inputs title and description')
  await page.screenshot({path:'./imagenes-test/post/escenario19/6.Editing-post-inputs.png'})

  // Muestra la lista de post
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:'./imagenes-test/post/escenario19/6.List-after-updated.png'})

  // Hace el logout
  await logout(page, "./imagenes-test/post/escenario19");
  await new Promise(r => setTimeout(r, 2000));
}


async function testEscenario20(page){
  // Escenario 20: Como usuario quiero loguearme en la pagina, y crear un post draft, y publicarlo

  console.log('------------------------------------------------')
  console.log('Escenario 20 -> create new post draft and publish')
  console.log('------------------------------------------------')

  // Hace el login
  await login(page, "./imagenes-test/post/escenario20");
  await page.screenshot({path:'./imagenes-test/post/escenario20/1.login-successful.png'})

  // Entra a los post
  await page.click('a[href="#/posts/"]')
  console.log('Clicked on section Posts')

  // Cliquea en new post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:'./imagenes-test/post/escenario20/2.list-posts.png'})
  await page.click('css=.ember-view.gh-btn.gh-btn-green')
  console.log('Clicked on button new post')

  // Rellena los inputs de title an description
  let titlePost = 'Post drafts to publish ' + Math.floor(Math.random()*10000001)
  await page.screenshot({path:'./imagenes-test/post/escenario20/3.empty-new-post.png'})
  await page.type('css=.gh-editor-title.ember-text-area.gh-input.ember-view', titlePost);
  await page.type('css=.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'I write description of this post');
  await page.screenshot({path:'./imagenes-test/post/escenario20/4.Editing-post-inputs.png'})
  console.log('Writed about inputs title and description')

  // Muestra la lista de post
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:'./imagenes-test/post/escenario20/5.Enter-post-created.png'})

  await page.getByText(titlePost, { exact: true }).click();

  // Despliega la opción de publish
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:'./imagenes-test/post/escenario20/6.post-created.png'})
  await page.getByText('Publish', { exact: true }).click();
  console.log('Clicked on option new Publish')

  // Publica el post
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:'./imagenes-test/post/escenario20/7.action-publish-post.png'})
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  console.log('Clicked on button Publish')
  await page.screenshot({path:'./imagenes-test/post/escenario20/8.publishing-post.png'})
  console.log('Post publishing')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:'./imagenes-test/post/escenario20/9.published-post.png'})
  console.log('Post created and published')

  // Muestra la lista de post
  await page.click('a[href="#/posts/"]')
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path:'./imagenes-test/post/escenario20/10.List-after-published.png'})

  // Hace el logout
  await logout(page, "./imagenes-test/post/escenario20");
  await new Promise(r => setTimeout(r, 2000));
}
