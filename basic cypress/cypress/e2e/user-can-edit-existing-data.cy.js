describe('User Can Edit Data Existing Data', () => {
  beforeEach(() => {
    //reset database using cypress comand
    cy.exec(
      'cd ../praktek/demo-app-cypress-automation && php artisan migrate:fresh --seed'
    );
  });
  beforeEach(() => {
    //reset database using cypress comand
    cy.exec(
      'cd ../praktek/demo-app-cypress-automation && php artisan migrate:fresh --seed'
    );
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://127.0.0.1:8000/user-management/user');
  });

  // positive test case
  it('User can edit existing data', () => {
    cy.get('.table td')
    .contains('user')
    .parent().find('a')
    .contains('Edit')
    .click();
    cy.get('#name').clear('user ');
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user').should('have.text', 'user edited');
    // assert
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
      .and('contain', 'User Berhasil Diupdate');
  });

  // negative test case
  // it('User can cancel delete data', () => {
    
  // });
})
