
export class Locators{

    //REGISTRATION
    registrationSign = ':nth-child(1) > label' 
    userNameField = "form[name='register'] > input[name='fld_username']"
    userEmailField = '[name="fld_email"]'
    passwordField = '[name="fld_password"]'
    passwordConfirmField = '[name="fld_cpassword"]'
    dateOfBirthField = '#datepicker'
    calendarNextMonthButton = '.ui-datepicker-next > .ui-icon' 
    calendarDateNumber = ':nth-child(5) > :nth-child(5) > .ui-state-default'
    phoneNumberField = '[placeholder="Phone"]'
    addressField = '[placeholder="Address"]'
    addressTypeRadioButton = '[value="home"]'
    genderDropdown = '[name="sex"]'
    countryDropdown ='#countryId'
    stateDropdown = '#stateId'
    cityDropdown = '#cityId'
    zipcodeField = '[placeholder="Zip code"]'
    termsCheckbox = '#tab-content1 > form > .btn > [type="checkbox"]'
    signUpRegistrationButton = '#tab-content1 > form > .btn > [type="submit"]'

    //LOGIN
    loginSign = ':nth-child(2) > label'
    loginUserNameField = '[name="_txtUserName"]'
    loginPasswordField = '[name="_txtPassword"]'
    loginKeepMeLoginCheckbox = '#tab-content2 > form > .btn > [type="checkbox"]'
    loginButton = '#tab-content2 > form > .btn > [type="submit"]'

    //LOGOUT
    logoutButton = '.nav > :nth-child(5) > a' 
    
    //FILE & IMAGE UPLOAD
    chooseFileButton1 = "input[name='fld_image1']" //'[style=" float:left;"] > :nth-child(3) > input'
    uploadFileButton = '.col-md-8 > .btn'
    uploadProfileImageButton = '.submit'
    chooseProfileImageBUtton = '#file'
    downloadImageButton = '[href="download.php?filename=Upload_QA_image1.jpeg"]'

    //Messages
    unSuccessRegistrationMessage = '.alert'
    successRegistrationMessage = ""
    successfullFileUploadMessage = '.col-md-5 > .alert'
    successfullImageUploadMessage = '#success'
    fileExistMessage = '#invalid > b'
    selectValidImageMessage = '#error'
    uploadedUnsupportedFileMessage = '#invalid'



}