///<reference types='cypress'/>

//const cypressConfig = require("../../cypress.config")

describe("Screenshot and focus activities", ()=> {

    it("Focus and blur elements", ()=> {
       cy.visit('http://www.thetestingworld.com/testings')
       cy.get('[name="fld_username"]').focus()
       cy.wait(4000)
       cy.get('[name="fld_username"]').blur()
       
    })
    it("Focus and blur elements", ()=> {
        cy.visit('http://www.thetestingworld.com/testings')
        cy.get('[name="fld_username"]').focus()
        cy.get('[name="fld_username"]').screenshot('username')
        
     })

    it("Screenshot", function() {
        cy.visit('http://www.thetestingworld.com/testings')
        cy.screenshot('RegistrationPages') //name of screenshot is in braced
    



    })
   
   })