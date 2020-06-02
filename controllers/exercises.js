  
const Exercise = require("../models/workout");
const Workout = require("../models/workout");

module.exports = {
    new: newExercisePage,
    addExercise,
    deleteExercise,
    show,
  };

function newExercisePage(req, res){
    Workout.findById(req.params.id, function(err, workout){
        res.render('exercises/new', {workout: workout});
    })
};

function addExercise(req, res){
    req.body.workout = req.params.id;
    console.log(req.body);
    Workout.findById(req.params.id, function(err, workout){
        workout.exercises.push(req.body);
        workout.save(function(err){
            res.redirect(`/workouts/${req.params.id}`);
        })
    });
};

function deleteExercise(req, res){
    Workout.findById(req.params.id, function(err, workout){
        workout.exercises.splice(req.params.idx, 1);
        workout.save(function(err){
            res.redirect(`/workouts/${req.params.id}`);
        });
    });
};

function show(req, res){
    Workout.findById(req.params.id, function(err, workout){
        res.render('exercises/show', {idx: req.params.idx, workout: workout});
    });
};
