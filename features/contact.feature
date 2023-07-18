Feature: Add a contact on the contact list page and verify

  Scenario Outline: As a user, I will add a new contact on the contact list page
    Given the user is on the login page
    And the user logs in with <username> and <password>
    And they click the add new contact button
    When they enter <firstName>, <lastName>, <birthdate>, <email>, <phone>, <address>, <city>, <state>, <zip>, and <country>
    Then the contact is added successfully

    Examples: 
      | username               | password     | firstName | lastName | birthdate  | email                  | phone      | address     | city     | state | zip   | country |
      | eaglenextiva@gmail.com | E$$exville20 | Gilbert   | Lopez    | 1970-12-29 | eaglenextiva@gmail.com | 3137994515 | 100 Main St | Bay City | MI    | 48706 | USA     |
