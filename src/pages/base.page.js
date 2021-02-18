import ElementHandling from '../support/elementHandling';
const $ = ElementHandling.singleElement;
const $$ = ElementHandling.listElement;

class basePage {

    /**
     * Open the given URL
     * @param  {String}   type Type of navigation (getUrl or site)
     * @param  {String}   page The URL to navigate to
     */
    openWebsite(type, page) {
        const url = (type === 'url') ? page : browser.options.baseUrl + page;
        browser.url(url);
        return this;
    };

    setInputField(selector, value) {
        $(selector).setValue(value);
        return this;
    }

    clickOnButton(selector) {
        $(selector).click();
        return this;
    }
    
    getValueAtt(selector) {
        return $(selector).getValue();
    }

    waitForDisplay(selector) {
        $(selector).waitForDisplayed();
        return this;
    }

    getElements(selector) {
        return $$(selector);
    }

    checkIsExisting(selector) {
        return $(selector).isExisting();
    }
    
};

export default new basePage()
