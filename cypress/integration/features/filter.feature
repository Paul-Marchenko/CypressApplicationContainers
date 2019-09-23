Feature: Filter panel is filtered data.
     

Scenario: Filters has Name field
    Given User visits the Application
    When Application is opnened
    Then has Name field

Scenario: Filters has City field
    Given User visits the Application
    When Application is opnened
    Then has City field

Scenario: Filters is filtered by Name field for correct user name
    Given User visits the Application
    When Application is opnened
    When User name is typed to the Name field
    When Submit button is clicked
    Then Only has typed User name is displayed

Scenario: Filters is filtered by City field for correct user name
    Given User visits the Application
    When Application is opnened
    When City name is typed to the City field
    When Submit button is clicked
    Then Only user with has typed City name is displayed