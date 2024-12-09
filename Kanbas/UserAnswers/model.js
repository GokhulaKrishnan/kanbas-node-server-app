import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("UserAnswersModel", schema);
export default model;
