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
  And I wait for 2 seconds 
  And I enter the name input field a random name
  And I wait for 2 seconds 
  And I enter the slug input field a random slug for "scenario1"
  And I wait for 2 seconds 
  And I enter the color input field a random color
  And I wait for 2 seconds 
  And I enter the description input field a random description
  And I wait for 4 seconds 
  And I click save button
  And I wait for 3 seconds 
  And I click tags button
  And I wait for 3 seconds 
  Then I see the tag for "scenario1" 

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
  And I wait for 2 seconds 
  And I enter the name input field a random name
  And I wait for 2 seconds 
  And I enter the slug input field a random slug for "scenario2"
  And I wait for 2 seconds 
  And I enter the color input field a random color
  And I wait for 2 seconds 
  And I enter the description input field a random description
  And I wait for 4 seconds 
  And I click save button
  And I wait for 2 seconds 
  And I click tags button
  And I wait for 4 seconds 
  And I click the tag "scenario2" button
  And I wait for 2 seconds
  And I enter the name input field a random name
  And I wait for 2 seconds 
  And I enter the slug input field a random slug for "scenario2"
  And I wait for 2 seconds 
  And I enter the color input field a random color
  And I wait for 2 seconds 
  And I enter the description input field a random description
  And I wait for 4 seconds 
  And I click save button
  And I wait for 2 seconds 
  And I click tags button
  And I wait for 3 seconds
  Then I see the tag for "scenario2"


@web @user3
Scenario: Como usuario quiero loguearme en la pagina, listar etiquetas, crear una etiqueta y borrar una etiqueta
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
  And I wait for 2 seconds
  And I enter the name input field a random name
  And I wait for 2 seconds 
  And I enter the slug input field a random slug for "scenario3"
  And I wait for 2 seconds 
  And I enter the color input field a random color
  And I wait for 2 seconds 
  And I enter the description input field a random description
  And I wait for 4 seconds 
  And I click save button
  And I wait for 3 seconds 
  And I click tags button
  And I wait for 2 seconds 
  And I click the tag "scenario3" button
  And I click the delete tag button
  And I wait for 2 seconds 
  And I click the confirm delete tag button
  And I wait for 2 seconds
  Then I see the tags title


@web @user4
Scenario: Como usuario quiero loguearme en la pagina, listar etiquetas y crear una etiqueta interna
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click tags button
  And I wait for 2 seconds
  And I click the internal tags button 
  And I click New Tags button
  And I wait for 2 seconds
  And I enter the name input field a random name
  And I wait for 2 seconds 
  And I enter the slug input field a random slug for "scenario4"
  And I wait for 2 seconds 
  And I enter the color input field a random color
  And I wait for 2 seconds 
  And I enter the description input field a random description
  And I wait for 4 seconds 
  And I click save button
  And I wait for 2 seconds
  And I click tags button from internal
  And I wait for 2 seconds
  And I click the internal tags button 
  And I wait for 2 seconds
  Then I see the tag for "scenario4"