//requiring necessaru files
const express = require('express');
const passport = require('passport');
const router = express.Router();

//defining path for user_controller
const usersController = require('../controllers/user_controller');

//routing
router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);
router.get('/viewAll',passport.checkAuthentication,usersController.viewAllHabit);

//using router for creating a user
router.post('/create',usersController.create);

//use passport as a middleware for auth
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect : '/users/sign-in'},
    
),usersController.createSession)

//using router
router.get('/sign-out',usersController.destroySession);

//exporting router
module.exports = router;