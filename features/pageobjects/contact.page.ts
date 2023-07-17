import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get label() { return $('//html/body/div/p[1]') }

    public async contactLabel() {
        await this.label.getText();
    }
}

export default new ContactPage();
