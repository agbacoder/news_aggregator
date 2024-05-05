describe('End-to-End Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the homepage content', () => {
    cy.contains('Latest News').should('be.visible');
    cy.contains('Login').should('be.visible');
  });

    // test login button
  it('should navigate to the login page', () => {
    cy.contains('Login').click();

    cy.url().should('include', '/signin');

    cy.contains('Login').should('be.visible');
  });

   // test login with valid details
  it('should log in successfully with valid credentials', () => {
    cy.contains('Login').click();

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');

    cy.get('button[type="submit"]').click();

    // redirect to the homepage on login
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.contains('Latest News').should('be.visible');
  });

  // check for invalid signin details
  it('should display error message with invalid credentials', () => {
    cy.contains('Login').click();

    cy.get('input[name="email"]').type('');
    cy.get('input[name="password"]').type('');

    cy.get('button[type="submit"]').click();

    cy.contains('Invalid Credentials! Please try again').should('be.visible');
  });
});
