/* The problem statement for this challenge can be viewed at: 
https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup */

// The boilerplate (lines 5-29 and 79-93) has been taken from the above source as well

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

// Creating an arrSort(arr) function to sort the elements of an array in ascending order
function arrSort(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j]; 
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // sorting the color array values in ascending order
    ar = arrSort(ar);

    // initializing the pair counting variable to zero
    let count = 0;

    while (ar.length > 1) {
        if (ar[0] === ar[1]) {
            // removing the elements of the pair from the array
            ar.splice(0,2); 

            // increasing the pair count
            count += 1;
        }
        else {
            // removing only the first element of the array (unpaired element)
            ar.shift();
        }
    }

    // returning the pair count
    return count;
}

/*
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
*/
