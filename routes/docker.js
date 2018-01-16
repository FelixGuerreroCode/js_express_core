const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.render( "index", 
		{ 
			docker: "within another request",
			title : "My Title",
			message : "What's up?"
		}
	);
});

module.exports = router;
