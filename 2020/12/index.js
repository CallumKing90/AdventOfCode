const data = `F10
N3
F7
R90
F11`;

const tidyData = data.split(/\n/g);

const directions = ["N", "E", "S", "W"];

let directionFacing = "E";
let values = {
  E: 0,
  W: 0,
  N: 0,
  S: 0,
};

tidyData.forEach((instructionString) => {
  const instruction = instructionString.slice(0, 1);
  const int = instructionString.slice(1);

  console.log(instruction);
  console.log(int);

  switch (instruction) {
    case "N":
      if (!values.south) {
        console.log(`values.south`, values.S);
      }
      break;
    case "S":
      if (!values.north) {
        console.log(`values.north`, values.N);
      }
      break;
    case "W":
      if (!values.east) {
        console.log(`values.east`, values.E);
      }
      break;
    case "E":
      if (!values.west) {
        console.log(`values.west`, values.W);
      }
      break;
    case "F":
      makeMoves(directionFacing, int);
      break;
    case "R":
      break;
    case "L":
      break;
    default:
      console.log(`${instruction} not covered`);
      break;
  }
});

function makeMoves(direction, numberOfMoves) {
  let remainingMoves = numberOfMoves;

  console.log(`makeMoves`);

  while (remainingMoves) {
    console.log(direction);
    console.log(remainingMoves);
    remainingMoves--;
  }
}
