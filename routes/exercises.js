const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');




router.post("/workouts/:id/exercises", isLoggedIn, exercisesCtrl.addExercise);
router.delete("/:id/:idx", isLoggedIn, exercisesCtrl.deleteExercise);
router.get("/:id/:idx", isLoggedIn, exercisesCtrl.show);



//Loggedin User Protection
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;