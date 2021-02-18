import apiHandling from '../support/apiRequestHandling';
import dataHandling from '../support/dataHandling';
const scope = require('../support/scope');
//const collectionData = require('../../data/testData/collection/collectionData.json');
//const currentDatetime = dataHandling.getDatetime();
const apiConstant = require('../APIHelper/api.constant');
const apiEndpoint = require('../APIHelper/api.endpoint');

export default class apiHelper {

    static getResponse() {
        const url = scope.APIhost + apiEndpoint.END_POINTS.USER_PROFILE.GET_USER_USER_PROFILE;
        const header = apiConstant.HEADERS_WITH_TOKEN;
        return apiHandling.getGetRequestData(url, header, null);
    }

    static updateLocation(location) {
        const url = scope.APIhost + apiEndpoint.END_POINTS.USER_PROFILE.GET_USER_USER_PROFILE;
        const formData = {
            location: location
        };
        const header = apiConstant.HEADERS_WITH_TOKEN;
        return apiHandling.getPutRequestData(url, formData, header);
    }
    
    static getRandomPhotoInfo() {
        const url = scope.APIhost + apiEndpoint.END_POINTS.PHOTO.RANDOM_PHOTO;
        const header = apiConstant.HEADERS_WITH_TOKEN;
        return apiHandling.getGetRequestData(url, header, null);
    }

    static getPhotoInfo(photoId) {
        const url = scope.APIhost + apiEndpoint.END_POINTS.PHOTO.PHOTO_INFO_BY_ID_ENDPOINT.replace('{photoID}', photoId);
        const header = apiConstant.HEADERS_WITH_TOKEN;
        return apiHandling.getGetRequestData(url, header, null);
    }

    static getTagsList(photoId) {
        let expectedTagsList = [];
        this.getPhotoInfo(photoId).tags.forEach(x => {
            expectedTagsList.push(dataHandling.capitalizeEachWord(x.title));          
        });
        return expectedTagsList;
    }

    static createCollection() {
        const url = scope.APIhost + apiEndpoint.END_POINTS.COLLECTION.CREATE_COLLECTION_ENDPOINT;
        const data = apiConstant.CREATE_COLLECTION_REQUEST_BODY;
        const header = apiConstant.HEADERS_WITH_TOKEN;
        return apiHandling.getPostRequestData(url, data, header);
    }

    static addPhotoToCollection(collectionID, photoID) {
        const url = scope.APIhost + apiEndpoint.END_POINTS.COLLECTION.ADD_NEW_IMAGE_TO_THE_COLLECTION.replace(`{collectionID}`, `${collectionID}`);
        const formData = {
            photo_id: photoID
        };
        const header = apiConstant.HEADERS_WITH_TOKEN;
        apiHandling.getPostRequestData(url, formData, header);
        return this;
    }

    static removePhotoFromCollection(collectionID, photoID) {
        const url = scope.APIhost + apiEndpoint.END_POINTS.COLLECTION.REMOVE_PHOTO_FROM_COLLECTION.replace(`{collectionID}`, `${collectionID}`);
        const data = {
            photo_id: photoID
        };
        const header = apiConstant.HEADERS_WITH_TOKEN;
        apiHandling.makeDeleteRequest(url, data, header);
        return this;
    }

    static deleteCollection(collectionID) {
        const url = scope.APIhost + apiEndpoint.END_POINTS.COLLECTION.DELETE_COLLECTION_ENDPOINT.replace(`{collectionID}`, `${collectionID}`);
        const header = apiConstant.HEADERS_WITH_TOKEN;
        apiHandling.makeDeleteRequest(url, null, header);
        return this;
    }

    static getCollectionList() {
        const url = scope.APIhost + apiEndpoint.END_POINTS.COLLECTION.GET_COLLECTION_LIST;
        const header = apiConstant.HEADERS_WITH_TOKEN;
        const collectionList = apiHandling.getGetRequestData(url, header, null);
        return dataHandling.getIDList(collectionList);
    }

    static unlikePhoto(photoID) {
        const url = scope.APIhost + apiEndpoint.END_POINTS.PHOTO.UNLIKE_PHOTO.replace(`{photoID}`, `${photoID}`);
        const header = apiConstant.HEADERS_WITH_TOKEN;
        apiHandling.makeDeleteRequest(url, null, header);
        return this;
    }

    static getPhotoList() {
        const url = scope.APIhost + apiEndpoint.END_POINTS.PHOTO.GET_PHOTO_LIST;
        const header = apiConstant.HEADERS_WITH_TOKEN;
        const photoList = apiHandling.getGetRequestData(url, header, null);
        return dataHandling.getIDList(photoList)
    }

}