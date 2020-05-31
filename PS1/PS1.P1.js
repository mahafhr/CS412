/*
CS412 - Summer 2020
Problem 1 (PS1.P1.js)
input: a string
output: a new string that contains letters in alphabetical order. */

const sortString = str => str.split('').sort().join('')


console.log(`P1: badface in order is: ${sortString("lazydog")}`)
