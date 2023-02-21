import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class DashboardPage extends Page {
    public get createNewEventButton () { return $('button[class*=\'button primary medium\']'); }

    public async clickCreateNewEventButton () {
        await this.createNewEventButton.click();
    }
}

export default new DashboardPage();
