describe('template spec', () => {
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

  //positive test case
  it('User can delete data', () => {
    //arrange
    //act
    cy.get('.table td')
      .contains('user')
      .parent().find('button')
      .contains('Delete')
      .click();
    // make sure sweet alert visible
    cy.get('.swal-button-container').find('button').contains('OK').click();
    // cy.get('.table td')
    // .contains('user')
    // .next()
    // .next()
    // .next()
    // .contains('Delete')
    // .click();
    // cy.get('.table td').contains('user').nextAll().contains('Delete').click();
    //cy.get('.table td').contains('user').nextUntil().contains('tetx-right').click();
    // cy.get('.table td').contains('user').parent().contains('Delete').click();
    // cy.get(':nth-child(3) > .text-right > .d-flex > .ml-2 > .btn').click();
    // cy.get(':nth-child(2) > .swal-button').click();
    // cy.get('p').should('be.visible');
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success') 
      .contains('User Deleted Successfully');
    cy.get('.table').should('not.contain', 'user');
  });

  it.only('User can cancel delete data', () => {
    //arrange
    //act
    cy.get('.table td')
      .contains('user')
      .parent().find('button')
      .contains('Delete')
      .click();
    // make sure sweet alert visible
    cy.get('.swal-button-container').find('button').contains('Cancel').click();
    cy.get('.table').contains('user').should('be.visible');
  });

  //negative test case

})