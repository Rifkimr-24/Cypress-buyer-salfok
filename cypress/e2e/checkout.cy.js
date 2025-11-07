const checkoutLogin = require('../support/pageobject/checkoutWhiteLogin');

describe ('Checkout Page', () => {
    it('success checkout produk', () => {
        cy.checkoutLogin();
    })
})