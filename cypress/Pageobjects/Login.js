export class login
{
   handlelogin(){
    cy.viewport(1200,800)
    cy.visit('https://nexus-dev-admin.exitest.com/login')
    cy.wait(5000)
    cy.get('input[name="email"]').type('arana@ex2india.com')
    cy.get('input[name="password"]').type('coolAdmin05@')
    cy.get('button[type="submit"]').click()
    
    cy.wait(8000)
   }

    }