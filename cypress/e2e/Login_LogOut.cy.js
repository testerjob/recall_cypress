///<reference types='cypress'/>

import { Locators } from "../locators/locators.cy"
import { LoginPage } from "../pages/login_page.cy"
//import { RegisterPage } from "../pages/registartion_page.cy"

const loc = new Locators()
const loginPage = new LoginPage()
//const registerPage = new RegisterPage()

const globalEmail = `${Cypress.env('EMAIL')}`
const globalPassword = `${Cypress.env('PASSWORD')}`
const globalUserName =`${Cypress.env('USER_NAME')}`

let url = 'https://www.thetestingworld.com/testings/'


beforeEach(()=>{
    loginPage.navigateToRegistrationForm(url)
})

describe("Positive login with valid credantials", ()=> {

    it("Valid email and valid password", function() {
        loginPage.clickLoginSign()
        loginPage.enterLoginUserName(globalUserName)
        loginPage.enterLoginPassword(globalPassword)
        loginPage.clickLoginButton()
        cy.get('legend').contains('My Profile').should('be.visible')
        cy.get('.nav > :nth-child(6) > a').contains('a', ' Welcome Mr. alex_cypress').should('be.visible').screenshot('Successfull log IN')
    })

    it("Logout aftre login", () => {
        cy.visit('https://www.thetestingworld.com/testings/dashboard.php')
        loginPage.clickLoginSign()
        loginPage.enterLoginUserName(globalUserName)
        loginPage.enterLoginPassword(globalPassword)
        loginPage.clickLoginButton()
        loginPage.clickLogoutButton()
        cy.get(loc.registrationSign).click().screenshot('Successfull log Out')
    })
   
})