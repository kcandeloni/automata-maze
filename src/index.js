import express, { json } from "express";

import {
  updateMaze,
  getMaze
} from "./controllers/maze-controller.js";

const app = express();
app.use(json());

app
  .get("/", getMaze)
  .get("/update", updateMaze);

app.listen(3000, () => {
  console.log(`Server is up and running on port 3000`);
});