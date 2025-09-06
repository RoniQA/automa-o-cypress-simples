describe('Yahoo Search Tests - Direct Version', () => {
  it('should search Yahoo for "Pacto Soluções" and validate results', () => {
    // Visit Yahoo
    cy.log('Navigating to Yahoo homepage')
    cy.visit('https://www.yahoo.com')
      .then(() => {
        cy.log('Successfully loaded Yahoo homepage')
      })

    // Type search term and submit
    cy.log('Typing search term')
    cy.get('#yschsp')
      .should('be.visible')
      .clear()
      .type('Pacto Soluções')
      .then(() => {
        cy.log('Pressing Enter to search')
        cy.get('#yschsp').type('{enter}')
      })

    // Validate search results
    cy.log('Validating search results')
    cy.get('#web')
      .should('exist')
      .should('be.visible')
      .should('contain.text', 'Pacto Soluções')
      .then(() => {
        cy.log('Search results found successfully')
      })

    // Additional validations to ensure results are relevant
    cy.url().should('include', 'search')
    cy.get('#main').should('be.visible')
      .then(() => {
        cy.log('Taking screenshot of search results')
        cy.screenshot('yahoo-direct-search-results', {
          capture: 'viewport',
          timeout: 10000,
          overwrite: true
        })
      })
  })
})
