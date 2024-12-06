import Database from "../Database/index.js";

// Path to the JSON file that mimics the database
// const dbPath = path.resolve(__dirname, "quizzes.json");

// Utility function to read and parse JSON file
// const readDatabase = () => {
//   const data = fs.readFileSync(dbPath, "utf-8");
//   return JSON.parse(data);
// };

// // Utility function to write data to the JSON file
// const writeDatabase = (data) => {
//   fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
// };

// CRUD operations
export const findQuizzes = (courseId) => {
  console.log("Inside Dao");
  const { quizzes } = Database;
  return quizzes.filter((quiz) => quiz.courseId === courseId);
};

// export const findQuizById = (id) => {
//   const quizzes = readDatabase();
//   return quizzes.find((quiz) => quiz._id === id);
// };

export const findQuizById = (quizId) => {
  const { quizzes } = Database;
  return quizzes.filter((quiz) => quiz._id === quizId);
};

export const createQuiz = (quiz) => {
  const newQuiz = { ...quiz, _id: Date.now().toString() };
  Database.quizzes = [...Database.quizzes, newQuiz];
  return newQuiz;
};

export const updateQuiz = (quizId, updatedQuiz) => {
  const { quizzes } = Database;
  const quiz = quizzes.find((quiz) => quiz._id === quizId);
  console.log(quiz);
  Object.assign(quiz, updatedQuiz);
  return quiz;
};

export const deleteQuiz = (id) => {
  const { quizzes } = Database;
  Database.quizzes = quizzes.filter((quiz) => quiz._id !== id);

  //   if (quizzes.length !== filteredQuizzes.length) {
  //     writeDatabase(filteredQuizzes);
  //     return true;
  //   } else {
  //     throw new Error("Quiz not found");
  //   }
};
