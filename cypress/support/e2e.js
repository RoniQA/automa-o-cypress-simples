import '@shelex/cypress-allure-plugin';

// Configuração do Allure
Cypress.on('test:before:run', (test) => {
    test.allure = true;
});

beforeEach(() => {
    cy.allure().severity('normal');
    cy.allure().owner('Renato');
    cy.allure().tag('automated');
});
