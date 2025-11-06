const checkoutLogin = require ('../support/pageobject/checkoutWhiteLogin');

describe ('Checkout', () => {
    it('Success checkout dengan login', () => {
    cy.checkoutLogin();
    });
});