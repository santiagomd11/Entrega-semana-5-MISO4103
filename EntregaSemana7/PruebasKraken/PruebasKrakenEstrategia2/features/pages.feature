Feature: Pages

@web @user1
Scenario: Como usuario quiero loguearme en la pagina, listar pages y crear una page
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 3 seconds 
  And I click pages button
  And I wait for 2 seconds 
  And I click New page button
  And I wait for 2 seconds 
  And I enter in the page name the "name1" from the pool
  And I wait for 2 seconds 
  And I click on the editor
  And I wait for 2 seconds 
  And I enter in the page body the "body1" from the pool
  And I wait for 4 seconds 
  And I click in the publish option 
  And I wait for 2 seconds 
  And I Select the set it live now option 
  And I wait for 2 seconds 
  And I click in the publish button 
  And I wait for 2 seconds 
  And I click page button
  And I wait for 3 seconds 
  Then I see the page with name "name1" from the pool

@web @user2
Scenario: Como usuario quiero loguearme en la pagina, listar pages, crear un page y editarla
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds 
  And I click login button
  And I wait for 3 seconds 
  And I click pages button
  And I wait for 2 seconds 
  And I click New page button
  And I wait for 2 seconds 
  And I enter in the page name the "name2" from the pool
  And I wait for 2 seconds 
  And I click on the editor
  And I wait for 2 seconds 
  And I enter in the page body the "body2" from the pool
  And I wait for 4 seconds 
  And I click in the publish option 
  And I wait for 2 seconds 
  And I Select the set it live now option 
  And I wait for 2 seconds 
  And I click in the publish button  
  And I wait for 2 seconds 
  And I click page button
  And I wait for 2 seconds 
  And I click in the page with name "name2" from the pool
  And I wait for 2 seconds 
  And I enter in the page name the "name5" from the pool
  And I wait for 2 seconds 
  And I click on the editor
  And I wait for 2 seconds
  And I enter in the page body the "body5" from the pool
  And I wait for 5 seconds 
  And I click in the update option
  And I wait for 2 seconds 
  And I click in the Published option 
  And I wait for 2 seconds 
  And I click in the update button
  And I wait for 2 seconds 
  And I click page button
  And I wait for 3 seconds
  Then I see the page with name "name5" from the pool

@web @user3
Scenario: Como usuario quiero loguearme en la pagina, listar pages, crear una page, y eliminarla
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 3 seconds 
  And I click pages button
  And I wait for 2 seconds 
  And I click New page button
  And I wait for 2 seconds 
  And I enter in the page name the "name3" from the pool
  And I wait for 2 seconds 
  And I click on the editor
  And I wait for 2 seconds 
  And I enter in the page body the "body3" from the pool
  And I wait for 4 seconds 
  And I click in the publish option 
  And I wait for 2 seconds 
  And I Select the set it live now option 
  And I wait for 2 seconds 
  And I click in the publish button 
  And I wait for 2 seconds 
  And I click page button
  And I wait for 2 seconds 
  And I click in the page with name "name3" from the pool
  And I wait for 2 seconds 
  And I click in the settings button
  And I wait for 2 seconds 
  And I click on Delete Page
  And I wait for 2 seconds 
  And I click on Delete Page confirmation
  And I wait for 3 seconds
  Then I don't see the page with name "name3" from the pool

@web @user4
Scenario: Como usuario quiero loguearme en la pagina, listar pages, crear una page, y dejarla programada para publicarse mas tarde
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 3 seconds 
  And I click pages button
  And I wait for 2 seconds 
  And I click New page button
  And I wait for 2 seconds 
  And I enter in the page name the "name4" from the pool
  And I wait for 2 seconds 
  And I click on the editor
  And I wait for 2 seconds 
  And I enter in the page body the "body4" from the pool
  And I wait for 4 seconds 
  And I click in the publish option 
  And I wait for 2 seconds 
  And I Select the Schedule it for later option 
  And I wait for 2 seconds 
  And I click in the Schedule button 
  And I wait for 2 seconds 
  And I click page button
  And I wait for 3 seconds 
  Then I see the page with name "name4" from the pool
