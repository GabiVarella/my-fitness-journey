const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const exerciseSchema = new mongoose.Schema({
    id: Schema.Types.ObjectId,
    name: String,
    weight: Number,
    reps: Number,
    sets: Number,
    likes: {
        type: Number, 
        default: 0},
    link: String,
    workout: {
        type: Schema.Types.ObjectId, 
        ref: "Workout"
    }
}, {
    timestamps: true
});

const workoutSchema = new mongoose.Schema({
    name: String,
    likes: {
        type: Number, 
        default: 0},
    exercises: [exerciseSchema],
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Exercise', exerciseSchema);
module.exports = mongoose.model('Workout', workoutSchema);