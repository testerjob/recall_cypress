///<reference types='cypress'/>

import { Locators } from "../locators/locators.cy"
import { RegisterPage } from "../pages/registartion_page.cy"

const registerPage = new RegisterPage()
const loc = new Locators()

let url = 'https://www.thetestingworld.com/testings/'
let phoneNumber = "4153455577"
let address = "33 My Way Drive"
let country = "United States"
let state = "California"
let city = "Daly City"
let zipcode = "94015"

const globalEmail = `${Cypress.env('EMAIL')}`
const globalPassword = `${Cypress.env('PASSWORD')}`
const globalPasswordConfirm = `${Cypress.env('PASSWORD_CONFIRM')}`
const globalUserName = `${Cypress.env('USER_NAME')}`


beforeEach(()=>{
    registerPage.navigateToRegistrationForm(url)
})

describe("Registration-Positive", ()=> { //, function(){}

    it("Fill out registartion form", ()=> {
        registerPage.clickRegistrationSign()
        registerPage.enterUserName(globalUserName)
        registerPage.enterEmail(globalEmail)
        registerPage.enterPassword(globalPassword)
        registerPage.enterPasswordConfirm(globalPasswordConfirm)
        registerPage.enterDateOfBirth()
        registerPage.enterPhoneNumber(phoneNumber)
        registerPage.enterAddress(address)
        registerPage.selectAddressType()
        registerPage.selectGenderMale()
        registerPage.selectCountry(country)
        registerPage.selectState(state)
        registerPage.selectCity(city)
        registerPage.enterZipCode(zipcode)
        registerPage.checkTermsBox()
        registerPage.clcikSignUpRegistrationButton()
        //cy.get(loc.successRegistrationMessage).should('exist').screenshot("Successfull_registration_valid_email")

    })
   
   })