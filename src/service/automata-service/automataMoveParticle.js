import automata from "../../database/automata.js";
import move from "./move.js";
import step from "../../database/step.js";
import returnList from "./returnDirections.js";

export function generateSteps() {
  let play = "ok";

  while (play !== "win") {
    play = move();
    step.n++;
    console.log(play);
  }
  return returnList();
}