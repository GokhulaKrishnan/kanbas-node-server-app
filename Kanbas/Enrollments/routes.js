import * as enrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  //   // Getting all the enrollments
  //   app.get("/api/enrollments", (req, res) => {
  //     const enrollments = enrollmentsDao.findEnrollmentsForCourse();
  //     res.json(enrollments);
  //   });

  //   // Fetch enrollments for a specific course
  //   app.get("/api/enrollments/:courseId", (req, res) => {
  //     const { courseId } = req.params;
  //     const enrollments = findEnrollmentsForCourse(courseId);
  //     res.json(enrollments);
  //   });

  //////////////////////////

  app.get("/api/Dashboard/enrollments/:userId", (req, res) => {
    const { userId } = req.params;
    const result = enrollmentsDao.findAllUserEnrollments(userId);
    return res.json(result);
  });

  app.get("/api/Dashboard/courses", (req, res) => {
    // const { courseId } = req.params;
    const result = enrollmentsDao.findAllCourses();
    return res.json(result);
  });

  // Route to enroll a user in a course
  app.post("/api/Dashboard/enrollments/newEnroll", (req, res) => {
    const newEnroll = req.body;
    const newEnrollment = enrollmentsDao.enrollUserInCourse(newEnroll);
    res.json(newEnrollment);
  });

  // Route to unenroll a user from a course
  app.delete("/api/Dashboard/enrollments/unenroll", (req, res) => {
    const { user, course } = req.body;
    enrollmentsDao.unenrollUserFromCourse(user, course);
    res.json({ message: "Unenrolled successfully" });
  });

  ////////////////////////////

  // Find whether the user is enrolled in the course
  //   app.get("/api/dashboard/:courseId", (req, res) => {
  //     const { courseId } = req.params;
  //     const result = enrollmentsDao.findEnrollmentsForCourse(courseId);
  //     return res.json(result);
  //   });

  // Enroll in a course
  //   app.post("/api/dashboard", (req, res) => {
  //     const { userId, courseId } = req.body;

  //     // Prevent duplicate enrollment
  //     const alreadyEnrolled = findEnrollmentsForCourse(courseId).some(
  //       (enrollment) => enrollment.user === userId
  //     );

  //     if (alreadyEnrolled) {
  //       return res.status(400).send("User is already enrolled in this course.");
  //     }

  //     enrollUserInCourse(userId, courseId);
  //     res.status(201).json({ userId, courseId });
  //   });

  //   // Unenroll from a course
  //   app.delete("/api/enrollments", (req, res) => {
  //     const { user, course } = req.body;

  //     // Filter out the enrollment
  //     const initialLength = enrollments.length;
  //     enrollments = enrollments.filter(
  //       (enrollment) => enrollment.user !== user || enrollment.course !== course
  //     );

  //     if (initialLength === enrollments.length) {
  //       return res.status(404).send("Enrollment not found.");
  //     }

  //     res.sendStatus(204);
  //   });
}
