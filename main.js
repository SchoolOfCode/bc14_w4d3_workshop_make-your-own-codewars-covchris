/* 
👉 Write your kata here!

Instructions:
Write a program which takes in an array of numbers and returns the array but replaces any multiple of 3 with the word "fizz" and any multiples of 5 with the word "pop". Any number that is a multiple of both 3 and 5 should return the word "fizzpop"
*/

/*
I want to take any series of numbers
We need to output the same series of numbers but with all multiples of 3 replaced with the word "fizz" and any multiples of 5 with the word "pop". Any number that is a multiple of both 3 and 5 should return the word "fizzpop"
To check if the number is a mutiple of 3 we can divide it by 3 and make sure there is no remainder. Can do the same for multiples of 5.
If a number passes both of these tests we can tell its a multiple of both.*/

function fizzPop(numbers){
    for(i=0; i<numbers.length; i++){
        if (numbers[i] === 0) {
            numbers[i] === 0
        }else if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
            numbers[i] = "fizzpop"
        }else if (numbers[i] % 3 === 0){
            numbers[i] = "fizz"
        }else if (numbers[i] % 5 === 0){
            numbers[i] = "pop"
        }
    }return console.log(numbers)
} 


let testNumbers = [90, 76, 3000, 25, 4957395739, 16, 8, 11, -6, 5.657]

fizzPop(testNumbers)


//👉 Write the function your CodeWarriors will start with below here: