Feature: Staff

@web @user1
Scenario: Como usuario quiero loguearme en la pagina, ver los usuarios de staff y editar el usuario Ghost
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 4 seconds 
  And I click staff button
  And I wait for 2 seconds 
  And I click staff "ghost" button 
  And I wait for 2 seconds 
  And I enter the user name input field a random user name
  And I enter the email input field a random email
  And I wait for 2 seconds 
  And I change the user role to Editor
  And I enter the user location input field a random location
  And I click save edit staff button  
  And I wait for 4 seconds
  And I click staff button
  Then I click staff "ghost" button 
    And I enter the user name input field a random user name
    And I click save edit staff button

@web @user2
Scenario: Como usuario quiero loguearme en la pagina, ver los usuarios de staff y editar la contraseña del usuario Ghost
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 4 seconds 
  And I click staff button
  And I wait for 2 seconds 
  And I click staff "ghost" button
  And I wait for 2 seconds 
  And I enter the user new password input field a random password
  And I enter the user password verification input field the random password
  And I click save change password button
  Then I see the password changed notification


@web @user3
Scenario: Como usuario quiero loguearme en la pagina, ver los usuarios de staff y suspender al usuario Ghost luego volver a habilitarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "myjachis@gmail.com"
  And I enter password "Mr.hellno19"
  And I wait for 1 seconds
  And I click login button
  And I wait for 4 seconds 
  And I click staff button
  And I wait for 2 seconds 
  And I click staff "ghost" button 
  And I wait for 2 seconds 
  And I click the engine button
  And I wait for 2 seconds
  And I click the suspend button
  And I wait for 2 seconds  
  And I click the confirm suspend button
  And I wait for 2 seconds  
  Then I see the suspended badge
    And I click the engine button
    And I click the unsuspend button
    And I wait for 2 seconds  
    And I click the confirm suspend button


@web @user4
Scenario: Como usuario quiero loguearme en la pagina, ver los usuarios de staff e invitar a un nuevo usuario
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 1 seconds
When I enter email "myjachis@gmail.com"
And I enter password "Mr.hellno19"
And I wait for 1 seconds
And I click login button
And I wait for 4 seconds 
And I click staff button
And I wait for 2 seconds 
And I click the invite people button
And I enter in the invite form email a random email
And I select the user role to Contributor
Then I click the send invitation button