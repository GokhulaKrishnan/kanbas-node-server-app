// Importing it in a conventional way
// const express = require("express");

// To follow a modern way of importing we use "import"
import express from "express";
import HelloRoutes from "./Hello.js";
// import Lab5 from "./Lab5";
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import cors from "cors";
import "dotenv/config";
import session from "express-session";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
// import EnrollmentsRoutes from "./Kanbas/Enrollments/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/routes.js";
import QuestionRoutes from "./Kanbas/Questions/routes.js";
import UserAnswersRoutes from "./Kanbas/UserAnswers/routes.js";
import mongoose from "mongoose";
import "dotenv/config";

// Programatically connecting to the mongodb db
const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";

mongoose.connect(CONNECTION_STRING);
// Instance of express
const app = express();
app.use(
  cors({
    // support cookies
    // restrict cross origin resource
    // sharing to the react application

    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);

// configure cors first
// configure server sessions after cors
// this is a default session configuration that works fine
// locally, but needs to be tweaked further to work in a
// remote server such as AWS, Render, or Heroku. See later

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
// Listening to the paticular port 4000
app.listen(process.env.PORT || 4000);
ModuleRoutes(app);
AssignmentRoutes(app);
// EnrollmentsRoutes(app);
CourseRoutes(app);
UserRoutes(app);
HelloRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
UserAnswersRoutes(app);
Lab5(app);
