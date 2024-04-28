///<reference types='cypress'/>

//const cypressConfig = require("../../cypress.config")

describe("Browser actions and Page activities", ()=> {

 it("Browser actions", ()=> {
    cy.visit('http://www.thetestingworld.com/testing')
    cy.wait(1000)
    cy.visit('http://www.thetestingworld.com')
    cy.go('back') //or we can user cy.go(-1)  -1 mean go back
    cy.wait(5000)
    cy.go('forward') // or we can user cy.go(1)  1 mean go forward
    //refreash the page
    cy.reload
    //scroll the page
    //cy.get('.custom > p > .button').scrollIntoView()
    cy.scrollTo(0,500)
    
 })

})