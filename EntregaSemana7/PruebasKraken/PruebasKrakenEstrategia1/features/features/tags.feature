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
  Then I see the tag "test" 

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
  And I wait for 2 seconds 
  And I click tags button
  And I wait for 4 seconds 
  And I click the tag "test2" button
  And I wait for 5 seconds
  And I enter the name input field "test2Editado"
  And I click save button
  And I click tags button
  And I wait for 3 seconds
  Then I see the tag "test2Editado"


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
  And I enter the name input field "borrame"
  And I enter the color input field "e84565"
  And I enter the description input field "A test description"
  And I click save button
  And I wait for 3 seconds 
  And I click tags button
  And I wait for 2 seconds 
  And I click the tag "borrame" button
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
  And I enter the name input field "#internalTest"
  And I enter the color input field "e84565"
  And I enter the description input field "A internalTest description"
  And I click save button
  And I wait for 2 seconds
  And I click tags button from internal
  And I click the internal tags button 
  Then I see the tag "internalTest"