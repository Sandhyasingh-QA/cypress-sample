import { generateRandomPhoneNumber,generateRandomGoodHumanFirstName,generateRandomGoodHumanLastName,generateRandomEmail,login,create} from "../Pageobjects/common.utils"



describe('Agent', () => {

    it('TC1 Create Agent-Positive', () => {
        
        const ln= new login()
        ln.handlelogin()
        cy.wait(8000)
        cy.contains('Dashboard').click()
        cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(4).click()
        cy.wait(6000) 
        cy.contains('button', 'Add Agent').click()
        cy.xpath('//*[@id="mui-component-select-parentOrgId"]').click() 
        cy.wait(3000)
        cy.get('ul[role="listbox"] > li').then((listItems) => {
        (listItems.eq(0)).click()
         });
         const createOrgobject= new create()
         createOrgobject.handleCreatePoc()
        
        cy.wait(7000) 
        cy.contains('button','Okay').click()
       cy.wait(8000)
      })
      
      it('TC2 - Verify for already existing email address', () => {
        const ln= new login()
        ln.handlelogin()
        cy.contains('Dashboard').click()
        cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(4).click()
        cy.wait(3000)
        cy.contains('button', 'Add Agent').click()
        cy.xpath('//*[@id="mui-component-select-parentOrgId"]').click()
        cy.wait(3000)
        cy.get('ul[role="listbox"] > li').then((listItems) => {
          (listItems.eq(0)).click()
         });
        cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
        cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
        cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
        cy.get('input[name ="email"]').type('arana@ex2india.com')
        cy.contains('button', 'Add New').click()
    
        cy.wait(7000) 
        
      })


    })