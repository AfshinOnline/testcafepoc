import { Selector } from 'testcafe';

export default class ProfilePage {
    constructor() {
        this.profileDetailsHeader = Selector('h3[class=li-profile__title]').withExactText('Details');
        this.profileEmailNotificationsToggle = Selector('#notifications label');
        this.profileEmailNotificationsToggleText = Selector('#notificatioLabel');
        this.profileEntitlementGroupsHeader = Selector('h3[class=li-profile__title]').withExactText('Entitlement Groups');
        this.profileEmailFrequencyHeader = Selector('h3[class=li-profile__title]').withExactText('Email Frequency');
        this.profileEmailFrequencySelector = Selector('select[name=email-frequency]');
        this.profileWeekly = Selector('option[value=40378975]');
        this.profileDaily = Selector('option[value=40378976]');
        this.profileImmediately = Selector('option[value=40379228]');
    }
}