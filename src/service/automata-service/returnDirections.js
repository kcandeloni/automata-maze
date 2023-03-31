import automata from "../../database/automata.js";

export default function returnList() {
  const list = [];

  for (let i = 0; automata[i] !== undefined; i++) {
    console.log(automata[i]);
    if (automata[i].op.R === 1) {
      list.push("R");
    }
    else if (automata[i].op.D === 1) {
      list.push("D");
    }
    if (automata[i].op.L === 1) {
      list.push("L");
    }
    if (automata[i].op.W === 1) {
      list.push("U");
    }
  }
  return list;
}