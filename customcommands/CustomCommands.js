import { Selector, t } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import ApplicationPage from '../pages/ApplicationPage';

const loginPage = new LoginPage();
const applicationPage = new ApplicationPage();


export async function executeDropdown(selector, optionSelector, t) {
    await t
        .click(selector)
        .click(optionSelector);
}

export async function successfulLogin(usernameSelector, username, passwordSelector, password, t) {
    await t
        .typeText(usernameSelector, username)
        .typeText(passwordSelector, password);

    await t.expect(loginPage.assuranceMessage.innerText).eql('nathan testing regressionqa');
    await t.click(loginPage.loginBtn);

    await t.expect(applicationPage.logoutCount.exists);
}

export async function logout(t) {
    await t.click(applicationPage.logoutCount);
}