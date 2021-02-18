@Session3
Feature: Collection
    As a user, I want to interact with collection(s)
    
    Background: 
        Given the user opens the site "/login"
        When the user login the website with "nghiatest02@gmail.com" and "vodainghia"

    @Scenario03
    Scenario: Check that the user can create a new collection and add a photo into it
        And the user adds a random photo into a temp collection
        And the user navigates to this temp collection
        Then the user sees the correct photo in it

    @Scenario04
    Scenario: Check the removed photo from the existed collection
        And the user adds 02 random photos into a temp collection
        And the user removes a photo from this temp collection
        And the user navigates to this temp collection
        Then the user sees only the rest photo in it
