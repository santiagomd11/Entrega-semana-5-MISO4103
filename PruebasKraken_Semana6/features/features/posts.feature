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
  And I enter in the post name "Post test 1"
  And I wait for 2 seconds
  And I click on the editor
  And I wait for 2 seconds
  And I click in the publish option 
  And I wait for 2 seconds
  And I click in the Right now option
  And I wait for 2 seconds
  And I Select the set it live now option 
  And I click in the continue and final review button 
  And I wait for 2 seconds
  And I click the publish post option
  And I wait for 2 seconds
  And I click in the editor button
  And I wait for 2 seconds
  And I click posts button
  And I wait for 3 seconds 
  Then I see the post with name "Post test 1"


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
  And I enter in the post name "Post test 2"
  And I wait for 2 seconds
  And I click on the editor
  And I wait for 2 seconds
  And I click in the publish option 
  And I wait for 2 seconds
  And I click in the Right now option
  And I wait for 2 seconds
  And I Select the set it live now option 
  And I click in the continue and final review button 
  And I wait for 2 seconds
  And I click the publish post option
  And I wait for 2 seconds
  And I click in the editor button
  And I wait for 2 seconds
  And I click posts button
  And I wait for 3 seconds 
  And I click in the post with name "Post test 2"
  And I wait for 2 seconds
  And I enter in the post name "Post test 2 modificado"
  And I wait for 2 seconds
  And I click on the editor
  And I wait for 2 seconds
  And I enter in the post body "My new post body"
  And I wait for 2 seconds
  And I click in the update option
  And I wait for 2 seconds
  And I click posts button
  And I wait for 3 seconds
  Then I see the post with name "Post test 2 modificado"


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
  And I enter in the post name "Post test 3 borrar"
  And I wait for 2 seconds
  And I click on the editor
  And I wait for 2 seconds
  And I click in the publish option 
  And I wait for 2 seconds
  And I click in the Right now option
  And I wait for 2 seconds
  And I Select the set it live now option 
  And I click in the continue and final review button 
  And I wait for 2 seconds
  And I click the publish post option
  And I wait for 2 seconds
  And I click in the editor button
  And I wait for 2 seconds
  And I click posts button
  And I wait for 3 seconds 
  And I click in the post with name "Post test 3 borrar"
  And I wait for 2 seconds
  And I click in the settings button
  And I wait for 2 seconds
  And I click on Delete Post
  And I wait for 2 seconds
  And I click on Delete Post confirmation
  And I wait for 3 seconds
  Then I don't see the post with name "Post test 3 borrar"


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
  And I enter in the post name "Post test 4 Schedule"
  And I wait for 2 seconds
  And I click on the editor
  And I wait for 2 seconds
  And I click in the publish option 
  And I wait for 2 seconds
  And I click in the Right now option
  And I wait for 2 seconds
  And I Select the Schedule it for later option 
  And I wait for 2 seconds
  And I click in the continue and final review button 
  And I wait for 2 seconds
  And I click the publish post option
  And I wait for 2 seconds
  And I click in the editor button
  And I wait for 2 seconds
  And I click posts button
  And I wait for 3 seconds 
  Then I see the post with name "Post test 4 Schedule"
