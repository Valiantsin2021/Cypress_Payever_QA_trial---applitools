const { santander } = require('../utils/constants')
const Page = require('./page')
const {
  generateEmail,
  generatePassword,
  generateName,
  generatePhoneNumber
} = require('../utils/helper')
const BusinessPage = require('./business')
class LoginSantander extends Page {
  get fashionHeader() {
    return $('div.registration-header-title')
  }
  get firstNameInput() {
    return $('input[formcontrolname="firstName"]')
  }
  get lastNameInput() {
    return $('input[formcontrolname="lastName"]')
  }
  get emailInput() {
    return $('input[type="email"]')
  }
  get passInput() {
    return $('input[formcontrolname="password"]')
  }
  get confirmPassInput() {
    return $('input[formcontrolname="confirmPass"]')
  }
  get signUpBtn() {
    return $('button[type="submit"]')
  }
  get getStartedBtn() {
    return $('button[type="submit"]')
  }
  get businessStatusText() {
    return $('//span[text()=" Registered Business "]')
  }
  get dropdownBtns() {
    return $$('span.dropdown-arrow')
  }
  get industryDropdownBtn() {
    return $('div.dropdown-arrow')
  }
  get businessStatusChoice() {
    return $('//span[text()=" Solo Entrepreneur "]')
  }
  get statusChoice() {
    return $('//span[text()=" Growing an existing business "]')
  }
  get salesChoice() {
    return $('//span[text()=" 50.000 EUR to 250.000 EUR "]')
  }
  get industryChoice() {
    return $('//span[text()=" Fashion "]')
  }
  get phoneChoice() {
    return $('//span[text()=" +34 Spain "]')
  }
  get comanyNameInput() {
    return $('input.ng-tns-c134-8')
  }
  get phoneInput() {
    return $('input[pephoneinputfilter]')
  }
  get vatInput() {
    return $('input.ng-tns-c134-14')
  }
  async open() {
    await super.open(santander)
  }
  async createAccount() {
    await browser.pause(1000)
    await browser.keys('Tab')
    await this.firstNameInput.waitAndSetValue(generateName())
    await browser.keys('Tab')
    await this.lastNameInput.waitAndSetValue(generateName())
    await browser.keys('Tab')
    await this.emailInput.waitAndSetValue(generateEmail())
    await browser.keys('Tab')
    let pass = generatePassword()
    await this.passInput.waitAndSetValue(pass)
    await browser.keys('Tab')
    await this.confirmPassInput.waitAndSetValue(pass)
    await this.signUpBtn.waitAndClick()
  }
  async fillBusinessInfo() {
    await browser.keys('Tab')
    await this.comanyNameInput.waitAndSetValue(generateName())
    await browser.keys('Tab')
    await browser.keys('Tab')
    await this.phoneInput.waitAndSetValue(generatePhoneNumber())
    await browser.keys('Tab')
    await this.vatInput.waitAndSetValue(generatePhoneNumber())
    await this.dropdownBtns[0].waitAndClick()
    await this.businessStatusChoice.waitAndClick()
    await this.dropdownBtns[1].waitAndClick()
    await this.statusChoice.waitAndClick()
    await this.dropdownBtns[2].waitAndClick()
    await this.salesChoice.waitAndClick()
    await this.industryDropdownBtn.waitAndClick()
    await this.industryChoice.waitAndClick()
    await this.dropdownBtns[3].waitAndClick()
    await this.phoneChoice.waitAndClick()
    await browser.pause(2000)
    await this.getStartedBtn.waitAndClick()
  }
  async logout() {
    await BusinessPage.avatarBtn.click()
    await browser.pause(2000)
    await BusinessPage.welcomeBtn.waitAndClick()
    await BusinessPage.deleteBtn.waitForDisplayed()
    await BusinessPage.deleteBtn.click()
    await BusinessPage.confirmDeleteBtn.waitAndClick()
  }
}

module.exports = new LoginSantander()
