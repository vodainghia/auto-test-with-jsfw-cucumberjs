import basePage from './base.page';
import locator from './locator.page';

class userCollectionPage {

    goToUserCollectionPage() {
        basePage
            .clickOnButton(locator.COLLECTION_USER_BTN.selector)
            .clickOnButton(locator.VIEW_PROFILE_BTN.selector);
        return this;
    }

    goToEditProfilePage() {
        basePage.clickOnButton(locator.EDIT_PROFILE_BTN.selector);
        return this;
    }

    inputLocation(value) {
        basePage.setInputField(locator.LOCATION_TEXT_BOX.selector, value);
        return this;
    }

    clickOnUpdateAccountBtn() {
        basePage.clickOnButton(locator.UPDATE_ACCOUNT_BTN.selector);
        return this;
    }

    getLocation() {
        return basePage.getValueAtt(locator.LOCATION_TEXT_BOX.selector);
    }

    waitForLocationDisplay() {
        return basePage.waitForDisplay(locator.LOCATION_TEXT_BOX.selector);
    }

    clickOnCollectionsBtn() {
        basePage.clickOnButton(locator.COLLECTIONS_BTN.selector);
        return this;
    }

    clickOnCollection() {
        basePage.clickOnButton(locator.COLLECTIONS_HREF.selector);
        return this;
    }

    clickOnLikesBtn() {
        basePage.clickOnButton(locator.LIKES_BTN.selector);
        return this;
    }

};

export default new userCollectionPage()
