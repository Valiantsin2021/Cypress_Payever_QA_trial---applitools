const LoginFashion = require('../pageobjects/login.fashion')
const BusinessPage = require('../pageobjects/business')
const {
  generateEmail,
  generatePassword,
  generateName,
  generatePhoneNumber
} = require('../utils/helper')
const { registrationHeader, submitBtnText } = require('../utils/constants')
const name = generateName()
const lastname = generateName(8)
const companyName = generateName(7)
const email = generateEmail()
const pass = generatePassword()
const phone = generatePhoneNumber()

describe(`Should open ${Cypress.env('baseUrl')} and signup Payever app`, () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Payever', // The name of the app under test
      testName: Cypress.currentTest.title // The name of the test case
    })
  })
  it('Check create account modal is displayed', () => {
    LoginFashion.open()
    // cy.visit('https://commerceos.staging.devpayever.com/registration/santander')
    cy.get(LoginFashion.registrationHeader).should(
      'have.text',
      registrationHeader
    )
    cy.eyesCheckWindow({
      tag: 'Login page',
      target: 'window',
      fully: true
    })
    cy.percySnapshot('Login page')
  })
  it('Create account with valid credentials', () => {
    LoginFashion.createAccount(name, lastname, email, pass)
    cy.get(LoginFashion.submitBtn).should('have.text', submitBtnText)
    cy.eyesCheckWindow({
      tag: 'Second page',
      target: 'window',
      fully: true,
      matchLevel: 'Layout'
    })
    cy.percySnapshot('Second page')
  })
  it('Fill out the business information', () => {
    LoginFashion.fillBusinessInfo(companyName, phone)
    cy.on('uncaught:exception', () => false)
    BusinessPage.clickGetStarted()
    cy.get('div.welcome-screen-content-title').should(
      'have.text',
      'Welcome to CommerceOS'
    )
  })
  afterEach(() => {
    cy.eyesClose()
  })
})
