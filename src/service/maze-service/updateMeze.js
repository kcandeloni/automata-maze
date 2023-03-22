import redisClient from "../../database/config/redis.js";
import maze from "../../database/db.js";
import { checkPosition } from "./checkPositionMaze.js";

export async function updateMaze() {

  const newMaze = [];
  let newLine = [];
  for (let i = 0; i < maze.length; i++) {
    newLine = [];
    for (let j = 0; j < maze[i].length; j++) {
      newLine.push(await checkPosition(i, j));
    }
    newMaze.push(newLine);
  }
  await redisClient.set("cachedMaze", JSON.stringify(newMaze))
  return newMaze;
}
