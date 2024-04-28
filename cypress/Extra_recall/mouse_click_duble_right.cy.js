///<reference types='cypress'/>

describe("Mouse dubble, right clicks", ()=> {

    it("Mouse clicks", ()=> {
       cy.visit('http://www.thetestingworld.com')
       cy.get("div#ja-search a").click()
       cy.wait(3000)
       cy.get(".ui-sortable.wdform_column > div:nth-of-type(1) strong").dblclick()
       cy.get(".ui-sortable.wdform_column > div:nth-of-type(1) strong").screenshot("DBclcik")
       cy.go('back')
       cy.get("div#ja-search a").rightclick()
       cy.get("div#ja-search a").screenshot("RIGHTclick")
    })
   
   })