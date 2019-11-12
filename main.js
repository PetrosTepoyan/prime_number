const util = require("./myUtils.js");
const firstNumber = require('readline-sync').questionInt("What is your first number?")
const secondNumber = require('readline-sync').questionInt("What is your second number?")
let primesArray = []

for(let i = firstNumber; i <= secondNumber; i++){
    if (util.isPrime(i)){
        primesArray.push(i)
    }
    
}
util.printArray(primesArray)



