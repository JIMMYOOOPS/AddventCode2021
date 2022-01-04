const fs = require("fs");

let gammaRate = [];
let epsilonRate = [];

function convertDataToArray(data) {
  return data.toString().split('\n');
}

function binaryToDecimal(binary) {
  return parseInt(binary.join(""), 2);
}

fs.readFile("input.txt", (err, data) => {
  const binaryArray = convertDataToArray(data);

  for (let i = 0; i < binaryArray[0].length; i++) {
    let totalZeros = 0;
    let totalOnes = 0;
    binaryArray.forEach((binaryNumber) => {
      +binaryNumber[i] === 0 ? totalZeros++ : totalOnes++;
    });
    totalZeros > totalOnes
      ? gammaRate.push(0) && epsilonRate.push(1)
      : gammaRate.push(1) && epsilonRate.push(0);
  }

  const gammaRateDec = binaryToDecimal(gammaRate);
  const epsilonRateDec = binaryToDecimal(epsilonRate);
  const powerConsumption = gammaRateDec * epsilonRateDec;

  console.log(gammaRate); //3320834
});