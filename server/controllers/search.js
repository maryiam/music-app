const express = require('express');
const request = require('./oauth');
const router = express.Router();

router.get('/:searchText', async (req, res) => {
  const searchReq = await request({
    uri: 'https://api.spotify.com/v1/search',
    qs: {
      q: req.params.searchText,
      type: 'artist'
    }
  });

  searchReq
    .pipe(res);
});

module.exports = router;
