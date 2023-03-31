import automata from "../../database/automata.js";
import step from "../../database/step.js";
import mazeService from "../maze-service/index.js";

export function moveParticle() {
  const l = automata[step.n].l;
  const c = automata[step.n].c;
  const updateMaze = mazeService.updateMaze();
  if (updateMaze[l][c] === 1) return "lose";
  if (updateMaze[l][c] === 4) return "win";
  return "ok";
}