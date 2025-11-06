class loginPage {
    loginValid(){
     // Visit ke halaman login web   
     cy.visit('https://dev.salfok.com/login');
     cy.wait(2000);
     cy.contains('p', 'Login').should('be.visible');

     // Input No Whatsapp
     cy.get('input[placeholder="Contoh: +62xx/08xx"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .type('082129925004');
      cy.wait(1800);

      // Input Password
     cy.get('input[placeholder="Masukkan password Anda"]')
      .should('be.visible')
      .and('not.be.disabled')
      .type('Bandung1993!');
     cy.wait(1800);

     // Klik Button Login
     cy.get('button[data-umami-event="LOGIN_BUYER_AFFILIATE"]').click();
     cy.wait(3000);
     cy.contains('Login sukses', { timeout: 10000 }).should('be.visible');






    };
};
export default new loginPage();