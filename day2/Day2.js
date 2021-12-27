// Advent of Code 
// Day 2: Dive!

const fs = require('fs');

// Code for part1 wrapped in fuction to seperately run 
function part1 () {
// Access system file for input data extracted from website and format array(delete ENTER and latter SPACE)
    fs.readFile('Day2-Input.txt', "utf8", function (err,data) {
    const submove = data.toString();
    const submoveArray = submove.split('\n')
    let forward = 0
    let down = 0
    let up = 0

// Condition for request from problem: use first and second data in each item to select and calculate 
    submoveArray.forEach(item => {
        let eachsubMove = item.split(' ');
        if(eachsubMove[0] === "forward"){
            forward += parseInt(eachsubMove[1]);
        } else if(eachsubMove[0] === "down"){
            down += parseInt(eachsubMove[1])
        } else if(eachsubMove[0] === "up"){
            up += parseInt(eachsubMove[1])
        };
        let location = forward * (down - up)
        console.log(location);
    });
});
};

part1();

// Code for part2 wrapped in fuction to seperately run 
function part2 () {
// Access system file for input data extracted from website and format array(delete ENTER and latter SPACE)
    fs.readFile('Day2-Input.txt', "utf8", function (err,data) {
        const submove = data.toString();
        const submoveArray = submove.split('\n')
        let aim = 0
        let depth = 0
        let horizontal = 0

// Condition for request from problem: use first and second data in each item to select and calculate use aim to calculate down and up results 
        submoveArray.forEach(item => {
            let eachsubMove = item.split(' ');
            if(eachsubMove[0] === "forward"){
                horizontal += parseInt(eachsubMove[1]);
                depth += parseInt(eachsubMove[1] * aim);
            } else if(eachsubMove[0] === "down"){
                aim += parseInt(eachsubMove[1])
            } else if(eachsubMove[0] === "up"){
                aim -= parseInt(eachsubMove[1])
            };
            let location = horizontal * depth
            console.log(location);
        });
    });
    };
    
    part2();
