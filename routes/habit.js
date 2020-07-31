//requiring necessary files
const express = require('express');
const router = express.Router();
const passport = require('passport');

//defining path for habit_controller
const habitController = require('../controllers/habit_controller');

//using router to route to differnt pages 
router.post('/create',passport.checkAuthentication,habitController.create);
router.get('/delete',habitController.delete);

//exporiting router
module.exports = router;