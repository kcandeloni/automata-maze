import express, { json } from "express";

import {
  updateMaze,
  getMaze
} from "./controllers/maze-controller.js";

import { move } from "./controllers/particle-controller.js";

import { resetMaze } from "./service/maze-service/resetMaze.js";

const app = express();
app.use(json());

app
  .get("/", getMaze)
  .get("/update", updateMaze)
  .get("/move", move)
  .get("/reset", async (req, res) => {
    resetMaze();
    res.sendStatus(202);
  });

app.listen(3000, () => {
  console.log(`Server is up and running on port 3000`);
});