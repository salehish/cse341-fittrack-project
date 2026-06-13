const Nutrition = require("../models/nutrition");

const getAllNutrition = async (req, res) => {
    try {
        const nutrition = await Nutrition.find();
        res.status(200).json(nutrition);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getNutritionById = async (req, res) => {
    try {
        const nutrition = await Nutrition.findById(req.params.id);

        if (!nutrition) {
            return res.status(404).json({ message: "Nutrition not found" });
        }

        res.status(200).json(nutrition);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createNutrition = async (req, res) => {
    try {
        const nutrition = await Nutrition.create(req.body);
        res.status(201).json(nutrition);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateNutrition = async (req, res) => {
    try {
        const nutrition = await Nutrition.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!nutrition) {
            return res.status(404).json({ message: "Nutrition not found" });
        }

        res.status(200).json(nutrition);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteNutrition = async (req, res) => {
    try {
        const nutrition = await Nutrition.findByIdAndDelete(req.params.id);

        if (!nutrition) {
            return res.status(404).json({ message: "Nutrition not found" });
        }

        res.status(200).json({ message: "Nutrition deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllNutrition,
    getNutritionById,
    createNutrition,
    updateNutrition,
    deleteNutrition
};