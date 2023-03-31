import maze from "../../database/db.js";
import automata from "../../database/automata.js";
import mazeService from "../maze-service/index.js";

export default function goBackMaze() {
  maze["current"] = undefined;
  for (let i = 1; automata[i] !== undefined; i++) {
    mazeService.updateMaze();
  }
}