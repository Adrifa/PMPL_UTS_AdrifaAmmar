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

  //Challange 1
  it('Challange 1 can edit user baru', () => {
    cy.get('.table td')
    .contains('User Baru')
    .parent().find('a')
    .contains('Edit')
    .click();
    cy.get('#name').clear('user ');
    cy.get('#name').type('User Baru edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('User Baru').should('have.text', 'User Baru edited');
    // assert
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
      .and('contain', 'User Berhasil Diupdate');
  });
  //Challange 2
  it.only('Challange 2 can edit user', () => {
    cy.get('.table td')
    .contains('user')
    .parent().find('a')
    .contains('Edit')
    .click();
    cy.get('#name').clear('User ');
    cy.get('#name').type('M Setya Budi P edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('M Setya Budi P').should('have.text', 'M Setya Budi P edited');
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