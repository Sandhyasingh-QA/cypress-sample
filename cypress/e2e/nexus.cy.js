import { generateRandomPhoneNumber} from "../utility/common.utils"
import {generateOrganizationName} from "../utility/common.utils"
import {generateRandomGoodHumanFirstName} from "../utility/common.utils"
import {generateRandomGoodHumanLastName} from "../utility/common.utils"
import {generateRandomAddress} from "../utility/common.utils"
import {generateRandomEmail} from "../utility/common.utils"



describe('template spec', () => {
    it('passes', () => {
      cy.viewport(1200,800)
      cy.visit('https://nexus-dev-admin.exitest.com/login')

      cy.get('input[name="email"]').type('arana@ex2india.com')
      cy.get('input[name="password"]').type('coolAdmin05@')
      cy.get('button[type="submit"]').click()

      cy.wait(5000) 


     //Hierarchy levels
      cy.contains('Dashboard').click()
      cy.wait(2000)


//        //Create Owner
//       cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(0).click()
//       cy.wait(6000) 
//       cy.contains('button', 'Add Owner').click()
//       cy.get('input[name="orgName"]').type(generateOrganizationName())
//       cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber(10))
//       cy.get('input[name="orgAddress"]').type(generateRandomAddress())

//       cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()  //click on industry (doubt)
//       cy.get('ul[role="listbox"] > li').then((listItems) => {
//             (listItems.eq(0)).click()
//       });
//       cy.xpath('//*[@id="panel1a-content"]/div/div/div[5]').click()

//       cy.contains('button', 'Next').click()
//       cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
//       cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
//       cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
//       cy.get('input[name ="email"]').type(generateRandomEmail())
//       cy.contains('button', 'Add New').click()
    
//       cy.wait(7000) 
//       cy.contains('button','Okay').click()
//       cy.wait(8000) 
    
  

//       //Create Group Manager
//       cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(1).click()
//       cy.wait(4000) 
//       cy.contains('button', 'Add Group Manager').click()
//       cy.xpath('//*[@id="mui-component-select-parentOrgId"]').click() //doubt 
//       cy.wait(3000)
//       cy.get('ul[role="listbox"] > li').then((listItems) => {
//         (listItems.eq(0)).click()
//        });
//      // cy.contains('Apple').click()
//       cy.get('input[name="orgName"]').type(generateOrganizationName(10))
//       cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber(10))
//       cy.get('input[name="orgAddress"]').type(generateRandomAddress())
//       //cy.get('input[name="orgIndustry"]').click()

//       cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()  //doubt
//       cy.get('ul[role="listbox"] > li').then((listItems) => {
//         (listItems.eq(0)).click()
//        });
//        cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div[5]/div[1]').click()
//       cy.contains('button', 'Next').click()

//         cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
//         cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
//         cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
//         cy.get('input[name ="email"]').type(generateRandomEmail())
//         cy.contains('button', 'Add New').click()
      
//       cy.contains('button','Okay').click()
      
      
//       cy.wait(8000)

//     // Create CM
//        cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(2).click()
//        cy.wait(4000) 
//        cy.contains('button', 'Add Campaign Manager').click()
//        cy.contains('button', 'Next').click()

//       if
//         (cy.get(' .Mui-error').contains('Please select a group manager'))

//       {
//         cy.xpath('//*[@id="mui-component-select-parentOrgId"]').click()
//         cy.wait(3000)
//         cy.get('ul[role="listbox"] > li').then((listItems) => {
//           (listItems.eq(0)).click()
//          });
//         // cy.contains('Nexus').click()
//         cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div[5]/div[1]').click()
//         cy.contains('button', 'Next').click()
//       }
//       if(cy.get('.Mui-error').contains('Please enter the organization name'))
//       {
//         cy.get('input[name="orgName"]').type(generateOrganizationName(10))
//       }
//        if(cy.get('.Mui-error').contains('Please enter the phone number'))
//        {
//         cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber())
//        }
       
//        if(cy.get('.Mui-error').contains('Please enter the address'))
//        {
//         cy.get('input[name="orgAddress"]').type(generateRandomAddress())
//        }
//        cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
//        cy.get('ul[role="listbox"] > li').then((listItems) => {
//         (listItems.eq(0)).click()
//        });
//        cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div[5]/div[1]').click()
//        cy.contains('button', 'Next').click()

//        cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
//        cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
//        cy.get('input[name ="phone"]').type(generateRandomPhoneNumber())
//        cy.get('input[name ="email"]').type(generateRandomEmail(10))
//        cy.contains('button', 'Add New').click()
//        cy.wait(3000)

//        cy.contains('button','Okay').click()
//        cy.wait(5000)




//     //Create Campaign
//       cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(3).click()
//       cy.wait(3000)
//       cy.contains('button', 'Add Campaign').click()
//       cy.xpath('//*[@id="mui-component-select-parentOrgId"]').click()
//       cy.get('ul[role="listbox"] > li').then((listItems) => {
//         (listItems.eq(0)).click()
//        });
//       cy.get('input[name="orgName"]').type(generateOrganizationName(10))
//       cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber(10))
//       cy.get('input[name="orgAddress"]').type(generateRandomAddress())
//       cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
//       cy.get('ul[role="listbox"] > li').then((listItems) => {
//         (listItems.eq(0)).click()
//        });
//        cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div[5]/div[1]').click()
//       cy.contains('button', 'Next').click()

//       cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
//       cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
//       cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
//       cy.get('input[name ="email"]').type(generateRandomEmail())
//       cy.contains('button', 'Add New').click()

//       cy.contains('button','Okay').click()
//       cy.wait(3000)
  
// //       //Create Agent

//       cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(4).click()
//       cy.wait(3000)
//       cy.contains('button', 'Add Agent').click()
//       cy.xpath('//*[@id="mui-component-select-associatedCampaign"]').click()
//       cy.get('ul[role="listbox"] > li').then((listItems) => {
//         (listItems.eq(0)).click()
//        });
//       cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
//       cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
//       cy.get('input[name ="phone"]').type(generateRandomPhoneNumber())
//       cy.get('input[name ="email"]').type(generateRandomEmail(10))
//       cy.contains('button', 'Add New').click()

//       cy.contains('button','Okay').click()

//    

//     //Customer Reporting

//     cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(5).click()


    //Teams

    cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(6).click()
    cy.contains('button', 'Add New').click()
    cy.xpath('//*[@id="demo-multiple-checkbox"]').click()
    cy.wait(3000);
    
    cy.get('ul[role="listbox"] > li').then((listItems) => {
      cy.wrap(listItems.eq(0)).click();
      cy.wrap(listItems.eq(1)).click();
     });
     cy.wait(2000);
     cy.get('input[name ="name"]').click({force:true})
     
     cy.get('input[name ="name"]').type(generateOrganizationName(10),{force:true})
     //cy.get('input[name ="TeamName"]').typetype(generateOrganizationName(10))
     cy.contains('button', 'Next').click({force:true})

      cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
      cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
      cy.get('input[name ="phone"]').type(generateRandomPhoneNumber())
      cy.get('input[name ="email"]').type(generateRandomEmail(10))
      cy.get('input[name="orgAddress"]').type(generateRandomAddress())
      cy.contains('button', 'Add New').click()
      cy.contains('button','Okay').click()
      cy.wait(3000)

      //adding a team with an already existing team member

      // cy.contains('button', 'Add New').click()
      // cy.xpath('//*[@id="demo-multiple-checkbox"]').click()
      // cy.get('ul[role="listbox"] > li').then((listItems) => {
      //   (listItems.eq(0)).click()
      //  });
      // cy.get('input[name ="name"]').type(generateOrganizationName(10),{force:true})
      // cy.contains('button', 'Next').click()
      // cy.get('')
      
   
  })
})
