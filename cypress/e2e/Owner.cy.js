import {login} from "../Pageobjects/Login"
import {Owner} from "../Pageobjects/Owner"

describe('Owner ', () => {

    it('TC1 Create Owner-Positive', () => {
        const ln= new login()
        ln.handlelogin()
        const createOrgobject= new Owner()
        createOrgobject.handleDashboardNavigateAndAddAownerClick()
        createOrgobject.handleCreateOrg()
        createOrgobject.handleCreatePoc()
      })

    it('TC2 - Verfiy field level validations', () => {
        const ln= new login()
        ln.handlelogin()
        const createownerwithvalidation = new Owner()
        createownerwithvalidation.handleDashboardNavigateAndAddAownerClick()
        cy.wait(2000)
        createownerwithvalidation.handlecreateownerwithvalidations()
        createownerwithvalidation.handleCreatePoc()
      })
      
      it('TC3 - Verify for already existing email address', () => {
        const ln= new login()
        ln.handlelogin()
        const createalreadyexistingowner = new Owner()
        createalreadyexistingowner.handleDashboardNavigateAndAddAownerClick()
        createalreadyexistingowner.handlealreadyexistingowner()
      })

      it('TC4 - Verify for already existing organization name', () => {
        const ln= new login()
        ln.handlelogin()
        const createalreadyexistingOrg = new Owner()
        createalreadyexistingOrg.handleDashboardNavigateAndAddAownerClick()
        createalreadyexistingOrg.handlealreadyexistingOrg()
       
      })
})