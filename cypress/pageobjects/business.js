const Page = require('./page');

class BusinessPage extends Page {
    constructor () {
        super()
        this.submitBtn = 'button.welcome-screen-content-button'
    }
    // get welcomeHeader () {
    //    return $('div.welcome-screen-content-title')
    // }
    // get getStartedBtn () {
    //     return $('button.welcome-screen-content-button')
    // }
    // get pageHeader () {
    //     return $('span.business-switcher__business-name')
    // }
    // get transactionsApp () {
    //     return $('//div[text()="Transactions"]')
    // }
    // get checkoutApp () {
    //     return $('//div[text()="Checkout"]')
    // }
    // get connectApp () {
    //     return $('//div[text()="Connect"]')
    // }
    // get productsApp () {
    //     return $('//div[text()="Products"]')
    // }
    // get shopApp () {
    //     return $('//div[text()="Shop"]')
    // }
    // get pointOfSaleApp () {
    //     return $('//div[text()="Point of Sale"]')
    // }
    // get settingsApp () {
    //     return $('//div[text()="Settings"]')
    // }
    // get avatarBtn () {
    //     return $('svg[avatarSlot].icon')
    // }
    // get welcomeBtn () {
    //     return $('div.welcome-screen-content-description + button')
    // }
    // get deleteBtn () {
    //     return $('button[color="warn"]')
    // }
    // get confirmDeleteBtn () {
    //     return $('//button[text()="Delete Business"]')
    // }
    clickGetStarted () {
        cy.get(this.submitBtn).then($el => {
            $el.dispatchEvent(new Event('click'))
        })
        return this
    }
}

module.exports = new BusinessPage()