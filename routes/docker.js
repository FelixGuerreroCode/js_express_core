const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    docker: "rocks! because I get it now for a new try"
  });
});

module.exports = router;
