import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the main page", () => {
  cy.visit(Cypress.env("baseUrl"));
});

Then("I see the to do list properly", () => {
  cy.dataCy("todo-list").should("be.visible");
});
