import redisClient from "../../database/config/redis.js";

export async function resetMaze() {
  await redisClient.del("cachedMaze");
}