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
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 7000));
    await page.screenshot({path: './pagina.png'})
    console.log('Project loaded')

    //Interactuar con la aplicación web
    //Login
    await login(page);

    //Go to users (staff)
    await page.click('a[href="#/staff/"]')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./staffpage.png'})

    //Go to user ghost
    await page.click('a[href="#/staff/ghost/"]')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./ghostuser.png'})

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función


async function login(page){
  await page.type('css=.email.ember-text-field.gh-input.ember-view', 'myjachis@gmail.com');
  await page.type('css=.password.ember-text-field.gh-input.ember-view', 'Mr.hellno.19');
  await page.click('css=.login.gh-btn.gh-btn-blue')
  await new Promise(r => setTimeout(r, 7000));
  console.log(`clicked on login button, URL is now ${page.url()}`)
  await page.screenshot({path:'./loginbutton.png'})
}

async function testScenario1(page){
  //Scenario 1: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios y ver los detalles de un usuario
  await login(page)

//Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./staffpage.png'})

  //Go to user ghost
  await page.click('a[href="#/staff/ghost/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./ghostuser.png'})
}

async function testScenario2(page){
  //Scenario 2: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios y crear un usuario nuevo
  await login(page)

  //Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./staffpage.png'})

  //Click on create user
  await page.click('css=.gh-btn.gh-btn-green')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./createUser.png'})
  console.log('Clicked on create new user')

  //Fill new user email new-user-email
  await page.type('css=#new-user-email', 'kmilo2106@gmail.com');
  await page.screenshot({path:'./fillnewUserEmail.png'})
  await page.getByRole('button', { name: 'Send invitation now' }).click();
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./clickSendInvite.png'})
  await page.getByRole('button', { title: 'Close' }).click();
  await page.screenshot({path:'./newUserList.png'})
  console.log('Added new user')

   //Borrar usuario para no generar conflictos
   await page.click('a[href="#revoke"]');
   await new Promise(r => setTimeout(r, 2000));
   await page.screenshot({path:'./userListAfterDelete.png'})
   console.log('Deleted user')

}

async function testScenario3(page){
  //Scenario 3: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios, y editar un usuario
  await login(page)

  //Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./staffpage.png'})

  //Go to user ghost
  await page.click('a[href="#/staff/ghost/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./ghostuser.png'})


}

async function testScenario4(page){
  //Scenario 4: Como usuario quiero iniciar sesion en la pagina, ver el listado de usuarios y eliminar un usuario
  await login(page)

  //Go to users (staff)
  await page.click('a[href="#/staff/"]')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./staffpage.png'})

  //Click on create user
  await page.click('css=.gh-btn.gh-btn-green')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./createUser.png'})
  console.log('Clicked on create new user')

  //Fill new user email new-user-email
  await page.type('css=#new-user-email', 'kmilo2106@gmail.com');
  await page.screenshot({path:'./fillnewUserEmail.png'})
  await page.getByRole('button', { name: 'Send invitation now' }).click();
  console.log('Clicked on send invitation')
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./clickSendInvite.png'})
  await page.getByTitle('Close').click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path:'./userListAfterAdd.png'})
  console.log('Added new user')

  //Delete user
  await page.click('a[href="#revoke"]');
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path:'./userListAfterDelete.png'})
  console.log('Deleted user')

}