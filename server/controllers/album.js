const express = require('express');
const request = require('./oauth');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const albumReq = await request({
    uri: `https://api.spotify.com/v1/albums/${req.params.id}/tracks`
  });

  albumReq
    .pipe(res);
});

module.exports = router;
