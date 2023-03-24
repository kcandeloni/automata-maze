import particle from "../../database/particle.js";
import maze from "../../database/db.js";
import mazeService from "../maze-service/index.js";

export function moveParticle(l, c) {
  particle.c = c;
  particle.l = l;
  const updateMaze = mazeService.updateMaze();
  if (updateMaze[l][c] === 1) return "lose";
  if (updateMaze[l][c] === 4) return "win";
  return "ok";
}