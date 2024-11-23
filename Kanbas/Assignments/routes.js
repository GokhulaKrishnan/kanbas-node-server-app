import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Modifying the assignment
  app.put("/api/Assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    console.log("reached", assignmentId);
    console.log("reached", assignmentUpdates);

    const status = assignmentsDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.send(status);
  });

  // Deleting
  app.delete("/api/Assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });
}
