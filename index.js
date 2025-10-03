// Prints the first n Fibonacci numbers
const printFibonacci = (n) => {
    let num1 = 0;
    let num2 = 1;
    let next = 0;
    for (let i = 0; i < n; i++) {
        console.log(next);
        num1 = num2;
        num2 = next;
        next = num1 + num2;
    }

}

printFibonacci(5);  // should print 0, 1, 1, 2, 3
printFibonacci(10); // should print 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
