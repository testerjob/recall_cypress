///<reference types='cypress'/>

const cypressConfig = require("../../../cypress.config")

describe("Login Smoke tests", ()=> {

 it("Login with valid credantial", ()=> {
    cy.visit('/testings')
    cy.get('[name="fld_username"]').type('MyName123')
    cy.get('[name="fld_email"]').type('user_user')
    cy.get('[name="fld_password"]').type('12345')
 })

 it("Registration", function(){
    cy.visit('/testings')
    cy.get('[name="fld_username"]').type('MyName123')
    cy.get('#tab-content1 > form > .btn > [type="submit"]').click()

 })

 it("Clicking check box", function(){
    cy.visit('/testings')
    cy.get('#tab-content1 > form > .btn > [type="checkbox"]').click()

 })

 it("Selected value from drop down", function() {
    //retry for only this test
    Cypress.config('retries', 4)
    cy.visit('/testings')
    cy.get('[name="sex"]').select(2)
    cy.get('#countryId').select(5) //select("India")


 })
    
})