import move from "./move.js";
import step from "../../database/step.js";
import returnList from "./returnDirections.js";

export function generateSteps() {
  let play = "ok";

  while (play !== "win") {
    play = move();
    step.n++;
  }
  return returnList();
}