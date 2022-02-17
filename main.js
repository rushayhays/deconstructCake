function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function square(oneNumber) {
    return oneNumber * oneNumber;
}

// let ifAllTwo = divide(60, 2)
// let ifAllFour = divide(60, 4)

// console.log(ifAllTwo)
// console.log(ifAllFour)

let firstRun4 = subtract(60, 4);
let firstRun2 =subtract(firstRun4, 6);

console.log(firstRun2)
console.log("There's 1 four-legged and 3 two-legged")

let secondRun4 = subtract(firstRun2, 4);
let secondRun2 =subtract(secondRun4, 6);

console.log(secondRun2)
console.log("There's 2 four-legged and 6 two-legged")

let fourLegged= multiply(4, 6);
let twoLegged = multiply(6, 6);

console.log(fourLegged);
console.log(twoLegged);
//there are 24 animals total 6 four legged and 18 two legged