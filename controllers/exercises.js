  
const Exercise = require("../models/workout");
const Workout = require("../models/workout");

module.exports = {
    new: newExercisePage,
    addExercise,
    // show,
    // delete: deleteExercise,
  
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


//Referencing mongoose flights
// function createTicket(req, res){
//     req.body.flight = req.params.id;
//     Ticket.create(req.body, function(err){
//         res.redirect(`/flights/${req.params.id}`);
//     })
// };
