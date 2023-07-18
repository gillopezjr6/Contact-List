Feature: Testing unsuccessful and successful login to the Contact List app

  Scenario Outline: As a user, I am unsuccessful logging in to the contact list app
    Given the user is on the login page
    And the header has text <headerText>
    When I login with incorrect <username> and/or <password>
    Then I should see an error message saying <message>

    Examples: 
      | headerText       | username               | password     | message                        |
      | Contact List App | eaglenextiva@gmail.com | password     | Incorrect username or password |
      | Contact List App | eaglenextiva@gmail.com |              | Incorrect username or password |
      | Contact List App | gillopezjr6@gmail.com  | E$$exville20 | Incorrect username or password |
      | Contact List App | gillopezjr6@gmail.com  | password     | Incorrect username or password |
      | Contact List App | gillopezjr6@gmail.com  |              | Incorrect username or password |
      | Contact List App |                        | E$$exville20 | Incorrect username or password |
      | Contact List App |                        | password     | Incorrect username or password |
      | Contact List App |                        |              | Incorrect username or password |

 Scenario Outline: As a user, I successfully login to the contact list app
    Given the user is on the login page
    And the header has text <headerText>
    When they login with correct <username> and <password>
    Then they should see a label on the contact list page saying <message>

    Examples: 
      | headerText       | username               | password     | message                                          |
      | Contact List App | eaglenextiva@gmail.com | E$$exville20 | Click on any contact to view the Contact Details |
 