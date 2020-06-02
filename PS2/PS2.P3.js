/*
PS2.P3.js - CS412, Summer 2020
 */

const cubed = x => x*x*x;
const cubeAll = [1,2,3,4,5,6,7].map(cubed);
console.log(`P3: f(x^3) on [1,2,...,7] is: ${cubeAll}`)
