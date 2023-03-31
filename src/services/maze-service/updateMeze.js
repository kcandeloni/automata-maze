import maze from "../../database/db.js";
import { checkPosition } from "./checkPositionMaze.js";

export function updateMaze() {
  const newMaze = [];
  let newLine = [];
  for (let i = 0; i < maze["init"].length; i++) {
    newLine = [];
    for (let j = 0; j < maze["init"][i].length; j++) {
      newLine.push(checkPosition(i, j));
    }
    newMaze.push(newLine);
  }
  maze["current"] = newMaze;
  return newMaze;
}
