describe("Read file", function(){
    it("Read text file from project", ()=> {
        cy.readFile('cypress/fixtures/text_to_read.txt')
            .should('contain', 'Lorem Ipsum is simply dummy text')
    })

    it("Read a file from my mac", function(){
        cy.readFile('cypress/fixtures/read_file_from_mac.txt')
            .should('contain', 'It is a long established fact that a reader')
        })

})