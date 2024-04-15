import { $ } from '@wdio/globals'
import Page from './page.js'

class CheckoutPage extends Page{
    
    get inputCompany(){
        return $('/html/body/div[2]/main/div[2]/div/div[3]/div[4]/ol/li[1]/div[2]/form/div/div[3]/div/input');
    }

    get inputStreetAddress(){
        return $('/html/body/div[2]/main/div[2]/div/div[3]/div[4]/ol/li[1]/div[2]/form/div/fieldset/div/div[1]/div/input');
    }

    get inputCity(){
        return $('/html/body/div[2]/main/div[2]/div/div[3]/div[4]/ol/li[1]/div[2]/form/div/div[4]/div/input');
    }

    get inputState(){
        return $('/html/body/div[2]/main/div[2]/div/div[3]/div[4]/ol/li[1]/div[2]/form/div/div[5]/div/select/option[5]');
    }

    get inputZip(){
        return $('/html/body/div[2]/main/div[2]/div/div[3]/div[4]/ol/li[1]/div[2]/form/div/div[7]/div/input');
    }

    get inputCountry(){
        return $('/html/body/div[2]/main/div[2]/div/div[3]/div[4]/ol/li[1]/div[2]/form/div/div[8]/div/select/option[236]');
    }

    get inputPhoneNumber(){
        return $('/html/body/div[2]/main/div[2]/div/div[3]/div[4]/ol/li[1]/div[2]/form/div/div[9]/div/input');
    }

    get radioShippingMethod(){
        return $('//*[@id="checkout-shipping-method-load"]/table/tbody/tr[1]/td[1]/input');
    }

    get buttonNext(){
        return $('//*[@id="shipping-method-buttons-container"]/div/button');
    }

    get buttonPlaceOrder(){
        return $('//*[@id="checkout-payment-method-load"]/div/div/div[2]/div[2]/div[4]/div/button');
    }

    get confirmationMessage(){
        return $('//h1[@class="page-title"]/span');
    }

    async insertInformation(){
        await this.inputCompany.waitForDisplayed();
        await this.inputCompany.setValue('Testing');
        await this.inputStreetAddress.setValue('Some Address 12');
        await this.inputCity.setValue('Phoenix');
        await this.inputState.click();
        await this.inputZip.setValue('85004');
        await this.inputCountry.click();
        await this.inputPhoneNumber.setValue('003456789');
        await this.radioShippingMethod.click();
        await this.buttonNext.click();
    }

    async placeOrder(){
        await this.buttonPlaceOrder.waitForDisplayed();
        await this.buttonPlaceOrder.click();
    }

    open () {
        return super.open('');
    }
}

export default new CheckoutPage();