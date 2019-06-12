#!/usr/bin/env node

const FizzBuzz = require('./FizzBuzz').FizzBuzz;

const [,, ...args] = process.argv;

if (args[0] && !isNaN(parseInt(args[0]))) {
    const number = parseInt(args[0]);

    for (let i = 1; i <= number; i++) {
        console.log(`${i}: ${FizzBuzz(i)}`)
    }
} else {
    console.log(`Usage: ./run.js Number e.g. ./run.js 15`);
}