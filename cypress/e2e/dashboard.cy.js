describe('Dasboard ', () => {

    it('Test case 1- dashboard', () => {
        cy.viewport(1200,800)
        cy.visit('https://nexus-dev-admin.exitest.com/login')
  
        cy.get('input[name="email"]').type('arana@ex2india.com')
        cy.get('input[name="password"]').type('coolAdmin05@')
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.url().should('eq','https://nexus-dev-admin.exitest.com/dashboard/analytics/my-dashboard')
        cy.wait(3000)
        cy.contains('Dashboard').click()
        cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(0).click()
        cy.wait(3000)
        cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(1).click()
        cy.wait(3000)
        cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(2).click()
        cy.wait(3000)
      })

    


})