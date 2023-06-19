import { generateRandomPhoneNumber} from "../utility/common.utils"
import {generateOrganizationName} from "../utility/common.utils"
import {generateRandomGoodHumanFirstName} from "../utility/common.utils"
import {generateRandomGoodHumanLastName} from "../utility/common.utils"
import {generateRandomAddress} from "../utility/common.utils"
import {generateRandomEmail} from "../utility/common.utils"


describe('Owner ', () => {

    it('TC1 Create Owner-Positive', () => {
        cy.viewport(1200,800)
        cy.visit('https://nexus-dev-admin.exitest.com/login')
        cy.get('input[name="email"]').type('arana@ex2india.com')
        cy.get('input[name="password"]').type('coolAdmin05@')
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.contains('Dashboard').click()
        cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(0).click()
        cy.wait(6000) 
        cy.contains('button', 'Add Owner').click()
        cy.get('input[name="orgName"]').type(generateOrganizationName())
        cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber(10))
        cy.get('input[name="orgAddress"]').type(generateRandomAddress())
        cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
        cy.get('ul[role="listbox"] > li').then((listItems) => {
            (listItems.eq(0)).click()
        });
        cy.xpath('//*[@id="panel1a-content"]/div/div/div[5]').click()

        cy.contains('button', 'Next').click()
        cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
        cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
        cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
        cy.get('input[name ="email"]').type(generateRandomEmail())
        cy.contains('button', 'Add New').click()
    
        cy.wait(7000) 
        cy.contains('button','Okay').click()
       cy.wait(8000)
      })

    

    it('TC2 - Verfiy field level validations', () => {
        cy.viewport(1200,800)
        cy.visit('https://nexus-dev-admin.exitest.com/login')
        cy.get('input[name="email"]').type('arana@ex2india.com')
        cy.get('input[name="password"]').type('coolAdmin05@')
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.contains('Dashboard').click()
        cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(0).click()
        cy.wait(6000) 
        cy.contains('button', 'Add Owner').click()
        cy.wait(2000)
        cy.contains('button', 'Next').click()
        if(cy.get('.Mui-error').contains('Please enter the organization name'))
      {
        cy.get('input[name="orgName"]').type(generateOrganizationName(10))
      }
      if(cy.get('.Mui-error').contains('Please enter the phone number'))
       {
        cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber())
       }
       
       if(cy.get('.Mui-error').contains('Please enter the address'))
       {
        cy.get('input[name="orgAddress"]').type(generateRandomAddress())
       }
       cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
       cy.get('ul[role="listbox"] > li').then((listItems) => {
        (listItems.eq(0)).click()
       });
       cy.contains('button', 'Next').click()
       cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
       cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
       cy.get('input[name ="phone"]').type(generateRandomPhoneNumber())
       cy.get('input[name ="email"]').type(generateRandomEmail(10))
       cy.contains('button', 'Add New').click()
       cy.wait(3000)

       cy.contains('button','Okay').click()
       cy.wait(5000)
       
      })
      

})