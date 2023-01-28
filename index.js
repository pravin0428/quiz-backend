const express = require("express")
const { UserModel } = require("./Models/quiz.model")
const { Connection } = require("./config/db")
const PORT = process.env.PORT || 8000
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
require("dotenv").config()

app.get('/', (req, res) => {
    res.send('hey i am running!')
})
app.post("/quiz", async (req, res) => {
    const {type, category, difficulty, question, correct_answer, incorrect_answers } = req.body;
    const newquestion = new QuizModel({
        type: type,
        category: category,
        difficulty: difficulty,
        question: question,
        correct_answer: correct_answer,
        incorrect_answers: incorrect_answers
    })
    await newquestion.save();
    const data = await UserModel.find({});
    res.send(data)
})

app.get("/quiz", async (req, res) => {
    const { category, difficulty, limit } = req.query;
    const response = await UserModel.find({ category: category, difficulty: difficulty }).limit(limit);
    res.send(response);
})


app.listen(PORT, async () => {
    try {
        await Connection
        console.log("Successfully Connected to DB");
    }
    catch (err) {
        console.log("connecting error");
        console.log(err);
    }
    console.log(`Listenging on PORT http://localhost:${PORT}`);
})