import maze from "../database/db.js";
import particleService from "../service/particle-service/index.js";

export function move(req, res) {
  const { l, c } = req.body;
  const result = particleService.moveParticle(l, c);
  res.send(result).status(202);
}