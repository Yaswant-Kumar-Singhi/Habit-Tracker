//reuire express
const express = require('express');
//using router
const router = express.Router();
//defining controller path
const homeController = require('../controllers/home_controller');

//using router to route to 
router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/users/habit',require('./habit'));

//msg for successfully running routes in console
console.log("routes running");

//exporting router
module.exports =  router;
