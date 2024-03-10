const router = require('express').Router();
const controller = require('./controller/login.controller');

router.post('/signin', controller.signInRequest);
router.post('/signup', controller.signUpRequest);

module.exports = router;
