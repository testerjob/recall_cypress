///<reference types='cypress'/>

describe("HOw to use xpath", ()=> {

    it("Using Xpath", ()=> {
       cy.visit('http://www.thetestingworld.com/testings')
       cy.xpath("//input[@placeholder='myusername']").type("user_name")
       cy.xpath("//input[@type='email']").type('cypress@gmail.com')
       cy.xpath("//input[@placeholder='Password']").type("1234567")
       cy.xpath("//input[@placeholder='Confirm password']").type("1234567")
       cy.xpath("//input[@id='datepicker']").click()
       cy.xpath('//tbody/tr[2]/td[3]/a').click()
       cy.xpath("//input[@name='phone']").type("415-123-2323")
       cy.xpath("//input[@ placeholder ='Address']").type(" 123 Address Long Way")
       cy.xpath("//input[@value='office']").check('office')
       cy.xpath("//input[@value='home']").check('home')
       cy.xpath("//input[@value='home']").uncheck('home')

       
    })
   
   })

   