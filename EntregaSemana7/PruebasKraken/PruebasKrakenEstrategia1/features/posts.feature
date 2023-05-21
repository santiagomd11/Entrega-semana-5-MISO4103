Feature: Posts

@web @user1
Scenario: Como usuario quiero loguearme en la pagina, listar posts y crear un post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 3 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click New post button
  And I wait for 2 seconds 
  And I enter in the post name the "name1" from the pool
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
  And I click post button
  And I wait for 3 seconds 
  Then I see the post with "name1" from the pool


@web @user2
Scenario: Como usuario quiero loguearme en la pagina, listar posts, crear un post y editarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 3 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click New post button
  And I wait for 2 seconds 
  And I enter in the post name the "name2" from the pool
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
  And I click post button
  And I wait for 2 seconds 
  And I click in the post with name "name2" from the pool
  And I wait for 2 seconds 
  And I enter in the post name the "name5" from the pool
  And I wait for 2 seconds 
  And I click on the editor
  And I wait for 2 seconds 
  And I enter in the post body the "body5" from the pool
  And I wait for 2 seconds 
  And I click in the update option
  And I wait for 2 seconds 
  And I click in the Published option 
  And I wait for 2 seconds 
  And I click in the update button
  And I wait for 2 seconds 
  And I click post button
  And I wait for 3 seconds
  Then I see the post with "name5" from the pool


@web @user3
Scenario: Como usuario quiero loguearme en la pagina, listar posts, crear un post, y eliminarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 3 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click New post button
  And I wait for 2 seconds 
  And I enter in the post name the "name3" from the pool
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
  And I click post button
  And I wait for 2 seconds 
  And I click in the post with name "name3" from the pool
  And I wait for 2 seconds 
  And I click in the settings button
  And I wait for 3 seconds 
  And I click on Delete Post
  And I wait for 3 seconds 
  And I click on Delete Post confirmation
  And I wait for 3 seconds
  Then I don't see the post with "name3" from the pool


@web @user4
Scenario: Como usuario quiero loguearme en la pagina, listar posts, crear un post, y dejarlo programado para publicarse mas tarde
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 3 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click New post button
  And I wait for 2 seconds 
  And I enter in the post name the "name4" from the pool
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
  And I click post button
  And I wait for 3 seconds 
  Then I see the post with "name4" from the pool
