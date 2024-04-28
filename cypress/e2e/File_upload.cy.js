import { Locators } from "../locators/locators.cy"
import { LoginPage } from "../pages/login_page.cy"
import { ProfilePage } from "../pages/profile_page.cy"


const loc = new Locators()
const loginPage = new LoginPage()
const profilePage = new ProfilePage

describe("File uploads", function(){
    it("Upload file from my mac dir", () =>{
        loginPage.loginPositive()
        profilePage.clickChooseFileButton()
        profilePage.clickUploadFileButton()
        profilePage.checkMessageFileUploaded()
    })

    it("Upload profile image", function(){
        loginPage.loginPositive()
        profilePage.clickChooseProfileImage1Button()
        profilePage.clickUploadProfileButton()
        cy.wait(8000)
        profilePage.checkMessageImageExist()
    })

    it("Error to check correct message for uploading the same image", function(){
        loginPage.loginPositive()
        profilePage.clickChooseProfileImage1Button()
        profilePage.clickUploadProfileButton()
        cy.wait(8000)
        profilePage.checkMessageImageExist()
    })

    it('Upload unsupported file', function(){
        loginPage.loginPositive()
        profilePage.uploadUnsuportedFileToImage()
        profilePage.selectedWrongImageMessage()
        profilePage.clickUploadProfileButton()
        cy.wait(7000)
        profilePage.uploadedUnsupportedFileFormatMessage()




    })



})