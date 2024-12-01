import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import * as coursesDao from "./dao.js";
import * as quizDao from "../Quizzes/dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = enrollmentsDao.findAllCourses();
    res.json(courses);
  });
  // app.get("/api/Dashboard/enrollments", (req, res) => {
  //   const courses = enrollmentsDao.findAllCourses();
  //   res.json(courses);
  // });

  // Getting the assignment to display to the user.
  app.get("/api/courses/:courseId/Assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  // Creating a new assignment.
  app.post("/api/courses/:courseId/Assignments", (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = assignmentsDao.createAssignment(assignment);
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

  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = modulesDao.createModule(module);
    res.send(newModule);
  });

  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courses = coursesDao.deleteCourse(courseId);
    res.json(courses);
  });

  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });
}
