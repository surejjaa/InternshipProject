import { $ } from '@wdio/globals'
import Page from './page.js'

class ProductsPage extends Page{
    
    get size(){
        return $('#option-label-size-143-item-167');
    }

    get color(){
        return $('#option-label-color-93-item-57');
    }

    get buttonAddToCart(){
        return $('#product-addtocart-button');
    }

    get buttonCart(){
        return $('//div[@class="minicart-wrapper"]/a');
    }

    get buttonProceedToCheckout(){
        return $('#top-cart-btn-checkout');
    }

    async addItemToCart(){
        await this.size.click();
        await this.color.click();
        await this.buttonAddToCart.click(); 
    }

    async openCart(){
        await this.buttonCart.scrollIntoView();
        await this.buttonCart.click();
        await this.buttonProceedToCheckout.waitForDisplayed();
        await this.buttonProceedToCheckout.click();
    }

    open () {
        return super.open('');
    }
}

export default new ProductsPage();