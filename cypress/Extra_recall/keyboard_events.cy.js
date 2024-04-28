///<reference types='cypress'/>

describe("Key board events", ()=> {

    it("Mouse clicks", ()=> {
       cy.visit('http://www.thetestingworld.com/testings')
       cy.get('[name="fld_username"]').type('MyName123')
       //navigate and type in front of the text
       cy.get('[name="fld_username"]').type('{home}')
       cy.wait(4000)
       cy.get('[name="fld_username"]').type('Testing')
       //navigate and type after typped the text
       cy.get('[name="fld_username"]').type('{end}')
       cy.wait(4000)
       cy.get('[name="fld_username"]').type('Testing')
       //we can combine keyevents
       cy.get('[name="fld_username"]').type('Testing{backSpace}{enter}')
       cy.wait(3000)
       //or we can use single action as backspace to remove one letter
       cy.get('[name="fld_username"]').type('{backSpace}')
       //click Enter
       cy.get('[name="fld_username"]').type('{enter}]')

    })
   
   })