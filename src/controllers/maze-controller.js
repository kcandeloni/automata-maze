import mazeService from "../service/maze-service/index.js";

export function updateMaze(req, res) {
  let update = mazeService.updateMaze()
  res.send(update).status(202)
}

export function getMaze(req, res) {
  const matriz = mazeService.getMaze();
  res.send(matriz).status(200);
}