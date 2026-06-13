const Exercise = require("../models/exercise");

const getAllExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getExerciseById = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);

        if (!exercise) {
            return res.status(404).json({ message: "Exercise not found" });
        }

        res.status(200).json(exercise);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createExercise = async (req, res) => {
    try {
        const exercise = await Exercise.create(req.body);
        res.status(201).json(exercise);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!exercise) {
            return res.status(404).json({ message: "Exercise not found" });
        }

        res.status(200).json(exercise);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndDelete(req.params.id);

        if (!exercise) {
            return res.status(404).json({ message: "Exercise not found" });
        }

        res.status(200).json({ message: "Exercise deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllExercises,
    getExerciseById,
    createExercise,
    updateExercise,
    deleteExercise
};