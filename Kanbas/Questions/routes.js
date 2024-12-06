import * as questionsDao from "./dao.js";

export default function QuestionRoutes(app) {
  // Modifying the quiz
  app.put("/api/Questions/:questionId", (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    // console.log("reached", assignmentId);
    // console.log("reached", assignmentUpdates);

    const status = questionsDao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  });

  // Deleting
  app.delete("/api/Questions/:questionId", (req, res) => {
    const { questionId } = req.params;
    const status = questionsDao.deleteQuestion(questionId);
    res.send(status);
  });

  // Get quiz by id
  app.get("/api/Questions/:questionId", (req, res) => {
    const { questionId } = req.params;
    const question = questionsDao.findQuestionById(questionId);
    res.json(question);
  });

  //   app.get("/api/courses/:courseId/Quizzes", (req, res) => {
  //     console.log("Inside server");
  //     const { courseId } = req.params;
  //     const quizzes = quizDao.findQuizzes(courseId);
  //     res.json(quizzes);
  //   });

  app.get("/api/Quizzes/:quizId/Questions", (req, res) => {
    const { quizId } = req.params;
    console.log("Inside questions server", quizId);

    const questions = questionsDao.findQuestions(quizId);
    console.log(questions);
    res.json(questions);
  });

  // Creating new Questions.
  app.post("/api/Quizzes/Questions", (req, res) => {
    // const { quizId } = req.params;
    const question = {
      ...req.body,
    };
    const newQuestion = questionsDao.createQuestion(question);
    res.send(newQuestion);
  });
}
