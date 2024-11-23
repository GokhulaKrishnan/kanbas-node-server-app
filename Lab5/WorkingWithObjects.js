const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

// Here we are returning an object to the client.
export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  // Here we are sending only the title of the Assignment object.
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  // Here we are going to modify the existing object by getting an path parameter and modifying.
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  // Here we are going to modify the score of the assignment
  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = newScore;
    res.json(assignment);
  });

  app.get("/lab5/assignment/completed/:isComplete", (req, res) => {
    const { isComplete } = req.params;
    assignment.completed = isComplete;
    res.json(assignment);
  });
}
