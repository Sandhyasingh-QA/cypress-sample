describe('template spec', () => {
    it('passes', () => {
      cy.viewport(1200,800)
      cy.visit('https://homluv.com/')
      cy.wait(5000) 
      cy.xpath('//input[@class="ng-untouched ng-pristine ng-valid"]').type('Dal')
      
      cy.contains('Dallas, TX Area').click()
      cy.get('#locationSearchBtn').click()
      
      cy.get('.save-btn').click()
      cy.wait(3000) 
      cy.xpath('//*[@id="signUpModal"]/div/div/form/div[5]/p/a').click()
      cy.xpath('//*[@id="signInModal"]/div/div/div/form/div[1]/input').type('sansingh@ex2india.com')
      cy.xpath('//*[@id="signInModal"]/div/div/div/form/div[2]/input').type('12345')
      cy.xpath('//*[@id="signInModal"]/div/div/div/form/button[1]').click()

      cy.wait(10000) 
      
      cy.get('.luv-icon').eq(1).click()
      cy.xpath('//*[@id="row_1"]/hml-image-card/figure/hml-image/img').eq(1).click()
      cy.get('.luv-icon').eq(1).click()

    })
})