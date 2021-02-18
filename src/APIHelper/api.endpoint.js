const END_POINTS = {
	USER_PROFILE: {
		GET_USER_USER_PROFILE: '/me',
	},
	COLLECTION: {
		CREATE_COLLECTION_ENDPOINT: '/collections',
		GET_COLLECTION_LIST: '/collections',
		DELETE_COLLECTION_ENDPOINT: '/collections/{collectionID}',
		ADD_NEW_IMAGE_TO_THE_COLLECTION: '/collections/{collectionID}/add',
		REMOVE_PHOTO_FROM_COLLECTION: '/collections/{collectionID}/remove'
	},
	PHOTO: {
		PHOTO_INFO_BY_ID_ENDPOINT: '/photos/{photoID}',
		GET_PHOTO_LIST: '/photos',
		RANDOM_PHOTO: '/photos/random',
		UNLIKE_PHOTO: '/photos/{photoID}/like'
	},
};

module.exports = { END_POINTS };
