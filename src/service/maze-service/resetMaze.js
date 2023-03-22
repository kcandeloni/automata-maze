import maze from "../../database/db.js";

export function resetMaze() {
  maze["current"] = undefined;
}