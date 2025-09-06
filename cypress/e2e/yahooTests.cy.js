import YahooPage from '../pages/YahooPage'

describe('Yahoo Search Tests - POM Version', () => {
    const yahooPage = new YahooPage()

    it('should search for "Pacto Soluções" on Yahoo and validate results', () => {
        cy.allure().story('Search for Company')
        cy.allure().severity('critical')
        cy.allure().description('Validates if Yahoo search returns results for Pacto Soluções')
        
        // Navegando para o Yahoo
        yahooPage.visit()
            .then(() => {
                cy.log('Successfully loaded Yahoo homepage')
            })
        
        // Realizando a busca
        yahooPage.search('Pacto Soluções')
            .then(() => {
                cy.log('Search executed successfully')
            })
        
        // Validando os resultados
        yahooPage.validateSearchResults('Pacto Soluções')
            .then(() => {
                cy.log('Taking screenshot of search results')
                cy.screenshot('yahoo-search-results', {
                    capture: 'viewport',
                    timeout: 10000,
                    overwrite: true
                })
            })
    })
})
