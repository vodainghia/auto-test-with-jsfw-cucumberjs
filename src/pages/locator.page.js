import ElementHandling from '../support/elementHandling';
import userData from '../userdata/userData';
const scope = require('../support/scope');
const $ = ElementHandling.singleElement;

class locator {

    get USER_EMAIL_TEXT_BOX() { return $('#user_email'); };
    get PASSWORD_TEXT_BOX() { return $('#user_password'); };
    get LOGIN_BUTTON() { return $('div >[type="submit"][value="Login"]'); };
    get COLLECTION_USER_BTN() { return $('header [role="presentation"]'); };
    get VIEW_PROFILE_BTN() { return $(`div[role="menu"] a[role="link"][href="/@${userData.USER["Nghia Vo"].username}"]`); };
    get EDIT_PROFILE_BTN() { return $('div[data-test="users-route"] a[href="/account"]'); };
    get LOCATION_TEXT_BOX() { return $('input#user_location'); };
    get UPDATE_ACCOUNT_BTN() { return $('[value="Update account"][name="commit"]'); };
    get ADD_TO_COLLECTION_BTN() { return $('[data-test="photos-route"] button[title="Add to collection"]:first-child'); };
    get CLOSE_ADD_TO_COLLECTION_WINDOW_BTN() { return $('body .ReactModalPortal button:first-child'); };
    get RELATED_TAGS() { return $('._3dpes ._3Z-ua a'); };
    get COLLECTIONS_BTN() { return $('a[data-test="user-nav-link-collections"]'); };
    get PHOTO_IN_COLLECTION_HREF() { return $('a[itemprop="contentUrl"]'); };
    get COLLECTIONS_HREF() { 
        const COLLECTIONS_HREF = `[data-test="users-collections-route"] [data-test="collection-feed-card"] [href="/collections/{to be replaced}"]`;
        const collectionID = scope.context.collectionID;
        const collectionName = scope.context.collectionName.replace(' ', '-');
        const replacedData = `${collectionID}/${collectionName}`.toLowerCase();
        const collectionsHrefFixed = COLLECTIONS_HREF.replace(`{to be replaced}`, replacedData);
        return $(collectionsHrefFixed); 
    };
    get LIKE_PHOTO_BTN() { return $('._3-6v7 button[title="Like photo"]'); };
    get LIKES_BTN() { return $('a[data-test="user-nav-link-likes"]'); };
    get LIKED_PHOTO_HREF() { 
        const photoID = scope.context.photoID;
        const likedPhotoHref = `a[itemprop='contentUrl'][href='/photos/{photoID}']`.replace(`{photoID}`, `${photoID}`);
        console.log(likedPhotoHref)
        return $(likedPhotoHref); 
    };

};

export default new locator()
