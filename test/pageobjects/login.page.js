import { $ } from '@wdio/globals'
import Page from './page.js'

class LoginPage extends Page {

    get inputFirstName () {
        return $('#firstname');
    }

    get inputLastName () {
        return $('#lastname');
    }

    get inputEmail () {
        return $('#email_address');
    }

    get inputPassword () {
        return $('#password');
    }

    get inputConfirmPassword () {
        return $('#password-confirmation');
    }

    get buttonSubmit () {
        return $('button[class="action submit primary"]');
    }

    get confirmationMessage(){
        return $('//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]/text()');
    }

    async generateRandomEmail() {
        const randomNumber = Math.floor(Math.random() * 1000000);
        return `testuser${randomNumber}@example.com`;
    }

    async login() {
        await this.inputFirstName.setValue('Testing');
        await this.inputLastName.setValue('Test');
        const email = await this.generateRandomEmail();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue('testing/123456789/');
        await this.inputConfirmPassword.setValue('testing/123456789/');
        await this.buttonSubmit.click();
    }

    open() {
        return super.open('customer/account/create/');
    }
}

export default new LoginPage();
