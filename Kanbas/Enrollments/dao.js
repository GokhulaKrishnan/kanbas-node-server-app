// import Database from "../Database/index.js";
// import model from "./model.js";

// // export function enrollUserInCourse(userId, courseId) {
// //   const { enrollments } = Database;
// //   enrollments.push({ _id: Date.now(), user: userId, course: courseId });
// // }

// // export function findAllCourses() {
// //   const { courses } = Database;
// //   return courses;
// // }

// // export function findEnrollmentsForCourse(courseId) {
// //   const { enrollments } = Database;
// //   if (courseId) {
// //     return enrollments.filter((enrollment) => enrollment.course === courseId);
// //   }
// //   return enrollments;
// // }

// /////////////////////////////

// export function findAllUserEnrollments(userId) {
//   const enrollments = await model.find({ user: userId }).populate("course");
//  return enrollments.map((enrollment) => enrollment.course);
//   // const { enrollments } = Database;
//   // const results = enrollments.filter((enrollment) => userId == enrollment.user);
//   // return results;
// }

// export function findAllCourses() {
//   const { courses } = Database;
//   return courses;
// }

// export function enrollUserInCourse(newEnroll) {
//   return model.create({ user, course });
//   // const newEnrollment = {
//   //   _id: new Date().getTime().toString(),
//   //   user: newEnroll.user,
//   //   course: newEnroll.course,
//   // };
//   // // Database.enrollments.push(newEnrollment);
//   // Database.enrollments = [...Database.enrollments, newEnrollment];

//   // return newEnrollment;
// }

// export function unenrollUserFromCourse(user, course) {
//   const { enrollments } = Database;
//   Database.enrollments = enrollments.filter(
//     (enrollment) => enrollment.user !== user || enrollment.course !== course
//   );
// }

//////////////////////////// Newww

import model from "./model.js";
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  //   console.log(userId);
  //   console.log(enrollments);
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
