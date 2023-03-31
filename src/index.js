import express, { json } from "express";

import {
  updateMaze,
  getMaze,
  resetMaze
} from "./controllers/maze-controller.js";
import { move } from "./controllers/particle-controller.js";
import { generate } from "./controllers/automata-controller.js";

const app = express();
app.use(json());

app
  .get("/", getMaze)
  .get("/update", updateMaze)
  .post("/move", move)
  .get("/generate", generate)
  .get("/reset", resetMaze);

app.listen(3000, () => {
  console.log(`Server is up and running on port 3000`);
});