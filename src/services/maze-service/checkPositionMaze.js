import maze from "../../database/db.js";

export function checkPosition(i, j) {
  let currentMaze;
  if (!maze["current"]) {
    currentMaze = maze["init"];
  } else {
    currentMaze = maze["current"];
  }

  if (currentMaze[i][j] > 1) {
    return currentMaze[i][j];
  }

  /*
    nw  n   ne
    w   ij  e
    sw  s   se  */

  const safe_sub_i = i - 1 < 0 ? true : false;
  const safe_add_i = i + 1 >= currentMaze.length ? true : false;
  const safe_sub_j = j - 1 < 0 ? true : false;
  let safe_add_j = true;
  if (!safe_add_i) {
    safe_add_j = j + 1 >= currentMaze[i].length ? true : false;
  }

  const nw = safe_sub_i || safe_sub_j ? 0 : currentMaze[i - 1][j - 1];
  const n = safe_sub_j ? 0 : currentMaze[i][j - 1];
  const ne = safe_add_i || safe_sub_j ? 0 : currentMaze[i + 1][j - 1];
  const w = safe_sub_i ? 0 : currentMaze[i - 1][j];
  const e = safe_add_i ? 0 : currentMaze[i + 1][j];
  const sw = safe_sub_i || safe_add_j ? 0 : currentMaze[i - 1][j + 1];
  const s = safe_add_j ? 0 : currentMaze[i][j + 1];
  const se = safe_add_i || safe_add_j ? 0 : currentMaze[i + 1][j + 1];

  const nearbyGreens = [nw, n, ne, w, e, sw, s, se];
  let result = 0;
  for (let k = 0; k < nearbyGreens.length; k++) {
    if (nearbyGreens[k] !== 0) result++;
  }

  if (currentMaze[i][j]) {// verdes
    if (result === 4 || result === 5) {
      return 1;
    }
    return 0;
  }// brancas
  if (result < 2 || result > 4) {
    return 0;
  }
  return 1;
}
