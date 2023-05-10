describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://homluv.com/')
    cy.wait(5000) 
    cy.xpath('//input[@class="ng-untouched ng-pristine ng-valid"]').type('Austin, TX Area')
    
    cy.contains('Austin, TX Area').click()
    cy.get('#locationSearchBtn').click()
    cy.contains('Set Budget').click()
    
    cy.wait(3000);
    cy.get('.ngx-slider')
  .eq(0).click();   
  cy.wait(3000);
   cy.get('.ngx-slider')
  .eq(1).click();   
  cy.wait(3000);
   cy.get('.ngx-slider')
  .eq(2).click()

    cy.contains('Done').click()
    cy.wait(3000);
    cy.get('.collapse-icon').click()
    cy.wait(10000) 
    cy.xpath('//*[@class="luv-icon"]//*[name()="svg"]').each(($el,index) => {
      if(index<5){
        cy.wrap($el).click()

      }
    })
   
    
    cy.contains('SET UP NOW').click()
    cy.wait(5000) 
    cy.xpath('//*[@id="signUpModal"]/div/div/form/div[5]/p/a').click()
    cy.xpath('//*[@id="signInModal"]/div/div/div/form/div[1]/input').type('sansingh@ex2india.com')
    cy.xpath('//*[@id="signInModal"]/div/div/div/form/div[2]/input').type('12345')
    cy.xpath('//*[@id="signInModal"]/div/div/div/form/button[1]').click()
  })
})