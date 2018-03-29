const request = require('request');
const getToken = require('./token');

async function authRequest(config) {
  const accessToken = await getToken();

  config = Object.assign({
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  }, config);

  return request(config);
}

module.exports = authRequest;
