describe('Pokedex', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:5003')
      cy.contains('ivysaur')
      cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    })

    it('user can navigate to one of the pages', function() {
        cy.visit('http://localhost:5003')
        cy.contains('ivysaur').click()
        cy.url().should('match', /pokemon\/ivysaur$/)
        cy.get(':nth-child(1) > .pokemon-ability-name').contains('overgrow')
        cy.get(':nth-child(2) > .pokemon-ability-name').contains('chlorophyll')
    })
  })