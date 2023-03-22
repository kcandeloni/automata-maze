import mazeService from "../service/maze-service/index.js";

export async function updateMaze(req, res) {
  let update = await mazeService.updateMaze()
  res.send(update).status(202)
}

export async function getMaze(req, res) {
  const matriz = await mazeService.getMaze();
  res.send(matriz).status(200);
}