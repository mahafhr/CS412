/*
PS2.P1.js  - Summer 2020
 */

//generate fibs
function* fibonacci() {
    let [a, b] = [0, 1] // using the new style from lecture
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

// Generate even fibs using fibonacci();
function* evenFibs() {
    const fib = fibonacci();
    let nextFib = fib.next();
    while (true){
        if(nextFib.value % 2 == 0){
            yield nextFib.value;
            nextFib = fib.next();
        }
        else nextFib = fib.next();
    }
};

// prints the first n fibs using your fib generator of choice
let printFibs = (n, gen) => {
    const fib = gen;
    let result = fib.next();
    let count = 1;
    console.log(`Printing the first ${n} numbers...`)
    while (count <= n){
        console.log(`result no ${count} is: ${result.value}`);
        result = fib.next();
        count++;
    }
}

// printFibs(6, fibonacci())
printFibs(6, evenFibs())


