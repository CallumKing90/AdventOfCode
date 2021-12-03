import { testData, puzzleData } from "./data.js";
import { newlineStringToArray } from "../../utils/utils.js";

const currentInput = puzzleData;
const array = newlineStringToArray(currentInput);
const iterations = array[0].length;

let gamma = "";
let epsilon = "";

for (var index = 0; index < iterations; index++) {
  let zeroLength = 0;
  let oneLength = 0;

  for (var row = 0; row < array.length; row++) {
    const currentNumber = array[row][index];

    if (currentNumber == "1") {
      oneLength++;
    } else {
      zeroLength++;
    }
  }

  const prominentOne = oneLength > zeroLength;

  gamma += prominentOne ? `1` : `0`;
  epsilon += prominentOne ? `0` : `1`;
}

console.log(`gamma: ${parseInt(gamma, 2)}`, `epsilon: ${parseInt(epsilon, 2)}`);
console.log(`answer: ${parseInt(gamma, 2) * parseInt(epsilon, 2)}`);
