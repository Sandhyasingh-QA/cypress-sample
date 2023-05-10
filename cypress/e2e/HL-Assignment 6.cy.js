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
      //cy.xpath('//*[@class="luv-icon"]//*[name()="svg"]').each(($el,index) => {
      //if(index<3){
        //cy.wrap($el).click()

      //}
    //})
      cy.get('.luv-icon').eq(0).click()
      cy.get('.down-arrow').eq(0).click()
      cy.contains('Create New Board').click()
      cy.xpath('//*[@id="board-name"]').type('Testing board')
      //cy.xpath('//*[@id="location-autocomplete-1682860471385"]').type('Dal')
      //cy.contains('Dallas, TX Area').click()
      cy.xpath('//input[@placeholder="Enter City"]',).click().type('dall')
      cy.wait(2000)
      cy.xpath('//*[@class="suggestions-container is-visible"]//a').contains('Dallas').click()
      cy.xpath('//*[@id="newHomeModal"]/div/div[2]/div/hml-board-form/form/hml-price-slider/div/ngx-slider/span[4]').click()
      cy.contains('CREATE MY BOARD').click()
    
      cy.xpath('/html/body/hml-root/div[2]/hml-header/header/div/ul/li[5]/a/img').click()
    

    })
  })