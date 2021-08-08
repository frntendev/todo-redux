Feature: Todo
    I want to see todo list and interact with that

    Scenario: See todo list
        Given I navigate to the main page
        Then I see the to do list properly

    Scenario: Add todo
        Given I navigate to the main page
        Then I enter title "My Test Todo task"
        Then An item with title "My Test Todo task" should be added