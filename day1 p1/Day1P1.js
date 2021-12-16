// Advent of Code 
// Day 1: Sonar Sweep Part 1

var fs = require('fs');
var count = 0;

// Access system file for input data extracted from website
fs.readFile('Day 1 P1 Input.txt', "utf8", function (err,data) {
    // Convert data from file to string and configurate format adding data to array(delete 'ENTER' and 'String to Number' )
    var depthofsea = data.toString()
    var depthofseaArray = depthofsea.split('\n').map(Number)
    
    // Itterate data and confirm latter data point is larger than previous
    for (i=0; i < depthofseaArray.length; i++) {
        if (depthofseaArray[i] - depthofseaArray[i+1] < 0) count++;
        console.log(count);
    }
});
