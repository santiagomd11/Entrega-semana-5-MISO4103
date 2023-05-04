Feature: Tags

@user1 @web
Scenario: Como usuario quiero loguearme en la pagina, listar etiquetas y crear una etiqueta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 2 seconds
  And I click login button
  And I wait for 3 seconds 
  And I click tags button
  And I wait for 5 seconds 
  And I click New Tags button
  And I enter the name input field "test"
  And I wait for 5 seconds 