/* The problem statement for this challenge can be viewed at: 
https://www.hackerrank.com/challenges/equality-in-a-array/problem */

// The boilerplate (lines 6-30 and 59-73) has been taken from the above source as well

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
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Logic for my code: Minimum number of deletions = Number of elements in the array - Frequency of the element which occurs the maximum number of times

function equalizeArray(arr) {
    let minDel = 0, maxFreq = 0, count = 0;
    // Getting the frequency of the element which occurs the maximum number of times
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count += 1;
            }
        }
        if (count > maxFreq) {
            maxFreq = count;
        }
        count = 0;
    }
    minDel = arr.length - maxFreq;
    return minDel;
}

/*
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = equalizeArray(arr);

    ws.write(result + '\n');

    ws.end();
}
*/