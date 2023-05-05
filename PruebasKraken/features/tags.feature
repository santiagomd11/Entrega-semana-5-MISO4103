Feature: Tags

@web @user1
Scenario: Como usuario quiero loguearme en la pagina, listar etiquetas y crear una etiqueta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click tags button
  And I wait for 2 seconds 
  And I click New Tags button
  And I enter the name input field "test"
  And I enter the slug input field "test"
  And I enter the color input field "e84565"
  And I enter the description input field "A test description"
  And I click save button
  And I wait for 3 seconds 
  And I click tags button
  And I wait for 3 seconds 



@web @user2
Scenario: Como usuario quiero loguearme en la pagina, listar etiquetas, crear una etiqueta y editarla
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click tags button
  And I wait for 2 seconds 
  And I click New Tags button
  And I enter the name input field "test2"
  And I enter the color input field "e84565"
  And I enter the description input field "A test description"
  And I click save button
  And I wait for 3 seconds 
  And I click tags button
  And I wait for 3 seconds 
  And I click the tag "test2" button
  And I wait for 3 seconds