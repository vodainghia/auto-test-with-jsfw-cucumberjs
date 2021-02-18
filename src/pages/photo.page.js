import basePage from './base.page';
import locator from './locator.page';
import loginPage from './login.page';
import dataHandling from '../support/dataHandling';
const pageConstant = require('./page.constant')

class photoPage {

    openPhotoURL(photoId) {
        const url  = pageConstant.PAGE_URL.VIEW_PHOTO_BY_ID_URL.replace('{photoID}', photoId);
        browser.url(url);
        return this;
    }

    loginByAddToCollectionBtn(userName, password) {
        basePage.clickOnButton(locator.ADD_TO_COLLECTION_BTN.selector);
        loginPage.useCorrectCredential(userName, password);
        return this;
    }

    closePopupWindow() {
        basePage.clickOnButton(locator.CLOSE_ADD_TO_COLLECTION_WINDOW_BTN.selector);
        return this;
    }
    
    getRelatedTagsList() {
        const tagsList = basePage.getElements(locator.RELATED_TAGS.selector);
        return dataHandling.getElementListFromText(tagsList);
    }

    getPhotoListInCollection() {
        const photoList = basePage.getElements(locator.PHOTO_IN_COLLECTION_HREF.selector);
        return dataHandling.getElementListFromHref(photoList);
    }

    likePhoto() {
        basePage.clickOnButton(locator.LIKE_PHOTO_BTN.selector);
        return this;
    }

    getLikedPhotoURL() {
        return basePage.checkIsExisting(locator.LIKED_PHOTO_HREF.selector);
    }

};

export default new photoPage()
