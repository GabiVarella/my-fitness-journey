//Require
const express = require('express');
const router = require('express').Router();
const passport = require('passport');
const workoutsCtrl = require('../controllers/workouts');


///Get workouts

router.get('/', workoutsCtrl.index);
router.get('/new', workoutsCtrl.new);
router.get('/:id', workoutsCtrl.show);


router.post('/', workoutsCtrl.addWorkout);



router.delete('/:id', workoutsCtrl.delete);



// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect('/auth/google');
// };

module.exports = router;
