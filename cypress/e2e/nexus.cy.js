describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://nexus-dev-admin.exitest.com/login')

      cy.get(':nth-child(1) > .relative > .MuiInputBase-root > .MuiInputBase-input').type('arana@ex2india.com')

      cy.get(':nth-child(2) > .relative > .MuiInputBase-root > .MuiInputBase-input').type('coolAdmin05@ ')

      cy.get('.MuiButton-root').click()
    })
  })