describe('User can login to sistem', () => {
  it('User can login with valid username dan password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    cy.get('[data-id="password"]').type("password");
    cy.get('[data-id="submit"]').click();
    cy.get('[data-id="username"]').click();
    cy.get('[data-id="logout-btn"]').click();

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('user-login-test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:8000/');
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  });
})