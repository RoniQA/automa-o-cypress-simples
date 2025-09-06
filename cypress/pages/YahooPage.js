class YahooPage {
    // Selectors
    elements = {
        searchBox: () => cy.get('#yschsp'),
        searchButton: () => cy.get('#yschsp').type('{enter}'),
        searchResults: () => cy.get('#web')
    }

    // Methods
    visit() {
        cy.log('Visiting Yahoo homepage')
        cy.allure().parameter('URL', 'https://www.yahoo.com')
        return cy.visit('https://www.yahoo.com')
    }

    search(term) {
        cy.log(`Typing search term: ${term}`)
        cy.allure().parameter('Search Term', term)
        cy.get('#yschsp').should('be.visible').clear().type(term)
        cy.log('Pressing Enter to search')
        return cy.get('#yschsp').type('{enter}')
    }

    validateSearchResults(term) {
        cy.log('Validating search results')
        cy.allure().parameter('Expected Term', term)
        return cy.get('#web')
            .should('exist')
            .should('be.visible')
            .should('contain.text', term)
            .then(() => {
                cy.log(`Found results containing: ${term}`)
                cy.allure().attachment(
                    'Search Results',
                    `Found results containing: ${term}`,
                    'text/plain'
                )
            })
    }
}

export default YahooPage;
