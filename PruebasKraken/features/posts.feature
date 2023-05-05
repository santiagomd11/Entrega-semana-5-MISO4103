Feature: Posts

@web @user1
Scenario: Como usuario quiero loguearme en la pagina, listar posts y crear un post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click New post button
  And I enter in the post name "test name"
  And I click on the editor
  And I click in the publish option 
  And I Select the set it live now option 
  And I click in the publish button 
  And I wait for 3 seconds 
  And I click post button
  And I wait for 3 seconds 