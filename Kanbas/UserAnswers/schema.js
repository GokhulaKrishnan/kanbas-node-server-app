import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "QuestionModel",
        },
        answer: [String],
      },
    ],

    timestamp: String,
    score: Number,
  },
  { collection: "userAnswers" }
);
export default schema;
