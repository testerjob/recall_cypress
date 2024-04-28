import { Locators } from "../locators/locators.cy";

const loc = new Locators()
//const globalEmail = `${Cypress.env('EMAIL')}`
const globalPassword = `${Cypress.env('PASSWORD')}`
//const globalPasswordConfirm = `${Cypress.env('PASSWORD_CONFIRM')}`
const globalUserName = `${Cypress.env('USER_NAME')}`


export class LoginPage{
    navigateToRegistrationForm(url){
        cy.visit(url, {headers: {"Accept-Encoding": "gzip, deflate"}})
    }

    clickLoginSign(){
        cy.get(loc.loginSign).click()
    }

    enterLoginUserName(userNameLogin){
        cy.get(loc.loginUserNameField).type(userNameLogin)
    }

    enterLoginPassword(PasswordLogin){
        cy.get(loc.loginPasswordField).type(PasswordLogin)
    }

    checkKeepMeLoginBox(PasswordLogin){
        cy.get(loc.loginKeepMeLoginCheckbox).check()
    }

    clickLoginButton(){
        cy.get(loc.loginButton).click()
    }

    clickLogoutButton(){
        cy.get(loc.logoutButton).click()
    }

    loginPositive(){
        cy.visit('https://www.thetestingworld.com/testings/')
        cy.get(loc.loginSign).click()
        cy.get(loc.loginUserNameField).type(globalUserName)
        cy.get(loc.loginPasswordField).type(globalPassword)
        cy.get(loc.loginButton).click()
    }

    scrollToLogOutButton(){
        cy.get(loc.logoutButton).scrollIntoView()
    }

    

    





}

