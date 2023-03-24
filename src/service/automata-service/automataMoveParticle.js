import automataRepository from "../../repositories/automata-repository/index.js";
import particleService from "../particle-service/index.js";
import mazeService from "../maze-service/index.js";
import automata from "../../database/automata.js";
import particle from "../../database/particle.js";
import maze from "../../database/db.js";

export function generateSteps() {
  const direction = {
    1: "R",
    2: "D",
    3: "W",
    4: "L",
  };
  let play = "ok";
  let current = 1;
  let steps;

  while (play === "ok") {
    let { nextL, nextC, isValid } = particleService.validDirection(direction[current]);

    if (nextL === 64 && nextC === 84) return { steps: automata.steps, result: play, particle, l: automata.steps.length };

    if (isValid && !mazeService.checkPosition(nextL, nextC)
      && !automata.recall.includes(direction[current])
      && !automata.goBack.includes(direction[current])
    ) {
      play = particleService.moveParticle(nextL, nextC);
      if (play === "ok" || play === "win") {
        automata.steps.push(direction[current]);
        current = 1;
        automata.goBack = automata.recall;
        automata.recall = [];
        if (play === "win") {
          return { steps: automata.steps, result: play, particle, l: automata.steps.length };
        }
      }
    }
    else if (current < 5) {
      current++;
    }
    else {
      console.log("RESULT: " + play);
      steps = [...automata.steps];
      console.log("STEPS :", automata.steps);
      mazeService.resetMaze();
      let recall = automata.steps.pop();
      automata.recall.push(recall);
      console.log(automata);
      for (let i = 0; i < automata.steps.length; i++) {
        let { nextL, nextC } = particleService.validDirection(automata.steps[i]);
        particleService.moveParticle(nextL, nextC);
      }
      play = "lose";
    }
  }

  return { steps, result: play, particle };
}