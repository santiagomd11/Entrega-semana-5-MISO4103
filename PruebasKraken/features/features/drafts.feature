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
  And I wait for 1 seconds
  And I click on the editor
  And I wait for 2 seconds
  And I click the back button
  And I wait for 3 seconds 

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
  And I wait for 1 seconds
  And I click on the editor
  And I wait for 2 seconds
  And I click the back button
  And I wait for 3 seconds 
  And I click in the post with name "DRAFT PARA EDITAR"
  And I enter in the post name "DRAFT PARA EDITAR MODIFICADO"
  And I wait for 2 seconds 
  And I click on the editor
  And I enter in the post body "My new post body"
  And I wait for 2 seconds 
  And I click the back button
  And I wait for 3 seconds 

@web @user3
Scenario: Como usuario quiero loguearme en la pagina, y crear un post draft, y publicarlo
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
  And I enter in the post name "DRAFT PARA PUBLICAR"
  And I wait for 1 seconds
  And I click on the editor
  And I wait for 2 seconds
  And I click the back button
  And I wait for 3 seconds 
  And I click in the post with name "DRAFT PARA PUBLICAR"
  And I wait for 2 seconds
  And I click in the publish option 
  And I wait for 1 seconds
  And I Select the set it live now option
  And I wait for 1 seconds
  And I click in the publish button 
  And I wait for 1 seconds
  And I click the back button
  And I wait for 2 seconds 
  And I click posts button
  And I wait for 3 seconds 

@web @user4
Scenario: Como usuario quiero loguearme en la pagina, y crear un post draft, y eliminarlo
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
  And I enter in the post name "DRAFT PARA ELIMINAR"
  And I wait for 1 seconds
  And I click on the editor
  And I wait for 2 seconds
  And I click the back button
  And I wait for 3 seconds 
  And I click in the post with name "DRAFT PARA ELIMINAR"
  And I wait for 2 seconds
  And I click in the settings button
  And I click on Delete Post
  And I wait for 2 seconds
  And I click on Delete Post confirmation
  And I wait for 3 seconds 