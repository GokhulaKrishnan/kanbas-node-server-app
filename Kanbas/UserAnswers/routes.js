import * as userAnswersDao from "./dao.js";

export default function UserAnswersRoutes(app) {
  // Creating new Quizzes.
  app.post("/api/userAnswers", async (req, res) => {
    //   const { userId, quesId, quizId } = req.params;
    const attempt = {
      ...req.body,
    };
    const newAttempt = await userAnswersDao.createAttempt(attempt);
    res.send(newAttempt);
  });

  // Fetching userAttempt by using userId and quizId
  // Get userAttempt by id
  app.get("/api/userAnswers/:quizId/:userId", async (req, res) => {
    const { quizId, userId } = req.params;
    const quiz = await userAnswersDao.findUserAttemptsByQuizAndUser(
      quizId,
      userId
    );
    res.json(quiz);
  });

  // Get userAttempt by userAttempt id
  app.get("/api/userAnswers/existing/:attemptId", async (req, res) => {
    const { attemptId } = req.params;
    console.log(attemptId);
    const attempt = await userAnswersDao.findUserAttemptsById(attemptId);
    res.json(attempt);
  });

  // Modifying the quiz
  app.put("/api/userAnswers/:attemptId", async (req, res) => {
    const { attemptId } = req.params;
    const attemptUpdates = req.body;
    // console.log("reached", assignmentId);
    // console.log("reached", assignmentUpdates);

    const status = await userAnswersDao.updateUserAttempt(
      attemptId,
      attemptUpdates
    );
    res.send(status);
  });
}
