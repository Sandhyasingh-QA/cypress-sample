import {generateOrganizationName,generateRandomAddress,generateRandomPhoneNumber, generateRandomGoodHumanFirstName,generateRandomGoodHumanLastName,generateRandomEmail} from "./common.utils"



export class Owner
{
  handleCreateOrg(){
    cy.contains('button', 'Add Owner').click()
    cy.get('input[name="orgName"]').type(generateOrganizationName())
    cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber(10))
    cy.get('input[name="orgAddress"]').type(generateRandomAddress())
    cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
    cy.get('ul[role="listbox"] > li').then((listItems) => {
        (listItems.eq(0)).click()
    });
    cy.contains('button', 'Next').click()
  }
  handleCreatePoc(){
    cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
    cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
    cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
    cy.get('input[name ="email"]').type(generateRandomEmail())
    cy.contains('button', 'Add New').click()
    cy.wait(7000) 
    cy.contains('button','Okay').click()
   cy.wait(8000)
  }

  handleDashboardNavigateAndAddAownerClick (){
    cy.contains('Dashboard').click()
    cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(0).click()
    cy.wait(6000) 
    cy.contains('button', 'Add Owner').click()
  }

  handlecreateownerwithvalidations(){
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

  }

  handlealreadyexistingowner(){
    cy.get('input[name="orgName"]').type(generateOrganizationName())
    cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber(10))
    cy.get('input[name="orgAddress"]').type(generateRandomAddress())
    cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
    cy.get('ul[role="listbox"] > li').then((listItems) => {
        (listItems.eq(0)).click()
    });
    cy.contains('button', 'Next').click()
    cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
    cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
    cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
    cy.get('input[name ="email"]').type('arana@ex2india.com')
    cy.contains('button', 'Add New').click()

    cy.wait(7000)
  }

  handlealreadyexistingOrg(){
    cy.get('input[name="orgName"]').type('William Homes')
        cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber(10))
        cy.get('input[name="orgAddress"]').type(generateRandomAddress())
        cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
        cy.get('ul[role="listbox"] > li').then((listItems) => {
            (listItems.eq(0)).click()
        });
        cy.contains('button', 'Next').click()
        cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
        cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
        cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
        cy.get('input[name ="email"]').type(generateRandomEmail())
        cy.contains('button', 'Add New').click()
    
        cy.wait(7000)
  }
}