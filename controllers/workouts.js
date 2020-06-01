const User = require('../models/user');
const Workout = require('../models/workout');

module.exports = {
  index,
  new: newWorkoutPage,
  addWorkout,
  delete: deleteWorkout,
  show,

};

function index(req, res){
   Workout.find({user: req.user._id}, function(err, workouts){
     res.render('workouts/index', {user: req.user, workouts: workouts});
   })
};

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

function deleteWorkout (req, res) {
  req.body.user = req.user._id;
  const workout = new Workout(req.body);
  Workout.find({user: req.user._id}, function(err, workouts){
    workouts.splice(req.params.id, 1);
    workout.save(function(err) {
      res.redirect('workouts/index');
    })
  }) 
};

function show(req, res){
  Workout.findById(req.params.id, function(err, workout){
    res.render('workouts/show', {user: req.user, workout: workout});
  })
};