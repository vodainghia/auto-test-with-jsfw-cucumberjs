const CONFIG = require('../support/env');

function getDatetime() {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
  return `-${date}-${time}`;
};

const HEADERS_WITH_TOKEN = {
  Authorization: 'Bearer ' + CONFIG.ENVIROMENT.TOKEN
};

const CREATE_COLLECTION_REQUEST_BODY = {
  title: 'AUTOCOLLECTION' + getDatetime()
};

module.exports = { HEADERS_WITH_TOKEN, CREATE_COLLECTION_REQUEST_BODY };
