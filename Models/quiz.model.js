const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    type: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, required: true },
    question: { type: String, required: true },
    correct_answer: { type: String },
    incorrect_answers: { type: Array}
})
const UserModel = mongoose.model("quizy", UserSchema);
module.exports = { UserModel };