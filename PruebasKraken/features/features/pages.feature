Feature: Pages

@web @user1
Scenario: Como usuario quiero loguearme en la pagina, listar pages y crear una page
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click pages button
  And I click New page button
  And I enter in the page name "page test name 1"
  And I click on the editor
  And I click in the publish option 
  And I Select the set it live now option 
  And I click in the publish button 
  And I click page button
  And I wait for 3 seconds 

@web @user2
Scenario: Como usuario quiero loguearme en la pagina, listar pages, crear un page y editarla
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds 
  And I click login button
  And I wait for 2 seconds 
  And I click pages button
  And I wait for 5 seconds 
  And I click New page button
  And I enter in the page name "page test name 2"
  And I click on the editor
  And I click in the publish option 
  And I Select the set it live now option 
  And I click in the publish button  
  And I click page button
  And I wait for 2 seconds 
  And I click in the page with name "page test name 2"
  And I enter in the page name "page test name 2 modificado"
  And I click on the editor
  And I enter in the page body "My new page body"
  And I click in the update option
  And I click in the Published option 
  And I click in the update button
  And I click page button
  And I wait for 3 seconds

@web @user3
Scenario: Como usuario quiero loguearme en la pagina, listar pages, crear una page, y eliminarla
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click pages button
  And I wait for 12 seconds 
  And I click New page button
  And I enter in the page name "borrar"
  And I click on the editor
  And I click in the publish option 
  And I Select the set it live now option 
  And I click in the publish button 
  And I click page button
  And I wait for 2 seconds 
  And I click in the page with name "borrar"
  And I click in the settings button
  And I click on Delete Page
  And I click on Delete Page confirmation
  And I wait for 3 seconds

@web @user4
Scenario: Como usuario quiero loguearme en la pagina, listar pages, crear una page, y dejarla programada para publicarse mas tarde
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click pages button
  And I wait for 18 seconds 
  And I click New page button
  And I enter in the page name "test name scheduled"
  And I click on the editor
  And I click in the publish option 
  And I Select the Schedule it for later option 
  And I click in the Schedule button 
  And I click page button
  And I wait for 3 seconds 
