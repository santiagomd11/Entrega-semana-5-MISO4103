Feature: Drafts

@web @user1
Scenario: Como usuario quiero loguearme en la pagina, y crear un post draft
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 4 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click draft button
  And I wait for 2 seconds 
  And I click new draft post button
  And I wait for 2 seconds 
  And I enter in the post name a random name for "scenario1"
  And I wait for 2 seconds 
  And I click on the editor
  And I wait for 2 seconds
  And I click the back button
  And I wait for 3 seconds
  Then I see the post with the random name for "scenario1"

@web @user2
Scenario: Como usuario quiero loguearme en la pagina, y crear un post draft y editarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 4 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click draft button
  And I wait for 2 seconds 
  And I click new draft post button
  And I wait for 2 seconds 
  And I enter in the post name a random name for "scenario2"
  And I wait for 2 seconds 
  And I click on the editor
  And I wait for 2 seconds
  And I click the back button
  And I wait for 3 seconds 
  And I click in the post with random name for "scenario2"
  And I wait for 2 seconds 
  And I enter in the post name a random name for "scenario2"
  And I wait for 2 seconds 
  And I click on the editor
  And I enter in the post body a random body
  And I wait for 2 seconds 
  And I click the back button
  And I wait for 3 seconds 
  Then I see the post with the random name for "scenario2"

@web @user3
Scenario: Como usuario quiero loguearme en la pagina, y crear un post draft, y publicarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 4 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click draft button
  And I wait for 2 seconds 
  And I click new draft post button
  And I wait for 2 seconds 
  And I enter in the post name a random name for "scenario3"
  And I wait for 2 seconds 
  And I click on the editor
  And I wait for 2 seconds
  And I click the back button
  And I wait for 3 seconds 
  And I click in the post with random name for "scenario3"
  And I wait for 2 seconds
  And I click in the publish option 
  And I wait for 2 seconds 
  And I Select the set it live now option
  And I wait for 2 seconds 
  And I click in the publish button 
  And I wait for 2 seconds 
  And I click the back button
  And I wait for 2 seconds 
  And I click posts button
  And I wait for 3 seconds 
  Then I see the post with the random name for "scenario3"

@web @user4
Scenario: Como usuario quiero loguearme en la pagina, y crear un post draft, y eliminarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 4 seconds 
  And I click posts button
  And I wait for 2 seconds 
  And I click draft button
  And I wait for 2 seconds 
  And I click new draft post button
  And I wait for 2 seconds 
  And I enter in the post name a random name for "scenario4"
  And I wait for 2 seconds 
  And I click on the editor
  And I wait for 2 seconds
  And I click the back button
  And I wait for 3 seconds 
  And I click in the post with random name for "scenario4"
  And I wait for 2 seconds
  And I click in the settings button
  And I wait for 2 seconds 
  And I click on Delete Post
  And I wait for 2 seconds
  And I click on Delete Post confirmation
  And I wait for 3 seconds 
  Then I don't see the post with the random name for "scenario4"