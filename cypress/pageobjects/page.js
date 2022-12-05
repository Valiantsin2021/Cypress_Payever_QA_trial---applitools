module.exports = class Page {
    open(link) {
        return cy.visit(`${Cypress.env('baseUrl')}${link}`)
    }
}