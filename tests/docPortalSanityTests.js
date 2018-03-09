import { Selector, t } from 'testcafe';
import ApplicationPage from '../pages/ApplicationPage';
import DocumentsPage from '../pages/DocumentsPage';
import InsightsPage from '../pages/InsightsPage';
import ProfilePage from '../pages/ProfilePage';
import ContactUsPage from '../pages/ContactUsPage';
import LoginPage from '../pages/LoginPage';
import { successfulLogin } from '../customcommands/CustomCommands';
import { logout } from '../customcommands/CustomCommands';
const config = require('../config');


const loginPage = new LoginPage();
const applicationPage = new ApplicationPage();
const insightsPage = new InsightsPage();
const profilePage = new ProfilePage();
const contactUsPage = new ContactUsPage();
const documentsPage = new DocumentsPage();


fixture `Document Portal Sanity Checks`
    .page `${config.development.url}`
    .beforeEach(async t => {
        await t.maximizeWindow();
        await new successfulLogin(await loginPage.username, 'nathan.regressionqa', loginPage.password, 'Me@my123#', t);
    })
    .afterEach(async t => {
        await new logout(await t);
    });


test('Menu Item Click-throughs', async t => {
    await t
        .click(applicationPage.insights)
        .expect(insightsPage.insightsPageClass).ok();

    await t
        .click(applicationPage.profile)
        .expect(profilePage.profileDetailsHeader.innerText).eql('Details');

    await t
        .click(applicationPage.contactUs)
        .expect(contactUsPage.contactTitle.innerText).eql('Testing Contact Us');

    await t
        .click(applicationPage.documents)
        .expect(documentsPage.documentsSimpleSearch.innerText).eql('Simple Search');

    await t
        .click(documentsPage.documentsClearQueryBtn)
        .expect(documentsPage.documentsTableRows.count).eql(20);
        
    await t
        .click(documentsPage.simpleSearchTitle)
        .typeText(documentsPage.documentsSimpleSearchTextBox, 'Imti')
        .click(documentsPage.documentaSearchIcon);
        
    await t.expect(documentsPage.documentsTableRows.count).eql(12);
});

