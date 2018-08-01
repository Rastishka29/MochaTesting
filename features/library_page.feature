Feature: Libraries Page
Basic checks that list of libraries is displayed and user can add new library and perform filtering

  Scenario: List of libraries is displayed
    Given home page is opened from fresh start
    When user opens libraries page
    Then list of libraries contains at least 10 items
    When user is adding new library
    Then new library is present in the list
    When user filters libraries
    Then list contains only filtered items

