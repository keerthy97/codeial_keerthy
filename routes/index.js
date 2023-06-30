const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');


console.log("router loaded")

// accessing the function in the controllers(home_controller.js)
router.get('/', homeController.home);
router.use('/users', require('./users')); // go to the router for users 

// for any further routes, access from here
// router.use('/routerName', require('./routerfile'));

module.exports = router;