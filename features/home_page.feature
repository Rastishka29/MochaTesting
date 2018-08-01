Feature: Home Page
Basic checks that happy path scenario with adding valid email results in success alert message
  
  Scenario: Typing valid email changed opacity to 1
    Given home page is opened
    When user types a valid email
    Then button opacity changes to 1
    Then request button becomes enabled

Scenario: Clicking on request button triggers a success alert
    Given home page is reopened
    When user types a valid email and press request button
    Then success alert is displayed