import { Locators } from "../locators/locators.cy";


const loc = new(Locators)

export class RegisterPage{
    navigateToRegistrationForm(url){
        cy.visit(url, {headers: {"Accept-Encoding": "gzip, deflate"}})
    }

    enterUserName(userName){
        cy.get(loc.userNameField).type(userName)
    }

    enterEmail(email){
        cy.get(loc.userEmailField).type(email)
    }

    enterPassword(password){
        cy.get(loc.passwordField).type(password)
    }

    enterPasswordConfirm(passwordConfirm){
        cy.get(loc.passwordConfirmField).type(passwordConfirm)
    }

    enterDateOfBirth(){
        cy.get(loc.dateOfBirthField).click()
        cy.get(loc.calendarNextMonthButton).click()
        cy.get(loc.calendarDateNumber).click()
    }

    enterPhoneNumber(phone){
        cy.get(loc.phoneNumberField).type(phone)
    }

    enterAddress(address){
        cy.get(loc.addressField).type(address)
    }

    selectAddressType(){
        cy.get(loc.addressTypeRadioButton).check()
    }

    selectGenderMale(){
        cy.get(loc.genderDropdown).select(1)
    }

    selectGenderFemale(){
        cy.get(loc.genderDropdown).select(2)
    }

    selectCountry(country){
        cy.get(loc.countryDropdown).select(country)
    }

    selectState(state){
        cy.get(loc.stateDropdown).select(state)
    }

    selectCity(city){
        cy.get(loc.cityDropdown).select(city)
    }

    enterZipCode(zip){
        cy.get(loc.zipcodeField).type(zip)
    }

    checkTermsBox(){
        cy.get(loc.termsCheckbox).check()
    }

    clcikSignUpRegistrationButton(){
        cy.get(loc.signUpRegistrationButton).click()
    }

    clickRegistrationSign(){
        cy.get(loc.registrationSign).click()
    }

    






   





}