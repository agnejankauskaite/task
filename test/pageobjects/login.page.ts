import { ChainablePromiseElement } from 'webdriverio';
import WebdriverAjax from 'wdio-intercept-service'

import Page from './page.js';

class LoginPage extends Page {

    public get inputUsername () { return $('[data-testid^=\'email-input\']'); }
    public get inputPassword () { return $('[data-testid^=\'password-input\']'); }
    public get submitButton () { return $('[data-testid^=\'submit-button\']'); }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.submitButton.click();
    }

    public open () {
        return super.open('panel');
    }

    public async checkIfConnectionWasSuccessful () {
        browser.setupInterceptor();
        browser.pause(4000);
        browser.expectRequest('GET', '/api/auth/authorize?return_url=https%3A%2F%2Fplus.interactio.com%2Fpanel&action=login', 302);
    }
}

export default new LoginPage();

