import maze from "../../database/db.js";

export function getMaze() {
  let currentMaze;
  if (!maze["current"]) {
    currentMaze = maze["init"];
  } else {
    currentMaze = maze["current"];
  }

  return currentMaze;
}
