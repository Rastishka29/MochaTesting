Feature: Home Page
Basic checks that happy path scenario with adding valid email results in success alert message
  
Background: User Petir opened library site on Home Page
    Given home page is opened

Scenario: Typing valid email changed opacity to 1
    When user types a valid email
    Then button opacity changes to 1
    Then request button becomes enabled

Scenario: Clicking on request button triggers a success alert
    When user types a valid email and press request button
    Then success alert is displayed