import { browser } from '@wdio/globals'

export default class Page {
    /**
     * @param path
     */

    open (path) {
        return browser.url(`https://magento.softwaretestingboard.com/${path}`);
    }

    async pause(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
}
