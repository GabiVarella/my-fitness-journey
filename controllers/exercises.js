  
const Exercise = require("../models/workout");
const Workout = require("../models/workout");

module.exports = {
    new: newExercisePage,
    addExercise,
    deleteExercise,
    show,
    updatePage,
    updateExercise,
    addLikeEx,
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

function updatePage(req, res){
    Workout.findById(req.params.id, function(err, workout){
        res.render('exercises/edit', {idx: req.params.idx, workout: workout});
    });
};

function updateExercise(req, res){
    Workout.findById(req.params.id, function(err, workout){
        workout.exercises[req.params.idx] = req.body;
        workout.save(function(err){
            res.redirect(`/exercises/${req.params.id}/${req.params.idx}`);
        });
    });
};

function addLikeEx(req, res) {
    Workout.findById(req.params.id, function(err, workout){
       workout.exercises[req.params.idx].likes += 1;
      workout.save(function(err){
        res.redirect(`/workouts/${req.params.id}`);
      });
    });
  };