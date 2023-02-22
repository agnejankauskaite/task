import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class DashboardPage extends Page {
    public get createNewEventButton () { return $('button[data-test^=\'btn-create-event\']'); }

    public async clickCreateNewEventButton () {
        await this.createNewEventButton.click();
    }
}

export default new DashboardPage();
