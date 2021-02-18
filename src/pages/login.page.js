import basePage from './base.page';
import locator from './locator.page';

class loginPage {
    
    useCorrectCredential(userEmail, password) {
        basePage
            .setInputField(locator.USER_EMAIL_TEXT_BOX.selector, userEmail)
            .setInputField(locator.PASSWORD_TEXT_BOX.selector, password)
            .clickOnButton(locator.LOGIN_BUTTON.selector);
        return this;
    }

};

export default new loginPage()
