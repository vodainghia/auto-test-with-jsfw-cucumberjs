@Session3
Feature: Photo
    As a user, I want to interact with photo(s)

    @Scenario02
    Scenario Outline: Check that all related tags of a photo are correct
        Given the user opens the site "<site/url>"
        When the user opens a random photo
        And the user login with "<email>" and "<password>" by adding photo to collection
        Then all related tags of this photo are correct

        Examples:
            | site/url | email                 | password   |
            | /        | nghiatest02@gmail.com | vodainghia |

    @Scenario05
    Scenario Outline: Check like a random photo
        Given the user opens the site "<site/url>"
        When the user login the website with "<email>" and "<password>"
        And the user opens a random photo
        And the user likes this photo and navigates to the likes page
        Then the photo is liked

        Examples:
            | site/url | email                 | password   |
            | /login   | nghiatest02@gmail.com | vodainghia |