import { testData, puzzleData } from "./data.js";

let previousNumber;
let increased = 0;
let decreased = 0;

const currentData = puzzleData;

for (var index = 3; index < currentData.length; index++) {
  const currentAmount =
    currentData[index] + currentData[index - 1] + currentData[index - 2];

  const previousAmount =
    currentData[index - 3] + currentData[index - 2] + currentData[index - 1];

  console.log(`${previousAmount} || ${currentAmount}`);

  if (currentAmount > previousAmount) {
    increased++;
  }
}

console.log(`increased: ${increased}`);
