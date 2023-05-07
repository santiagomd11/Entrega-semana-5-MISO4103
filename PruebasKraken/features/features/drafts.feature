Feature: Drafts

@web @user1
Scenario: Como usuario quiero loguearme en la pagina, y crear un post draft
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click draft button
  And I wait for 2 seconds 
  And I click new draft post button
  And I enter in the post name "DRAFT"
  And I wait for 3 seconds
  And I click the back button

@web @user2
Scenario: Como usuario quiero loguearme en la pagina, y crear un post draft y editarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click draft button
  And I wait for 2 seconds 
  And I click new draft post button
  And I enter in the post name "DRAFT PARA EDITAR"
  And I wait for 3 seconds
  And I click the back button
