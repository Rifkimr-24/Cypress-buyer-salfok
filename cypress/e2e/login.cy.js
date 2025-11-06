const loginPage = require ('../support/pageobject/login');
const loginNotValid = require ('../support/pageobject/loginGagal');

describe('Login Page', () => {
  it('Success Login with valid data', () => {
  cy.loginPage("082129925004", "Bandung1993!");
  });

  it('Login failled with invalid data', () => {
  cy.loginNotValid("082129925004", "Bandung199");
  })
});
