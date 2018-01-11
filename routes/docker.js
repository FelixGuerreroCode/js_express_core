const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    docker: "within a living linux instance"
  });
});

module.exports = router;
