/* The problem statement for this challenge can be viewed at: 
https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup */

// The boilerplate (lines 6-30 and 64-78) has been taken from the above source as well

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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    let str = '', index = 0;
    // Getting the desired string of length n
    while (index < s.length) {
        str += s.charAt(index);
        index += 1;
        if (index === s.length) {
            index = 0;
        }
        if (str.length === n) {
            break;
        }
    }
    let count = 0;
    // Counting the number of a's
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'a') {
            count += 1;
        }
    }
    return count;
}

/*
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
*/