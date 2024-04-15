import { $ } from '@wdio/globals'
import Page from './page.js'

class HomePage extends Page{
    
    get buttonEcoFriendly(){
        return $('//div[@class="block-promo-wrapper block-promo-hp"]/a[5]');
    }

    async shopEcoFriendly(){
        await this.buttonEcoFriendly.click();
    }

    open () {
        return super.open('');
    }
}

export default new HomePage();