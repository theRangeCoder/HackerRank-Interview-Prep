/* The problem statement for this challenge can be viewed at: 
https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup */

// The boilerplate (lines 6-30 and 95-109) has been taken from the above source as well

/*
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
*/

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

//  returns the number of elements that should be removed, from index 0, to reach the sea level
function toSL(seaLev, ind, ct2, stepArr1) {
    while (seaLev !== 0) {
        switch(stepArr1[ind]) {
            case 'U':
                seaLev += 1;
                ct2 += 1;
                ind += 1;
                break;

            case 'D':
                seaLev -= 1;
                ct2 += 1;
                ind += 1;
                break;
        }
    }
    return ct2;
}

function countingValleys(steps, path) {
    // storing the individual steps in an array
    let stepArr = path.split('');
    // storing the status of the point, above or below sea level
    let seaLevel = 0;
    // to store the valley count
    let count = 0, index, count2, l = stepArr.length;
    while (l > 0) {
        switch(stepArr[0]) {
            case 'U':
                count2 = index = seaLevel = 1;
                count2 = toSL(seaLevel, index, count2, stepArr);
                // removing the steps that form a mountain
                stepArr.splice(0,count2);
                l = stepArr.length;
                break;

            case 'D':
                index = count2 = 1;
                seaLevel = -1;
                count2 = toSL(seaLevel, index, count2, stepArr);
                // increasing the valley count by 1
                count += 1;
                // removing the elements that make up the valley
                stepArr.splice(0,count2);
                l = stepArr.length;
                break;
        }
        
    }
    // returning the valley count
    return count;
}

/*
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
*/
