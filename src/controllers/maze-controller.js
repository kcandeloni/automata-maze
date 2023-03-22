import mazeService from "../service/maze-service.js";

export function updateMaze(req, res) {
  let update = mazeService.updateMaze(30, 65)
  res.send(update).status(200)
}

export function getMaze(req, res) {
  const matriz = mazeService.getMaze();
  res.send(matriz).status(200);
}