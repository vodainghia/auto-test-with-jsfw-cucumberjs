import { Then } from 'cucumber';
import userCollectionPage from '../pages/userCollection.page';
import photoPage from '../pages/photo.page';
const scope = require('../support/scope');
import apiHelper from '../APIHelper/apiHelper';

Then(/^the user's location is "(.*)"$/, function(location) {
	const currentLocation = userCollectionPage.getLocation();
	expect(currentLocation).to.equal(location, `${location} is not current location!`);
});

Then('all related tags of this photo are correct', function() {
	const photoID = scope.context.photoID;
	const expectedTagsList = apiHelper.getTagsList(photoID);
	const actualTagsList = photoPage.getRelatedTagsList();
	expect(expectedTagsList).to.eql(actualTagsList, `The tags of photo ID ${photoID} are incorrect!`);
});

Then('the user sees the correct photo in it', function() {
	const collectionID = scope.context.collectionID;
	const photoID = scope.context.photoID;
	const photoListInCollections = photoPage.getPhotoListInCollection();
	expect(photoListInCollections).to.include(photoID, `The collection ID (${collectionID}) and photo ID ${photoID} are incorrect!`);
});

Then('the user sees only the rest photo in it', function() {
	const collectionID = scope.context.collectionID;
	const removedPhotoID = scope.context.removedPhotoID;
	const keptPhotoID = scope.context.keptPhotoID;
	const photoListInCollections = photoPage.getPhotoListInCollection();
	expect(photoListInCollections).to.not.include(removedPhotoID, `The photo ID ${removedPhotoID} is not removed!`)
    expect(photoListInCollections).to.include(keptPhotoID, `The photo ID ${keptPhotoID} is not in temp collection ${collectionID}!`);
});

Then('the photo is liked', function() {
	expect(photoPage.getLikedPhotoURL()).to.be.true;
});