//Require
const express = require('express');
const router = require('express').Router();
const passport = require('passport');
const workoutsCtrl = require('../controllers/workouts');
const exercisesCtrl = require('../controllers/exercises');

///Workout Routes

///Get workouts
router.get('/', workoutsCtrl.index);
//New Workout Page
router.get('/new', isLoggedIn, workoutsCtrl.new);
//Workout Details
router.get('/:id', isLoggedIn,  workoutsCtrl.show);
//Add Workout
router.post('/', isLoggedIn, workoutsCtrl.addWorkout);
//Delete Workout
router.delete('/:id', isLoggedIn, workoutsCtrl.delete);
//Add Likes
router.put('/:id', isLoggedIn, workoutsCtrl.addLike);


//Exercise Routes
router.get("/:id/exercises/new", exercisesCtrl.new);



//Loggedin User Protection
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
