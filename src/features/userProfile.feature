@Session3
Feature: User Profile
    As a user, I want to manage my information in the User Profile

    @Scenario01
    Scenario Outline: Check that the user's location is correct after updated
        Given the user opens the site "<site/url>"
        When the user login the website with "<email>" and "<password>"
        And the user navigates to Edit Profile Page
        And the user updates location information to "<location>"
        Then the user's location is "<location>"

        Examples:
            | site/url | email                 | password   | location |
            | /login   | nghiatest02@gmail.com | vodainghia | Vietnam  |