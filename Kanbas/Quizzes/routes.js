import * as quizzesDao from "./dao.js";

export default function QuizRoutes(app) {
  // Modifying the quiz
  app.put("/api/Quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    console.log("reached", assignmentId);
    console.log("reached", assignmentUpdates);

    const status = quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });

  // Deleting
  app.delete("/api/Quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    const status = quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });

  // Get quiz by id
  app.get("/api/Quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    const quiz = quizzesDao.findQuizById(quizId);
    res.json(quiz);
  });

  app.get("/api/courses/:courseId/Quizzes", (req, res) => {
    console.log("Inside server");
    const { courseId } = req.params;
    const quizzes = quizDao.findQuizzes(courseId);
    res.json(quizzes);
  });
}
