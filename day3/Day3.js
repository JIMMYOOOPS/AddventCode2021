// Advent of Code 
// Day 3: Binary Diagnostic

const fs = require('fs');

function part1() {

    let gammaRate = [];
    let epsilonRate = [];

    // Access system file for input data extracted from website and format array(delete ENTER)
    fs.readFile ('input.txt', 'utf8', (err, data) => { 
        const reportArray = data.toString().split('\n');

    // Itterate through each item and sum the cumulitive number to determine whether gamma or epsilon should be pushed
        for (let i = 0; i < reportArray[0].length; i++) {
        let totalZeros = 0;
        let totalOnes = 0;
            reportArray.forEach((reportNumber) => {
                +reportNumber[i]  === 0 ? totalZeros++ : totalOnes++;
            });
                totalZeros > totalOnes
                    ? gammaRate.push(0) && epsilonRate.push(1)
                    : gammaRate.push(1) && epsilonRate.push(0);             
        };

    // Change array to decimal by joining items and coverting string to int    
            const gammaRateDec = parseInt(gammaRate.join(""), 2);
            const epsilonRateDec = parseInt(epsilonRate.join(""), 2);
            const powerConsumption = gammaRateDec * epsilonRateDec;
            console.log(powerConsumption);
    });
};

part1();

function part2() {

    const typeOfO2 = 'O2';
    const typeOfCO2 = 'CO2';

    function convertDataToArray(data) {
    return data.toString().split('\n');
    }

    function binaryToDecimal(binary) {
    return parseInt(binary.join(''), 2);
    }

    function getRateAsBinary(arr, type) {
    for (let i = 0; i < arr[0].length; i++) {
        let totalZeros = 0;
        let totalOnes = 0;
        let selectedBit = null;

        if (arr.length === 1) return arr;

        arr.forEach((binaryNumber) => {
        +binaryNumber[i] === 0 ? totalZeros++ : totalOnes++;
        });

        if (type === "O2") selectedBit = totalOnes >= totalZeros ? 1 : 0;
        if (type === "CO2") selectedBit = totalOnes < totalZeros ? 1 : 0;

        arr = arr.filter((binaryNumber) => +binaryNumber[i] === selectedBit);
    }
    return arr;
    }

    fs.readFile("./input.txt", (_, data) => {
    binaryArray = convertDataToArray(data);
    const O2GenRateBinary = getRateAsBinary(binaryArray, typeOfO2);
    const CO2ScrRateBinary = getRateAsBinary(binaryArray, typeOfCO2);

    const O2GenRate = binaryToDecimal(O2GenRateBinary);
    const CO2ScrRate = binaryToDecimal(CO2ScrRateBinary);
    const lifeSupportRating = O2GenRate * CO2ScrRate;

    console.log(lifeSupportRating);
    });
};

part2();

// 1. "start with the full list of binary numbers from your diagnostic report and consider just the first bit of those numbers"
// 2. "Keep only numbers selected by the bit criteria for the type of rating value for which you are searching. Discard numbers which do not match the bit criteria."
// 3. "If you only have one number left, stop; this is the rating value for which you are searching."
// 4. "Otherwise, repeat the process, considering the next bit to the right."
// 5. "oxygen generator rating = the most common value (0 or 1) in the current bit position, If 0 and 1 are equally common, keep values with a 1 in the position being considered."
// 6. "To find CO2 scrubber rating, determine the least common value (0 or 1), If 0 and 1 are equally common, keep values with a 0."

