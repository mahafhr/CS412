/*
CS412 - Summer 2020
Problem 2 (PS1.P2.js)
A function that determines the operator (+, *, -, or /) embedded in the string
Return a function to implement the input operator that returns the result

>> Question: is there anyway to reduce my code in the return statement and still return a function?
 */


const evaluate = str => {
    let operator = str.substring(1,2)

    switch (operator) {
        case '+':
            //returns a function as stated in assignment
            return eq => parseInt(eq.substring(0,1)) + parseInt(eq.substring(2,3));
            break;

        case '-':
            return eq => parseInt(eq.substring(0,1)) - parseInt(eq.substring(2,3));
            break;

        case '*':
            return eq => parseInt(eq.substring(0,1)) * parseInt(eq.substring(2,3));

        case '/':
            return eq => ((eq.substring(2,3)==0) ?
                new Error('Cannot divide by zero') :
                parseInt(eq.substring(0,1)) /  parseInt(eq.substring(2,3)));
    }

}

//test copied from assignment
const expression = '8+7';
let operator = evaluate(expression);
console.log(`P2: ${expression} = ${operator(expression)}`)
module.exports = { evaluate }
