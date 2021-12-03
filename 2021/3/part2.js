import { testData, puzzleData } from "./data.js";
import { newlineStringToArray } from "./../../utils/utils.js";

const currentInput = puzzleData;
const array = newlineStringToArray(currentInput);

const getFinalNumber = async (data, getValue = "high", int = 0) => {
  let zeroArray = [];
  let oneArray = [];

  for (var row = 0; row < data.length; row++) {
    const currentNumber = data[row][int];

    if (Number(currentNumber) === 1) {
      oneArray = [...oneArray, data[row]];
    } else {
      zeroArray = [...zeroArray, data[row]];
    }
  }

  const prominentOne =
    getValue === "high"
      ? oneArray.length >= zeroArray.length
      : zeroArray.length <= oneArray.length;

  if (getValue === "high") {
    data = prominentOne ? [...oneArray] : [...zeroArray];
  } else {
    data = prominentOne ? [...zeroArray] : [...oneArray];
  }

  if (data.length === 1) return data[0];

  const nextInt = int + 1;
  return await getFinalNumber(data, getValue, nextInt);
};

let oxygenArray = [...array];
let scrubberArray = [...array];

let oxygenValue = await getFinalNumber(oxygenArray);
let scrubberValue = await getFinalNumber(scrubberArray, "low");

console.log(
  `answer: ${parseInt(await oxygenValue, 2) * parseInt(await scrubberValue, 2)}`
);
