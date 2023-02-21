import { ChainablePromiseElement } from 'webdriverio';

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
}

export default new LoginPage();
