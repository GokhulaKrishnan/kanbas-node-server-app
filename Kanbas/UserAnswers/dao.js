import model from "./model.js";
// import { ObjectId } from "mongodb";

export const createAttempt = (respond) => {
  delete respond._id;
  return model.create(respond);
  // const newQuiz = { ...quiz, _id: Date.now().toString() };
  // Database.quizzes = [...Database.quizzes, newQuiz];
  // return newQuiz;
};

// Fetch user attempts by quizId and userId
export const findUserAttemptsByQuizAndUser = (quizId, userId) => {
  console.log(
    `Fetching attempts for Quiz ID: ${quizId} and User ID: ${userId}`
  );
  return model.find({ quizId: quizId, userId: userId });
};

export const findUserAttemptsById = (attemptId) => {
  return model.find({ _id: attemptId });
};

// Updating
export const updateUserAttempt = (attemptId, updatedAttempt) => {
  return model.updateOne({ _id: attemptId }, updatedAttempt);
  // const { quizzes } = Database;
  // const quiz = quizzes.find((quiz) => quiz._id === quizId);
  // console.log(quiz);
  // // Object.assign(quiz, updatedQuiz);
  // return quiz;
};
