import { Selector } from 'testcafe';

export default class ApplicationPage {
    constructor() {
        this.documents = Selector('.newnav [href="https\:\/\/documentportal-dev\.kurtosysweb\.com\/regressionqa\/en\/gb\/documents\/"]');
        this.insights = Selector('.newnav [href="https\:\/\/documentportal-dev\.kurtosysweb\.com\/regressionqa\/en\/gb\/insights\/"]');
        this.profile = Selector('.newnav [href="https\:\/\/documentportal-dev\.kurtosysweb\.com\/regressionqa\/en\/gb\/profile\/"]');
        this.customMenu = Selector('.newnav [href="\#"]');
        this.contactUs = Selector('[href="https\:\/\/documentportal-dev\.kurtosysweb\.com\/regressionqa\/en\/gb\/contact\/"]');
        this.logoutCount = Selector('.newnav [href="https\:\/\/documentportal-dev\.kurtosysweb\.com\/regressionqa\/en\/gb\/logout\/"]');
    }
}