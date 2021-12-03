import { testData, puzzleData } from "./data.js";
import { newlineStringToArray } from "./../../utils/utils.js";

const currentData = puzzleData;
const array = newlineStringToArray(currentData);

let depth = 0;
let horizontal = 0;
let aim = 0;

array.forEach((item) => {
  const [direction, value] = item.split(" ");

  const number = Number(value);

  switch (direction) {
    case "forward":
      horizontal += number;
      const newVal = aim ? aim * number : 0;
      depth += newVal;
      break;
    case "up":
      // depth -= number;
      aim -= number;
      break;
    case "down":
      // depth += number;
      aim += number;
      break;
    default:
      console.log(`no value`);
  }

  console.log(`depth: ${depth}`, `horizontal: ${horizontal}`, `aim: ${aim}`);
});

console.log(depth * horizontal);
