//Require
var router = require('express').Router();
var workoutsCtrl = require('../controllers/workouts');


///Get workouts

router.get('/', workoutsCtrl.index);
router.get('/new', workoutsCtrl.new);
router.get('/:id', workoutsCtrl.show);


router.post('/', workoutsCtrl.addWorkout);



router.delete('/:id', workoutsCtrl.delete);




module.exports = router;
