//Require
var router = require('express').Router();
var workoutsCtrl = require('../controllers/workouts');


///Get workouts

router.get('/workouts', workoutsCtrl.index);
router.get('/workouts/new', workoutsCtrl.new);





module.exports = router;
