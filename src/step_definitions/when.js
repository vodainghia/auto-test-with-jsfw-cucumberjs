import { When } from 'cucumber';
import loginPage from '../pages/login.page';
import userCollectionPage from '../pages/userCollection.page';
import photoPage from '../pages/photo.page';
const scope = require('../support/scope');
import apiHelper from '../APIHelper/apiHelper';

When(/^the user login the website with "(.*)" and "(.*)"$/, function(userEmail, password) {
	loginPage.useCorrectCredential(userEmail, password);
});

When('the user navigates to Edit Profile Page', function() {
	userCollectionPage
		.goToUserCollectionPage()
		.goToEditProfilePage();
	const oldLocation = userCollectionPage.getLocation();
	scope.context.oldLocation = oldLocation;
});

When(/^the user updates location information to "(.*)"$/, function(location) {
	userCollectionPage
		.inputLocation(location)
		.clickOnUpdateAccountBtn()
		.waitForLocationDisplay();
});

When('the user opens a random photo', function() {
	const photoID = apiHelper.getRandomPhotoInfo().id;
	scope.context.photoID = photoID;
	photoPage.openPhotoURL(photoID);
});

When(/^the user login with "(.*)" and "(.*)" by adding photo to collection$/, function(userEmail, password) {
	photoPage
		.loginByAddToCollectionBtn(userEmail, password)
		.closePopupWindow();
});

When('the user adds a random photo into a temp collection', function() {
	const responseCollection = apiHelper.createCollection();
	const collectionID = responseCollection.id;
	const photoID = apiHelper.getRandomPhotoInfo().id;
	scope.context.collectionID = collectionID;
	scope.context.collectionName = responseCollection.title;
	scope.context.photoID = photoID;
	apiHelper.addPhotoToCollection(collectionID, photoID);
});

When('the user navigates to this temp collection', function() {
	const collectionID = scope.context.collectionID;
	const collectionName = scope.context.collectionName;
	userCollectionPage
		.goToUserCollectionPage()
		.clickOnCollectionsBtn()
		.clickOnCollection(collectionID, collectionName);
});

When('the user adds 02 random photos into a temp collection', function() {
	const responseCollection = apiHelper.createCollection();
	const collectionID = responseCollection.id;
	const removedPhotoID = apiHelper.getRandomPhotoInfo().id;
	const keptPhotoID = apiHelper.getRandomPhotoInfo().id;
	scope.context.collectionID = collectionID;
	scope.context.collectionName = responseCollection.title;
	scope.context.keptPhotoID = keptPhotoID;
	scope.context.removedPhotoID = removedPhotoID;
	apiHelper
		.addPhotoToCollection(collectionID, removedPhotoID)
		.addPhotoToCollection(collectionID, keptPhotoID);
});

When('the user removes a photo from this temp collection', function() {
	const collectionID = scope.context.collectionID;
	const removedPhotoID = scope.context.removedPhotoID;
	apiHelper.removePhotoFromCollection(collectionID, removedPhotoID);
});

When('the user likes this photo and navigates to the likes page', function() {
	photoPage.likePhoto();
	userCollectionPage
        .goToUserCollectionPage()
        .clickOnLikesBtn();
});
