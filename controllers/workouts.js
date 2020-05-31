const User = require('../models/user');
const Workout = require('../models/workout');

module.exports = {
  index,
  new: newWorkoutPage,
  addWorkout,

};

function addWorkout (req, res){
  req.body.user = req.user._id;
    
    const workout = new Workout(req.body);
    workout.save(function(err) {
        if (err) res.redirect('/workouts/new');
        console.log(workout);
        res.redirect('/workouts');
    })

  //add a link to "My Workouts that shows name and date on the link"
  //redirect to 
};

function index(req, res){
   Workout.find({user: req.user._id}, function(err, workouts){
     res.render("workouts/index", {user: req.user, workouts: workouts});
   })
};

function newWorkoutPage(req, res){
  User.findById(req.user._id, function(err, users){
    res.render('workouts/new', {user: req.user, users: users});
  })
};