import automata from "../../database/automata.js";
import step from "../../database/step.js"
import particleService from "../particle-service/index.js";
import mazeService from "../maze-service/index.js";
import goBack from "./goBack.js";

export default function move() {
  if (!automata[step.n]) {
    automata[step.n] = {
      l: automata[step.n - 1].l,
      c: automata[step.n - 1].c,
      step: step.n,
      op: {
        R: "",
        D: "",
        W: "",
        L: ""
      }
    };
  }
  const direction = {
    1: "R",
    2: "D",
    3: "W",
    4: "L",
  };
  for (let i = 1; i < 5; i++) {
    if (automata[step.n].op[direction[i]] !== 0) {
      let { nextL, nextC, isValid } = particleService.validDirection(direction[i], step.n);
      if (nextL === 64 && nextC === 84) return "win";
      if (isValid && !mazeService.checkPosition(nextL, nextC)) {
        automata[step.n].op[direction[i]] = 1;
        automata[step.n].l = nextL;
        automata[step.n].c = nextC;
        return particleService.moveParticle();
      }
      automata[step.n].op[direction[i]] = 0;
    }
  }
  goBack();
  return "Segue o jogo";
}