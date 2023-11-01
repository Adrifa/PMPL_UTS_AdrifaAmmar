describe('User can login to System', () => {
  //positive test case
  it('User can login wtih valid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    //assert 
    cy.get('.nav-link > .d-sm-none').should("have.text", "Hi, SuperAdmin");
  });

  //negative test case
  it('User cannot login wtih valid username and wrong password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password-salah");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should(
      "have.text", 
      "These credentials do not match our records.");
  });
  it('User cannot login wtih wrong username and valid password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadminasdd@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should(
      "have.text", 
      "These credentials do not match our records.");
  });
  it('User cannot login wtih empty username and valid password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should(
      "have.text", 
      "The email field is required.");
  });
  it('User cannot login wtih valid username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmina@gmail.com");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should(
      "have.text", 
      "The password field is required.");
  });

  //QUIZ
  //1. User memcoba login tanpa memasukkan email dan password
  it('User cannot login wtih empty username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get('.btn').click();
    //assert
    cy.get(':nth-child(2) > .invalid-feedback').should(
      "have.text", 
      "The email field is required.");
      cy.get(':nth-child(3) > .invalid-feedback').should(
      "have.text", 
      "The password field is required.");
  });
  //2. User mencoba klik Forgot Password ketika lupa password dari akunnya
  it.only('User klik forgot password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmina@gmail.com");
    cy.get('.text-small').click();
    //assert
    cy.get('h4').should(
      "have.text",
      "Forgot Password"
    );
  });
})