/*
CS412 Summer 2020
Problem 3 (PS1.P3.js)
 */

//Function 1: takes a string and applies a function on it
const fString = (str, fun) => fun(str);

//splitOnC function uses fSting to split array on c characters
 const exp1 = fString("supercalifragilisticexpialidocious", function splitOnC(str) {
     return str.split(/(?=c)/g );
 })

//bigA function turns a into A
const exp2 = fString( "ladygaga", function bigA(str) {
    obj = {
        originalString: str,
        modifiedString: str.split('a').join('A'),
        numberReplaced: str.split("a").length -1,
        length: str.length
    }
    return obj;
});

console.log(`P3: expression 1 test: ${exp1}`);
console.log(`P3: expression 2 test: `, exp2);

module.exports = {fString}











