import Database from "../Database/index.js";
import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
  // const { assignments } = Database;
  // return assignments.filter((assignment) => assignment.course === courseId);
}

export function updateAssignment(AssignmentId, assignmentUpdates) {
  return model.updateOne({ _id: AssignmentId }, assignmentUpdates);
  // Getting the assignment from the database
  // const { assignments } = Database;
  // // Finding the correct assignment using assignment id.
  // const assignment = assignments.find(
  //   (assignment) => assignment._id === AssignmentId
  // );

  // // Updating
  // Object.assign(assignment, assignmentUpdates);
  // return assignment;
}

// Deleting
export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
  // const { assignments } = Database;
  // Database.assignments = assignments.filter(
  //   (assignment) => assignment._id !== assignmentId
  // );
}

export function createAssignment(assignment) {
  delete assignment._id;
  return model.create(assignment);
  // const newAssignment = { ...assignment, _id: Date.now().toString() };
  // Database.assignments = [...Database.assignments, newAssignment];
  // return newAssignment;
}
