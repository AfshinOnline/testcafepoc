import { Selector } from 'testcafe';

export default class DocumentsPage {
    constructor() {
        this.documentsTab = Selector('#documentsLink');
        this.documentsResetQueryBtn = Selector('.li-ftable__reset.resetQ.resetQueryOpen');
        this.documentsClearQueryBtn = Selector('.li-ftable__reset.clearQ');
        this.documentsSaveAsBtn = Selector('.li-ftable__reset.saveAsButtonSaveAs');
        this.documentsSaveBtn = Selector('.li-ftable__reset.saveButtonSave');
        this.documentsCheckAll = Selector('#check-all label');
        this.documentsDownloadExcel = Selector('.li-ftable__xls');
        this.documentsDownloadSelected = Selector('.li-ftable__down');
        this.documentsListView = Selector('.li-ftable__row.js-toggleRow');
        this.documentsGridView = Selector('.li-ftable__tile.js-toggleTile');
        this.documentsShowAllDates = Selector('.js-filtersTrigger.dataTriggerName');
        this.documentsSimpleSearch = Selector('.switchButtonName');
        this.documentsSimpleSearchTextBox = Selector('.searchBoxInPut.searchBoxOnChange');
        this.documentsAdvancedFilters = Selector('.js-filtersTrigger.advancedFilters');
        this.documentsSortBy = Selector('.js-addClass.li-ftable__add');
        this.documentsGearIcon = Selector('.gearIcon');
        this.documentsLoadMore = Selector('.buttonLoadMore');
        this.simpleSearchTitle = Selector('.li-ftable__trigger.advanceSearchTrigger span.switchButtonName');
        this.documentaSearchIcon = Selector('#search-ic');
        this.documentsTableRows = Selector('table.js-dataTable > tbody > tr');
    }
}