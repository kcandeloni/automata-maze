import redisClient from "../../database/config/redis.js";
import maze from "../../database/db.js";

export async function getMaze() {
  let currentMaze;
  const cachedMaze = await redisClient.get("cachedMaze");
  if (cachedMaze) {
    currentMaze = JSON.parse(cachedMaze);
  } else {
    currentMaze = maze;
  }

  return currentMaze;
}
