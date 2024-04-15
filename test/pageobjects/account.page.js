import { $ } from '@wdio/globals'
import Page from './page.js'

class AccountPage extends Page{

    get confirmationMessage(){
        return $('//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]/text()');
        
        //return $('//*[@id="maincontent"]/div[1]/div[2]/div/div/div/text()');
        
        //const element = document.querySelector('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]');
        //const content = window.getComputedStyle(element, '::before').content;
        //console.log(content);
    }

    get logo(){
        return $('/html/body/div[2]/header/div[2]/a/img');
    }

    // async confirmationMessageDisplayed(){
    //     const element = await this.wait(until.elementLocated(this.confirmationMessag), 5000);
    //     await this.executeScript("arguments[0].scrollIntoView(true);", element);
    // }

    async contactInformationDisplayed(){
        return $('//div[@class="box box-information"]/strong/span');
    }
    
    async navigateToHomepage(){
        await this.logo.click();
    }

    open () {
        return super.open('customer/account/');
    }
}

export default new AccountPage();