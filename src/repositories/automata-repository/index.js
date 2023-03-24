import * as fs from "fs";

const path = "../../database/db/steps.txt"

function getSteps() {
  const data = fs.readdirSync(path, "utf-8", function (error, data) {
    if (error) {
      console.log("fail read: " + error.message)
    } else {
      console.log(data)
    }
  })
  return data.split(" ");
}

function setSteps(data) {
  const convertData = data.join(" ");
  fs.writeFileSync(path, convertData, function (error) {
    if (error) {
      console.error("fail write: " + error.message);
      return false;
    }

  })
}

const automataRepository = {
  getSteps,
  setSteps,
}

export default automataRepository;
