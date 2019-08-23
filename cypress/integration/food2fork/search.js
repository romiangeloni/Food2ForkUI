describe('Search Test', function() {
    it('Search a monster cookie receipe', function() {
      cy.visit(Cypress.env('EXTERNAL_API'))
      cy.get('#typeahead').type('cookie monster cupcakes{enter}')
      cy.contains('Cookie Monster cupcakes').click()
    })
  })