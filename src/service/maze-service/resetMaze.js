import maze from "../../database/db.js";
import automata from "../../database/automata.js";
import step from "../../database/step.js";

export function resetMaze() {
  maze["current"] = undefined;
  step.n = 1;
  automata[0] = {
    0: {
      l: 0,
      c: 0,
      step: 0,
      op: {
        R: 1,
        D: "",
        W: "",
        L: ""
      }
    }
  }
  for (let i = 1; automata[i] !== undefined; i++) {
    delete automata[i];
  }
}