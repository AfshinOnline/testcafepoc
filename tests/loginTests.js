import LoginPage from '../pages/LoginPage';
import ApplicationPage from '../pages/ApplicationPage';
import { logout } from '../customcommands/CustomCommands';
const config = require('../config');


const loginpage = new LoginPage();
const applicationpage = new ApplicationPage();

fixture `Login Tests`
    .page `${config.development.url}`;


test('Valid Login Test', async t => {
    await t
        .maximizeWindow()
        .typeText(loginpage.username, 'user.user1')
        .typeText(loginpage.password, '#####');

    await t.expect(loginpage.assuranceMessage.innerText).eql('nathan testing regressionqa');
    await t.click(loginpage.loginBtn);

    await t.expect(applicationpage.logoutCount.exists);
    await new logout(await t);
});

test.skip('Invalid Login Test', async t => {
    await t
        .maximizeWindow()
        .typeText(loginpage.username, 'user.user1')
        .typeText(loginpage.password, '######');

    await t.expect(loginpage.assuranceMessage.innerText).eql('nathan testing regressionqa');
    await t.click(loginpage.loginBtn);
});
