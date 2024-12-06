import Database from "../Database/index.js";

export const findQuestions = (quizzId) => {
  console.log("Inside question Dao");
  const { questions } = Database;
  return questions.filter((question) => question.quizId === quizzId);
};

// export const findQuizById = (id) => {
//   const quizzes = readDatabase();
//   return quizzes.find((quiz) => quiz._id === id);
// };

export const findQuestionById = (questionId) => {
  const { questions } = Database;
  return questions.filter((question) => question.questionId === questionId);
};

export const createQuestion = (question) => {
  const newQuestion = { ...question, _id: Date.now().toString() };
  Database.questions = [...Database.questions, newQuestion];
  return newQuestion;
};

export const updateQuestion = (questionId, updatedQuestion) => {
  const { questions } = Database;
  const question = questions.find(
    (question) => question.questionId === questionId
  );
  console.log(questionId);
  Object.assign(question, updatedQuestion);
  return question;
};

export const deleteQuestion = (id) => {
  const { questions } = Database;
  Database.questions = questions.filter(
    (question) => question.questionId !== id
  );

  //   if (quizzes.length !== filteredQuizzes.length) {
  //     writeDatabase(filteredQuizzes);
  //     return true;
  //   } else {
  //     throw new Error("Quiz not found");
  //   }
};
