import particle from "../../database/particle.js";
import maze from "../../database/db.js";
import mazeService from "../maze-service/index.js";

export function moveParticle(direction) {
  let { l, c } = particle;
  if (direction === "n") {
    l--;
  }
  else if (direction === "e") {
    c++;
  }
  else if (direction === "s") {
    l++;
  }
  else if (direction === "w") {
    c--;
  }
  if (l < 0 || c < 0 || l >= maze["init"].length || c >= maze["init"][l].length) return "invalid";
  particle.c = c;
  particle.l = l;
  const updateMaze = mazeService.updateMaze();
  if (updateMaze[l][c] === 1) return "lose";
  if (updateMaze[l][c] === 4) return "win";
  return "ok";
}