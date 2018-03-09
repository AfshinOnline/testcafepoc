import { Selector } from 'testcafe';

export default class ContactUsPage {
    constructor() {
        this.contactTitle = Selector('.li-pageintro__title');
        this.contactFormDefinition = Selector('.li-post.single-insights p');
        this.contactSubject = Selector('input[name=contact_us_subject]');
        this.contactMessage = Selector('textarea[name=contact_us_msg]');
        this.contactSubmitBtn = Selector('#contact-submit');
    }
}