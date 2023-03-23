import maze from "../database/db.js";
import particleService from "../service/particle-service/index.js";

export function move(req, res) {
  const { direction } = req.body;
  const result = particleService.moveParticle(direction);
  res.send(result).status(202);
}