/*
PS2.P2.js - CS412 Summer 2020
Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn.
Use the generator to print the words, one per line, of the string “All I know is something like a
bird within her sang”. Hint: Splitting a string returns an Array.
 */

function* generateStr (str) {
    yield* str.split(' '); //yield one sentence at a time
}

let x = generateStr("All I know is something like a bird within her sang");
let words = x.next();
let count = 0;
while(!words.done){
    console.log(`Word ${count}: ${words.value}`);
    words = x.next();
    count += 1;
}
