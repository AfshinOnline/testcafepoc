import { Selector } from 'testcafe';

export default class LoginPage {
    constructor() {
        this.username = Selector('#username');
        this.password = Selector('#password');
        this.assuranceMessage = Selector('.js-assurance span');
        this.loginBtn = Selector('button[type=submit]');
        this.invalidLoginMsg = Selector('.li-login__invalid section');
    }
}