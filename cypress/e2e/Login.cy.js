
describe('Login Nexus ', () => {

    it('Test case 1 login- Positive', () => {
      cy.viewport(1200,800)
      cy.visit('https://nexus-dev-admin.exitest.com/login')

      cy.get('input[name="email"]').type('arana@ex2india.com')
        cy.get('input[name="password"]').type('coolAdmin05@')
        cy.get('button[type="submit"]').click()
      cy.wait(5000)
      cy.url().should('eq','https://nexus-dev-admin.exitest.com/dashboard/analytics/my-dashboard')
    })

    it('Test case 2 login - Negative', () => {
        cy.viewport(1200,800)
        cy.visit('https://nexus-dev-admin.exitest.com/login')
  
        cy.get('input[name="email"]').type('arana@ex2india.com')
        cy.get('input[name="password"]').type('abc')
        cy.get('button[type="submit"]').click()
        cy.url().should('eq','https://nexus-dev-admin.exitest.com/dashboard/analytics/my-dashboard')
      })

      it('Test case 3 - Forgot Password', () => {
        cy.viewport(1200,800)
        cy.visit('https://nexus-dev-admin.exitest.com/login')
        cy.wait(5000)
        cy.contains('button', 'Forgot Password?').click()
        cy.url().should('eq','https://nexus-dev-admin.exitest.com/forgot-password')
      })


})