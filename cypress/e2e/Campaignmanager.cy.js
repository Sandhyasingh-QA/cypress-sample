import {login} from "../Pageobjects/Login"
import {Campaignmanager} from "../Pageobjects/Campaignmanager"


describe('Campaign Manager', () => {

    it('TC1 Create CM-Positive', () => {
        
        const ln= new login()
        ln.handlelogin()
        const createOrgobject= new Campaignmanager()
        createOrgobject.handleDashboardNavigateAndClick()
        createOrgobject.handleCreateOrg()
        createOrgobject.handleCreatePoc()
      })
      
      it('TC2 - Verfiy field level validations', () => {
        const ln= new login()
        ln.handlelogin()
        const createCmwithvalidation = new Campaignmanager()
        createCmwithvalidation.handleDashboardNavigateAndClick()
        cy.wait(2000)
        createCmwithvalidation.handlecreateCmwithvalidations()
        createCmwithvalidation.handleCreatePoc()
       
      })
    
      
      it('TC3 - Verify for already existing email address', () => {
        const ln= new login()
        ln.handlelogin()
        const createalreadyexistingCm = new Campaignmanager()
        createalreadyexistingCm.handleDashboardNavigateAndClick()
        createalreadyexistingCm.handlealreadyexistingCm()
      })


      it('TC4 - Verify for already existing organization name', () => {
        const ln= new login()
        ln.handlelogin()
        const createalreadyexistingOrg = new Campaignmanager()
        createalreadyexistingOrg.handleDashboardNavigateAndClick()
        createalreadyexistingOrg.handlealreadyexistingOrg()

      })
    })
