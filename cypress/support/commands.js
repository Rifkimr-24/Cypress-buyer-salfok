// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Minified React error #418")) {
    return false; // abaikan error react
  }
});


Cypress.Commands.add('waitUntilReady', () => {
  cy.get('body', { timeout: 10000 })
    .should('not.have.attr', 'style', 'pointer-events: none;');
});

import loginPage from '../support/pageobject/login'
// login successful
Cypress.Commands.add('loginPage', (email, password) => {
  loginPage.loginValid(email, password);
});

import loginNotValid from '../support/pageobject/loginGagal';
// Login Invalid
Cypress.Commands.add('loginNotValid', (email, password) => {
 loginNotValid.loginFailed(email, password);
})