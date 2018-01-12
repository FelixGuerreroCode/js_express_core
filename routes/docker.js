const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    docker: "within another request"
  });
});

module.exports = router;
