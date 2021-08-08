const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = on => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on("file:preprocessor", cucumber());
};
