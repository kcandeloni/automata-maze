import particle from "../../database/particle.js";
import maze from "../../database/db.js";

export function validDirection(direction) {
  let { l, c } = particle;
  if (direction === "W") {
    l--;
  }
  else if (direction === "R") {
    c++;
  }
  else if (direction === "D") {
    l++;
  }
  else if (direction === "L") {
    c--;
  }
  if (l < 0 || c < 0 || l >= maze["init"].length || c >= maze["init"][l].length) return { isValid: false };
  return { nextL: l, nextC: c, isValid: true };
}
