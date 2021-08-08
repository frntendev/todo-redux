import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the main page", () => {
  cy.visit(Cypress.env("baseUrl"));
});

Then("I enter title {string}", value => {
  cy.dataCy("newitem-input").type(value);
  cy.dataCy("submit-btn").click();
});

Then("An item with title {string} should be added", value => {
  cy.dataCy('todo-list').contains(value);
});
