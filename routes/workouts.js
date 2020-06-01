//Require
const express = require('express');
const router = require('express').Router();
const passport = require('passport');
const workoutsCtrl = require('../controllers/workouts');


///Get workouts

router.get('/', workoutsCtrl.index);
router.get('/new', isLoggedIn, workoutsCtrl.new);
router.get('/:id', isLoggedIn,  workoutsCtrl.show);


router.post('/', isLoggedIn, workoutsCtrl.addWorkout);



router.delete('/:id', isLoggedIn, workoutsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
