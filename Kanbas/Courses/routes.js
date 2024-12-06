import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import * as coursesDao from "./dao.js";
import * as quizDao from "../Quizzes/dao.js";

export default function CourseRoutes(app) {
  const findUsersForCourse = async (req, res) => {
    const { cid } = req.params;
    const users = await enrollmentsDao.findUsersForCourse(cid);
    res.json(users);
  };
  app.get("/api/courses/:cid/users", findUsersForCourse);

  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    const currentUser = req.session["currentUser"];
    if (currentUser) {
      await enrollmentsDao.enrollUserInCourse(currentUser._id, course._id);
    }

    res.json(course);
  });

  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });
  // app.get("/api/Dashboard/enrollments", (req, res) => {
  //   const courses = enrollmentsDao.findAllCourses();
  //   res.json(courses);
  // });

  // Getting the assignment to display to the user.
  app.get("/api/courses/:courseId/Assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  // Creating a new assignment.
  app.post("/api/courses/:courseId/Assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = await assignmentsDao.createAssignment(assignment);
    res.send(newAssignment);
  });

  // Displaying quizzes to the user.
  app.get("/api/courses/:courseId/Quizzes", (req, res) => {
    console.log("Inside server");
    const { courseId } = req.params;
    const quizzes = quizDao.findQuizzes(courseId);
    res.json(quizzes);
  });

  // Creating new Quizzes.
  app.post("/api/courses/:courseId/Quizzes", (req, res) => {
    const { courseId } = req.params;
    const quiz = {
      ...req.body,
      course: courseId,
    };
    const newQuiz = quizDao.createQuiz(quiz);
    res.send(newQuiz);
  });

  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = await modulesDao.createModule(module);
    res.send(newModule);
  });

  app.delete("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const status = await coursesDao.deleteCourse(courseId);
    res.send(status);
  });

  app.get("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const modules = await modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.put("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = await dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });
}
