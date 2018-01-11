const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    docker: "no good at all"
  });
});

module.exports = router;
