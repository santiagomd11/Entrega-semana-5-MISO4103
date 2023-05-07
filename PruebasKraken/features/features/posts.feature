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
  And I click New post button
  And I enter in the post name "test name 1"
  And I click on the editor
  And I click in the publish option 
  And I Select the set it live now option 
  And I click in the publish button 
  And I click post button
  And I wait for 3 seconds 


@web @user2
Scenario: Como usuario quiero loguearme en la pagina, listar posts, crear un post y editarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click posts button
  And I wait for 5 seconds 
  And I click New post button
  And I enter in the post name "test name 2"
  And I click on the editor
  And I click in the publish option 
  And I Select the set it live now option 
  And I click in the publish button 
  And I click post button
  And I wait for 2 seconds 
  And I click in the post with name "test name 2"
  And I enter in the post name "test name 2 modificado"
  And I click on the editor
  And I enter in the post body "My new post body"
  And I click in the update option
  And I click in the Published option 
  And I click in the update button
  And I click post button
  And I wait for 3 seconds


@web @user3
Scenario: Como usuario quiero loguearme en la pagina, listar posts, crear un post, y eliminarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click posts button
  And I wait for 12 seconds 
  And I click New post button
  And I enter in the post name "borrar"
  And I click on the editor
  And I click in the publish option 
  And I Select the set it live now option 
  And I click in the publish button 
  And I click post button
  And I wait for 2 seconds 
  And I click in the post with name "borrar"
  And I click in the settings button
  And I click on Delete Post
  And I click on Delete Post confirmation
  And I wait for 3 seconds


@web @user4
Scenario: Como usuario quiero loguearme en la pagina, listar posts, crear un post, y dejarlo programado para publicarse mas tarde
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 2 seconds 
  And I click posts button
  And I wait for 18 seconds 
  And I click New post button
  And I enter in the post name "test name scheduled"
  And I click on the editor
  And I click in the publish option 
  And I Select the Schedule it for later option 
  And I click in the Schedule button 
  And I click post button
  And I wait for 3 seconds 
