import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class EventPage extends Page {
    public get eventNameInput () { return $('input[name^=\'event-name\']'); }
    public get eventAdressInput () { return $('[name^=\'address\']'); }
    public get adressDropdownOption () { return $('//*/div[1]/span[2]/span') }
    public get testEventCheckbox () { return $('//*//div[1]/*/label/div') }
    public get publishButton () { return $('button=Publish') }
    public get publishEventButton () { return $('button=Publish event') }

    public async fillInreateNewEventForm (name: string, adress: string) {
        await this.eventNameInput.setValue(name)
        await this.eventAdressInput.setValue(adress)
        await this.adressDropdownOption.click()
        await this.testEventCheckbox.click()
    }

    public async clickPublishButton () {
        await this.publishButton.click()
    }

    public async clickPublishEventButton () {
        await this.publishEventButton.click()
    }
}

export default new EventPage();
