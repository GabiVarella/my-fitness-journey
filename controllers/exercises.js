  
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
    // linkFormat,
  };

function newExercisePage(req, res){
    Workout.findById(req.params.id, function(err, workout){
        res.render('exercises/new', {workout: workout});
    })
};

function addExercise(req, res){
    req.body.workout = req.params.id;
    Workout.findById(req.params.id, function(err, workout){
        workout.exercises.push(req.body);
        workout.save(function(err){
            res.redirect(`/workouts/${req.params.id}`);
        })
    });
};
// function addExercise(req, res){
//     req.body.workout = req.params.id;
//     let link = req.body.split(".") 
//     if(link[1] === 'youtube') { 
//     function getId(url) {
//        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//        const match = url.match(regExp);
//        return (match && match[2].length === 11)? match[2]: null;
//      }
//      const videoId = getId(req.body.link);
//      const iframeMarkup = 'www.youtube.com/embed/' + videoId;
//      req.body.link = iframeMarkup
//      }
//      Workout.findById(req.params.id, function(err, workout){
//         workout.exercises.push(req.body);
//         workout.save(function(err){
//             res.redirect(`/workouts/${req.params.id}`);
//         })
//     });
// };

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

// function linkFormat(req, res) {
//     Workout.findById(req.params.id, function(err, workout){
//         function getId(url) {
//             const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//             const match = url.match(regExp);
        
//             return (match && match[2].length === 11)
//               ? match[2]
//               : null;
//         };
            
//         const videoId = getId(workout.exercises[req.params.idx].link);
//         const iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
//             + videoId + '" frameborder="0" allowfullscreen></iframe>';
//             res.redirect(`/exercises/${req.params.id}/${req.params.idx}`, {tag: iframeMarkup});
//     });
// };