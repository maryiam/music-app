const express = require('express');
const request = require('./oauth');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const artistReq = await request({
    uri: `https://api.spotify.com/v1/artists/${req.params.id}/albums`
  });

  artistReq
    .pipe(res);
});

module.exports = router;
