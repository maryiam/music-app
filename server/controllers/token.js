let accessToken;
const credentials = {
  client: {
    id: '073af4a7c3564440811b2424156ae9d8',
    secret: 'd769f93b8b434a3495f01f57352736be'
  },
  auth: {
    tokenHost: 'https://accounts.spotify.com',
    tokenPath: '/api/token'
  }
};

const oauth2 = require('simple-oauth2').create(credentials);

async function createToken() {
  try {
    if (accessToken) {
      if (!accessToken.expired()) {
        return accessToken;
      }

      accessToken.revoke('access_token');
    }

    const result = await oauth2.clientCredentials.getToken();
    accessToken = oauth2.accessToken.create(result);

    return accessToken;
  } catch (error) {
    console.log('Access Token error', error.message);
    return null;
  }
}

async function getToken() {
  const userAccessToken = await createToken();

  return userAccessToken.token.access_token;
}


module.exports = getToken;
