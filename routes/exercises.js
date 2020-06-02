const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');




router.post("/workouts/:id/exercises", exercisesCtrl.addExercise);



module.exports = router;