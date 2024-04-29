import { Locators } from "../locators/locators.cy";
import { LoginPage } from "../pages/login_page.cy";
import { AddCustomer } from "../pages/add_customers.cy";

const loc = new Locators()
const loginPage = new LoginPage()
const addCustomer = new AddCustomer()
 
describe("Add new customer", function(){
    it("New customer from fake", () =>{
        loginPage.loginPositive()
        addCustomer.clickMyAccountDropDown()
        addCustomer.clickAddCustomerDropDownOption()
        cy.get(loc.addCustomerPageTitle).should('contain', 'Add Customer !')
        
    })
})