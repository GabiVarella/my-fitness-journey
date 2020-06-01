const User = require('../models/user');
const Exercise = require("../models/workout");
const Workout = require("../models/workout");

module.exports = {
  index,
  new: newWorkoutPage,
  addWorkout,
  show,
  delete: deleteWorkout,

};

function index(req, res){
   Workout.find({user: req.user._id}, function(err, workouts){
     res.render('workouts/index', {user: req.user, workouts: workouts});
   })
};

//Fix security flaw in User.find
function newWorkoutPage(req, res){
  User.findById(req.user._id, function(err, users){
    res.render('workouts/new', {user: req.user, users: users});
  })
};

function addWorkout (req, res){
  req.body.user = req.user._id;
    const workout = new Workout(req.body);
    workout.save(function(err) {
        if (err) res.redirect('workouts/new');
        console.log(workout);
        res.redirect('/workouts');
    })
};

function show(req, res){
  Workout.findById(req.params.id, function(err, workout){
    res.render('workouts/show', {user: req.user, workout: workout});
  })
};

function deleteWorkout(req, res) {
  Workout.findByIdAndDelete(req.params.id, function(err, workouts) {
       res.redirect('/workouts');
  })
}

// function newWorkoutPage(req, res){
//   User.find({user: req.user._id}, function(err, user){
//     res.render('workouts/new', {user: user});
//   })
// };