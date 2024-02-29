console.log(Math.PI) //this property returns the value of pi
console.log(Math.trunc(Math.PI)) //removes all the decimals
console.log(Math.round(3.4)) //rounds to the nearest whole number
console.log(Math.ceil(3.4)) //think "ceiling." it rounds the number up
console.log(Math.floor(3.4))//rounds down to the nearest whole number
console.log(Math.pow(2, 10)) //this is 2 to the power of 10
console.log(Math.min(2, 0.5, 7)) //this returns the lowest value of the group
console.log(Math.max(2, 0.5, 7)) //this returns the largest value of the group
console.log(Math.random()) // this returns a random number from 0 to 1

//Return a random number from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1) //Math.random * 10, then enclose that in a Math.floor + 1. Otherwise we get a random number from 0 to 9

console.log(Math.floor(Math.random() * 10) + 1)

//Generate a number from 1 to 6
let randomNum4 = Math.floor(Math.random() * 6) + 1
console.log(randomNum4)

//Generate a number from 1 to 100
// let randomNum2 = Math.floor(Math.random() * 100) + 1
// console.log(randomNum2)

//Generate a number from 50 to 100
// const min = 50
// const max = 100

// let randomNum3 = Math.floor(Math.random() * (max - min)) + min 
// console.log(randomNum3)




//Random Number Generator

const myButton = document.getElementById("myButton")
const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")
const min = 1
const max = 6
let randomNum1
let randomNum2
let randomNum3

myButton.onclick = function() {
  randomNum1 = Math.floor(Math.random() * max) + min
  randomNum2 = Math.floor(Math.random() * max) + min
  randomNum3 = Math.floor(Math.random() * max) + min
  label1.textContent = randomNum1
  label2.textContent = randomNum2
  label3.textContent = randomNum3
}























