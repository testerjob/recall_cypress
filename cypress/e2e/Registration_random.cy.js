///<reference types='cypress'/>
import { faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); 
const randomEmail = faker.internet.email(); 
const randomZipCode = faker.location.zipCode()
const randomPhone = faker.phone.number()
const randomAddress = faker.location.streetAddress(false)
const randomPassword = faker.internet.password({ length: 8 })


import { Locators } from "../locators/locators.cy"
import { RegisterPage } from "../pages/registartion_page.cy"

const registerPage = new RegisterPage()
const loc = new Locators()

let url = 'https://www.thetestingworld.com/testings/'

let country = "United States"
let state = "California"
let city = "Daly City"


beforeEach(()=>{
    registerPage.navigateToRegistrationForm(url)
})

describe("Registration-Positive", ()=> {

    it("Fill out registartion form", ()=> {
        registerPage.enterUserName(randomName)
        registerPage.enterEmail(randomEmail)
        registerPage.enterPassword(randomPassword)
        registerPage.enterPasswordConfirm(randomPassword)
        registerPage.enterDateOfBirth()
        registerPage.enterPhoneNumber(randomPhone)
        registerPage.enterAddress(randomAddress)
        registerPage.selectAddressType()
        registerPage.selectGenderMale()
        registerPage.selectCountry(country)
        registerPage.selectState(state)
        registerPage.selectCity(city)
        registerPage.enterZipCode(randomZipCode)
        registerPage.checkTermsBox()
       
    })
   
   })