describe('Dasboard ', () => {

    it('Test case 1- dashboard', () => {
        cy.viewport(1200,800)
        cy.visit('https://nexus-dev-admin.exitest.com/login')
  
        cy.get('input[name="email"]').type('arana@ex2india.com')
        cy.get('input[name="password"]').type('coolAdmin05@')
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.url().should('eq','https://nexus-dev-admin.exitest.com/dashboard/analytics/my-dashboard')
        cy.wait(2000)
        cy.title().should('eq','Analytics Dashboard')

       
      })

    


})