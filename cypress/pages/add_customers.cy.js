import { Locators } from "../locators/locators.cy";

const loc = new Locators()

export class AddCustomer{
    clickMyAccountDropDown(){
        cy.get(loc.myAccountDropDown).click()
    }
    clickAddCustomerDropDownOption(){
        cy.get(loc.addCustomerDropDownOption).click()
    }





}