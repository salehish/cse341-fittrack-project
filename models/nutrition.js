const mongoose = require("mongoose");

const nutritionSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Nutrition", nutritionSchema);