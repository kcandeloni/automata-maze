import automataService from "../services/automata-service/index.js";

export function generate(req, res) {
  const result = automataService.generateSteps();
  res.send(result).status(200);
}