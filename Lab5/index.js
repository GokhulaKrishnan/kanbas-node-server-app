import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import Module from "./module.js";
export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab5");
  });
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  Module(app);
  WorkingWithArrays(app);
}
