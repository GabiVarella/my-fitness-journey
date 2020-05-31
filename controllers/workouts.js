const User = require('../models/user');
const Workout = require('../models/workout');

module.exports = {
  index,
  new: newWorkoutPage,

};


function index(req, res){
    User.findById(req.user._id, function(err, users){
        res.render('workouts/index', {user: req.user, users: users});
    })
};

function newWorkoutPage(req, res){
  User.findById(req.user._id, function(err, users){
    res.render('workouts/new', {user: req.user, users: users});
  })
};