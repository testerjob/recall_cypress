import { Locators } from "../locators/locators.cy";

const loc = new Locators()

export class ProfilePage{
    clickChooseFileButton(){
        cy.get(loc.chooseFileButton1).selectFile({
            //contents: Cypress.Buffer.from('This text should be in file, just my note. First way.')
            contents: '/Users/alex/Documents/Files_for_cyppress_recall/read_file_from_mac.txt',
            fileName: 'read_file_from_mac.txt',
            mimeType: 'text/plain', ///json or depends on the file name
            lastModified: Date.now()}, {force: true})
        }

    clickChooseProfileImage1Button(){
        cy.get(loc.chooseProfileImageBUtton).selectFile('/Users/alex/Documents/Files_for_cyppress_recall/Upload_QA_image1.jpeg')
    }

    clickChooseProfileImage2Button(){
        cy.get(loc.chooseProfileImageBUtton).selectFile('/Users/alex/Documents/Files_for_cyppress_recall/upload_qa_image2.jpeg')
    }

    uploadUnsuportedFileToImage(){
        cy.get(loc.chooseProfileImageBUtton).selectFile('/Users/alex/Documents/Files_for_cyppress_recall/read_file_from_mac.txt')
    }

    selectedWrongImageMessage(){
        cy.get(loc.selectValidImageMessage).should('contain', 'Please Select A valid Image File')
    }

    uploadedUnsupportedFileFormatMessage(){
        cy.get(loc.uploadedUnsupportedFileMessage).should('contain','***Invalid file Size or Type***')
    }




    

    scrollToUploadFileBUtton(){
        cy.get(loc.uploadFileButton).scrollIntoView()
    }

    scrollToUploadProfileImageBUtton(){
        cy.get(loc.uploadProfileImageButton).scrollIntoView()
    }

    scrollToDownloadImageButton(){
        cy.get(loc.downloadImageButton).scrollIntoView()
    }

    clickUploadProfileButton(){
        cy.get(loc.uploadProfileImageButton).click()
    }

    clickUploadFileButton(){
        cy.get(loc.uploadFileButton).click()
    }

    checkMessageFileUploaded(){
        cy.get(loc.successfullFileUploadMessage).should('contain', 'File updated successfully')                                                  
    }

    checkMessageImageUploade(){
        cy.get(loc.successfullImageUploadMessage).should('contain', 'Upload_QA_image1.jpeg')
    }

    checkMessageImageExist(){
        cy.get(loc.fileExistMessage).should('contain', 'already exists.')
    }



}
