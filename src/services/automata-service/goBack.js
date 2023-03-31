import automata from "../../database/automata.js";
import step from "../../database/step.js"

export default function goBack() {
  delete automata[step.n];
  step.n--;
  if (automata[step.n].op.R) {
    automata[step.n].op.R = 0;
  }
  if (automata[step.n].op.D) {
    automata[step.n].op.D = 0;
  }
  if (automata[step.n].op.W) {
    automata[step.n].op.W = 0;
  }
  if (automata[step.n].op.L) {
    automata[step.n].op.L = 0;
  }
  step.n--;
}
