// Advent of Code 
// Day 1: Sonar Sweep Part 2

var fs = require('fs');
var count = 0;

// Access system file for input data extracted from website
fs.readFile('Day 1 Input.txt', 'utf8', function (err,data) {
    var depthofsea = data.toString()
    var depthofseaArray = depthofsea.split('\n').map(Number)
    for (i=3; i < depthofseaArray.length; i++) {
        var window1 = depthofseaArray[i-1] + depthofseaArray[i-2] + depthofseaArray[i-3];
        var window2 = depthofseaArray[i] + depthofseaArray[i-1] + depthofseaArray[i-2];
        if (window1 < window2) count++;
    console.log(count)
    // console.log(depthofseaArray)
    }
});
    // Convert data from file to string and configurate format adding data to array(delete 'ENTER' and 'String to Number' )



