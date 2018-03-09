import { Selector } from 'testcafe';

export default class InsightsPage {
    constructor() {
        this.insightsPageClass = Selector('.div__insights_itemsContainer');
    }
}