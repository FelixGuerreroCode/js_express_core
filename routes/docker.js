const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    docker: 'rocks! because I get it'
  });
});

module.exports = router;
