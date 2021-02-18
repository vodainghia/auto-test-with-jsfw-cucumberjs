const { BeforeAll, After, Before } = require('cucumber');
const scope = require('../support/scope');
const CONFIG = require('../support/env');
import apiHelper from '../APIHelper/apiHelper';
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

BeforeAll(function() {
    scope.context = {};
    scope.host = CONFIG.ENVIROMENT.HOST;
    scope.APIhost = CONFIG.ENVIROMENT.API_HOST;
});

Before(function() {
    browser.reloadSession();
});

After({tags: '@Scenario01'}, function() {
    const oldLocation = scope.context.oldLocation;
    apiHelper.updateLocation(oldLocation);
    const currentLocation = apiHelper.getResponse().location;
    expect(currentLocation).to.equal(oldLocation, `${oldLocation} is not current location!`);
});

After({tags: '@Scenario03 or @Scenario04'}, function() {
    const collectionID = scope.context.collectionID;
    apiHelper.deleteCollection(collectionID);
    const collectionListInCollections = apiHelper.getCollectionList();
    expect(collectionListInCollections).to.not.include(collectionID, `The temp collection ${collectionID} is not deleted!`);
});

After({tags: '@Scenario05'}, function() {
    const likedPhotoID = scope.context.photoID;
    apiHelper.unlikePhoto(likedPhotoID);
    const likedPhotosList = apiHelper.getPhotoList();
    expect(likedPhotosList).to.not.include(likedPhotoID, `The photo ID ${likedPhotoID} is still liked!`);
});


