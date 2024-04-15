import { $ } from '@wdio/globals'
import Page from './page.js'

class EcoFriendlyPage extends Page{
    
    get shirtItem(){
        return $('//*[@id="maincontent"]/div[3]/div[1]/div[4]/ol/li[9]/div/a');
    }

    async buttonAddToCart(item){
        await this.item.click();
    }

    async displayItem(){
        await this.shirtItem.click();
    }

    open () {
        return super.open('');
    }
}

export default new EcoFriendlyPage();