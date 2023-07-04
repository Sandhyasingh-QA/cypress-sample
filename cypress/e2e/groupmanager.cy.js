import {login} from "../Pageobjects/Login"
import {Groupmanager} from "../Pageobjects/Groupmanager"


describe('Group  Manager', () => {

    it('TC1 Create GM-Positive', () => {
        const ln= new login()
        ln.handlelogin()
        cy.wait(8000)
        const createOrgobject= new Groupmanager()
        createOrgobject.handleDashboardNavigateAndClick()
        createOrgobject.handleCreateOrg()
        createOrgobject.handleCreatePoc()
      })
      
      it('TC2 - Verfiy field level validations', () => {
        const ln= new login()
        ln.handlelogin()
        const createGmwithvalidation = new Groupmanager()
        createGmwithvalidation.handleDashboardNavigateAndClick()
        cy.wait(2000)
        createGmwithvalidation.handlecreateGmwithvalidations()
        createGmwithvalidation.handleCreatePoc()
      })
      
      it('TC3 - Verify for already existing email address', () => {
        const ln= new login()
        ln.handlelogin()
        const createalreadyexistingGm = new Groupmanager()
        createalreadyexistingGm.handleDashboardNavigateAndClick()
        createalreadyexistingGm.handlealreadyexistingGm()
      })

      it('TC4 - Verify for already existing organization name', () => {
        const ln= new login()
        ln.handlelogin()
        const createalreadyexistingOrg = new Groupmanager()
        createalreadyexistingOrg.handleDashboardNavigateAndClick()
        createalreadyexistingOrg.handlealreadyexistingOrg()
      })

    })
