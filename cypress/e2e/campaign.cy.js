import {login} from "../Pageobjects/Login"
import {Campaign} from "../Pageobjects/Campaign"



describe('Campaign', () => {

    it('TC1 Create Campaign-Positive', () => {
        
        const ln= new login()
        ln.handlelogin()
        const createOrgobject= new Campaign()
        createOrgobject.handleDashboardNavigateAndClick()
        createOrgobject.handleCreateOrg()
        createOrgobject.handleCreatePoc()
      })
      
      it('TC2 - Verfiy field level validations', () => {
        const ln= new login()
        ln.handlelogin()
        const createCwithvalidation = new Campaign()
        createCwithvalidation.handleDashboardNavigateAndClick()
        cy.wait(2000)
        createCwithvalidation.handlecreateCamapignwithvalidations()
        createCwithvalidation.handleCreatePoc()
      })
    
      
      it('TC3 - Verify for already existing email address', () => {
        const ln= new login()
        ln.handlelogin()
        const createalreadyexistingC = new Campaign()
        createalreadyexistingC.handleDashboardNavigateAndClick()
        createalreadyexistingC.handlecreateCampaignwithvalidations()
        
      })


      it('TC4 - Verify for already existing organization name', () => {
        const ln= new login()
        ln.handlelogin()
        const createalreadyexistingOrg = new Campaign()
        createalreadyexistingOrg.handleDashboardNavigateAndClick()
        createalreadyexistingOrg.handlealreadyexistingOrg()


      })


     
    })