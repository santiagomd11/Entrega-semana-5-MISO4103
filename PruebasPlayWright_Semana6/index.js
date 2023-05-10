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

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función
