import {$,expect} from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import AccountPage from '../pageobjects/account.page.js'
import HomePage from '../pageobjects/home.page.js'
import EcoFriendlyPage from '../pageobjects/eco.page.js'
import ProductsPage from '../pageobjects/products.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('Purchasing a product', () => {
    it('and creating an account using valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login();

        await expect(AccountPage.contactInformationDisplayed()).toBeExisting();
        await expect(AccountPage.contactInformationDisplayed()).toBeDisplayed();
        await AccountPage.navigateToHomepage();

        await HomePage.shopEcoFriendly();

        await EcoFriendlyPage.displayItem();

        await ProductsPage.addItemToCart();
        await browser.pause(4000);
        await ProductsPage.openCart();

        await browser.pause(4000);
        await CheckoutPage.insertInformation();
        await browser.pause(4000);
        await CheckoutPage.placeOrder();

        await expect(CheckoutPage.confirmationMessage).toBeExisting();
        await expect(CheckoutPage.confirmationMessage).toBeDisplayed();
    })
})