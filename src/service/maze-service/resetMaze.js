import maze from "../../database/db.js";
import particle from "../../database/particle.js";

export function resetMaze() {
  maze["current"] = undefined;
  particle.l = 0;
  particle.c = 0;
}