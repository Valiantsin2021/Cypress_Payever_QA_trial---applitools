const Page = require('./page')
const {
  generateEmail,
  generatePassword,
  generateName,
  generatePhoneNumber
} = require('../utils/helper')
const BusinessPage = require('./business')
const { fashion } = require('../utils/constants')
class LoginFashion extends Page {
  constructor() {
    super()
    this.firstNameInput = 'input[formcontrolname="firstName"]'
    this.lastNameInput = 'input[formcontrolname="lastName"]'
    this.emailInput = 'input[type="email"]'
    this.passInput = 'input[formcontrolname="password"]'
    this.confirmPassIinput = 'input[formcontrolname="confirmPass"]'
    this.submitBtn = 'button[type="submit"]'
    this.companyNameInput = 'input[formcontrolname="name"]'
    this.phoneInput = 'input[formcontrolname="phoneNumber"]'
    this.menuDropdownList = 'span.dropdown-arrow'
    this.companyValue = ' Solo Entrepreneur '
    this.companyStatusValue = ' Growing an existing business '
    this.revenueValue = ' 50.000 EUR to 250.000 EUR '
    this.branchDropdownBtn = 'div.dropdown-arrow'
    this.branchValue = ' Fashion '
    this.phonePrefix = ' +34 Spain '
    this.submitBtn = 'button[type="submit"]'
    this.registrationHeader = 'div.registration-header-title'
  }
  open() {
    return super.open(fashion)
  }
  createAccount(name, lastname, email, pass) {
    cy.get(this.firstNameInput).type(name, { force: true })
    cy.get(this.lastNameInput).type(lastname, { force: true })
    cy.get(this.emailInput).type(email, { force: true })
    cy.get(this.passInput).type(pass, { force: true })
    cy.get(this.confirmPassIinput).type(pass, { force: true })
    cy.get(this.submitBtn).click({ force: true })
    return this
  }
  async fillBusinessInfo(companyName, phone) {
    cy.get(this.companyNameInput).type(companyName, { force: true })
    cy.get(this.phoneInput).type(phone, { force: true })
    cy.get(this.menuDropdownList).eq(0).click({ force: true })
    cy.contains(this.companyValue).click({ force: true })
    cy.get(this.menuDropdownList).eq(1).click({ force: true })
    cy.contains(this.companyStatusValue).click({ force: true })
    cy.get(this.menuDropdownList).eq(2).click({ force: true })
    cy.contains(this.revenueValue).click({ force: true })
    cy.get(this.branchDropdownBtn).click({ force: true })
    cy.contains(this.branchValue).click({ force: true })
    cy.get(this.menuDropdownList).eq(3).click({ force: true })
    cy.contains(this.phonePrefix).click({ force: true })
    cy.wait(5000)
    cy.get(this.submitBtn).click({ force: true })
    return this
  }
  // async logout () {
  //     BusinessPage.avatarBtn.click()
  //     browser.pause(2000)
  //     BusinessPage.welcomeBtn.waitAndClick()
  //     BusinessPage.deleteBtn.waitForDisplayed()
  //     BusinessPage.deleteBtn.click()
  //     BusinessPage.confirmDeleteBtn.waitAndClick()
  // }
}

module.exports = new LoginFashion()
