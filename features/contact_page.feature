Feature: Contact Page 
Contact Page should contain feedback form   

Background: User Petir opened the site
    Given new home page is opened
    When Petir opens Contact page

Scenario: Infobox is displayed on Contact Page
    Then Infobox is displayed

Scenario: Petir is able to fill out the feedback form
    When Petir fills out the feedback form
    When he sends the form
    Then success message is displayed