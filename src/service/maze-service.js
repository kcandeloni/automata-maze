import matriz from "../database/db.js";

function updateMaze(l, c) {
  const newMatriz = [];
  let newLine = [];
  for (let i = 0; i < matriz.length; i++) {
    newLine = [];
    for (let j = 0; j < matriz[i].length; j++) {
      newLine.push(checkPosition(i, j));
    }
    newMatriz.push(newLine);
  }
  return newMatriz;
}

function checkPosition(i, j) {
  if (matriz[i][j] > 1) {
    return matriz[i][j];
  }

  /*
    nw  n   ne
    w   ij  e
    sw  s   se  */

  const safe_sub_i = i - 1 < 0 ? true : false;
  const safe_add_i = i + 1 >= matriz.length ? true : false;
  const safe_sub_j = j - 1 < 0 ? true : false;
  let safe_add_j = true;
  if (!safe_add_i) {
    safe_add_j = j + 1 >= matriz[i].length ? true : false;
  }

  const nw = safe_sub_i || safe_sub_j ? 0 : matriz[i - 1][j - 1];
  const n = safe_sub_j ? 0 : matriz[i][j - 1];
  const ne = safe_add_i || safe_sub_j ? 0 : matriz[i + 1][j - 1];
  const w = safe_sub_i ? 0 : matriz[i - 1][j];
  const e = safe_add_i ? 0 : matriz[i + 1][j];
  const sw = safe_sub_i || safe_add_j ? 0 : matriz[i - 1][j + 1];
  const s = safe_add_j ? 0 : matriz[i][j + 1];
  const se = safe_add_i || safe_add_j ? 0 : matriz[i + 1][j + 1];

  const nearbyGreens = [nw, n, ne, w, e, sw, s, se];
  let result = 0;
  for (let k = 0; k < nearbyGreens.length; k++) {
    if (nearbyGreens[k] !== 0) result++;
  }


  if (matriz[i][j]) {
    // verdes
    if (result === 4 || result === 5) {
      return 1;
    }
    return 0;
  }
  // brancas
  if (result < 2 || result > 4) {
    return 0;
  }
  return 1;
}

function getMaze() {
  return matriz;
}

const mazeService = {
  updateMaze,
  getMaze
}

export default mazeService;
