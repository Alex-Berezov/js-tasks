


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2),
// write a function elevator accepting 3 arguments (in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").
// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
// You can assume that the inputs will always be valid integers between 0-2.
// Examples:
// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

// const elevator = (left, right, call) => {
//   return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right'
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Create a combat function that takes the player's current health and the amount of damage received, and
// returns the player's new health. Health can't be less than 0.

// const combat = (health, damage) => health - damage < 0 ? 0 : health - damage


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Task
// Your friend advised you to see a new performance in the most popular theater in the city.
// He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull.
// It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left.
// All you need to do is climb over your seat and make your way to the exit.
// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds)
// of all the people who sit behind you and in your column or the columns to your left. To gain some courage,
// you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too
// many people.
// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're
// sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are
// occupied.
// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be
// seatsInTheater(nCols, nRows, col, row) === 96
// Here is what the theater looks like:
// Input/Output
// [input] integer nCols
// An integer, the number of theater's columns.
// Constraints: 1 ≤ nCols ≤ 1000.
// [input] integer nRows
// An integer, the number of theater's rows.
// Constraints: 1 ≤ nRows ≤ 1000.
// [input] integer col
// An integer, the column number of your own seat (with the rightmost column having index 1).
// Constraints: 1 ≤ col ≤ nCols.
// [input] integer row
// An integer, the row number of your own seat (with the front row having index 1).
// Constraints: 1 ≤ row ≤ nRows.
// [output] an integer
// The number of people who sit strictly behind you and in your column or to the left.

// const seatsInTheater = (nCols, nRows, col, row) => (nCols - col + 1) * (nRows - row)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

// If the input is 'H', return 'Hello World!'
// If the input is 'Q', return the input
// If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// For everything else, don't return anything (return null in C#, None in Rust).
// (+ has no visible effects so we can safely ignore it.)

// const HQ9 = (code) => {
//   switch(code) {
//     case 'H': return 'Hello World!';
//     case 'Q': return 'Q';
//     case '9': return '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
//   }
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// 2(h × W) + 2(h × L) + 2(W × L)

// const getSize = (width, height, depth) => {
//   return [(((width * height) * 2) + ((width * depth) * 2) + ((height * depth) * 2)), width * height * depth]
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Create a function that finds the integral of the expression passed.
// In order to find the integral all you need to do is add one to the exponent (the second argument),
// and divide the coefficient (the first argument) by that new number.
// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent,
// and divided the coefficient by that new number).
// Notes:
// The output should be a string.
// The coefficient and exponent is always a positive integer.
// Examples
//  3, 2  -->  "1x^3"
// 12, 5  -->  "2x^6"
// 20, 1  -->  "10x^2"
// 40, 3  -->  "10x^4"
// 90, 2  -->  "30x^3"

// const integrate = (coefficient, exponent) => {
//   return `${coefficient / (exponent + 1)}x^${exponent + 1}`
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Be Concise I - The Ternary Operator
// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and
// does the following:
// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is
// a character limit of 137.
// I'll give you a few hints:
// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you
// have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)

// const describeAge = (age) => `You're a(n) ${age < 13 ? 'kid' : age < 18 ? 'teenager' : age < 65 ? 'adult' : 'elderly'}`


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// This is a beginner friendly kata especially for UFC/MMA fans.
// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden.
// Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will
// make his legendary statement. It's your job to return the right statement depending on the winner!
// If the winner is George Saint Pierre he will obviously say:
// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:
// "I'd like to take this chance to apologize.. To absolutely NOBODY!"
// Good Luck!
// Note
// The given name may varies in casing, eg., it can be "George Saint Pierre" or "geOrGe saiNT pieRRE".
// Your solution should treat both as the same thing (case-insensitive).

// const quote = (fighter) => {
//   const phrases = {
//     'george saint pierre': 'I am not impressed by your performance.',
//     'conor mcgregor': "I'd like to take this chance to apologize.. To absolutely NOBODY!"
//   }

//   return phrases[fighter.toLowerCase()]
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
// Good luck :)

// const unusualFive = () => {
//   return ['a', 'b', 'c', 'd', 'e'].length
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Implement String#digit? (in Java StringUtils.isDigit(String)),
// which should return true if given object is a digit (0-9), false otherwise.

// String.prototype.digit = function() {
//   return /^\d$/.test(this)
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters):
// func1 and func2
// When bool is truth-ish, func1 should be called, otherwise call the func2.
// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.

// const _if = (bool, func1, func2) => bool ? func1() : func2()


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
// For example n = 3 result in:

// "I\n I\n  I"
// or printed:
// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:
// I
//  I
//   I
//    I
//     I
//      I
//       I

// const drawStairs = (n) => {
//   return [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n')
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
// You need to consider the following ratings:
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// const calculateTip = (amount, rating) => {
//   const tipsRule = { terrible: 0, poor: 0.05, good: 0.1, great: 0.15, excellent: 0.2 }
//   return rating.toLowerCase() in tipsRule
//     ? Math.ceil(amount * tipsRule[rating.toLowerCase()])
//     : 'Rating not recognised'
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n),
// but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and
// including that number, but excluding zero.
// For example(Input --> Output):
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 --> [1]

// const monkeyCount = (n) => {
//   return Array.from({length: n}, (v, k) => k + 1)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// You are given a method called main, make it print the line Hello World!,
// (yes, that includes a new line character at the end) and don't return anything
// Note that for some languages, the function main is the entry point of the program.
// Here's how it will be tested:
//   Solution.main("parameter1","parameter2");
// Hints:
// Check your references
// Think about the scope of your method
// For prolog you can use write but there are better ways
// If you still don't get it probably you can define main as an attribute of the Solution class that accepts a single argument,
// and that only prints "Hello World!" without any return.

// class Solution {
//    static main(a, b) {
//     console.log("Hello World!");
//    }
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// *** No Loops Allowed ***
// You will be given an array (a) and a value (x).
// All you need to do is check whether the provided array contains the value, without using a loop.
// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.
// With strings you will need to account for case.

// const check = (a,x) => a.includes(x)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.
// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8.
// Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

// Note
// All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

// const isValid = (formula) => {
//   return !(formula.includes(1) && formula.includes(2))
//     && !(formula.includes(3) && formula.includes(4))
//     && (formula.includes(5) === formula.includes(6))
//     && (formula.includes(7) || formula.includes(8))
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// const noBoringZeros = (n) => {
//   const arr = [...'' + n].map(String)

//   if (arr[arr.length - 1] !== '0') return n

//   while (arr[arr.length - 1] === '0') {
//     arr.pop()
//   }

//   return +arr.join('')
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// You and a friend have decided to play a game to drill your statistical intuitions.
// The game works like this:
// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and
// put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag,
// guessing a color, and then pulling one marble out. You get a point if you guessed correctly.
// The trick is you only have three seconds to make your guess, so you have to think quickly.
// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red".
// The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float.
// For example, guessBlue(5, 5, 2, 3) should return 0.6.

// const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
//   const blue = blueStart - bluePulled
//   const red = redStart - redPulled

//   return blue / (blue + red)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
// Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
// Note: You can expect all of the inputs to be the same length.

// const tripleTrouble = (one, two, three) => {
//   let res = ''
//   for (let i = 0; i < one.length; i++) {
//     res += one[i] + two[i] + three[i]
//   }
//   return res
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Get ASCII value of a character.
// For the ASCII table you can refer to http://www.asciitable.com/

// const getASCII = (c) => c.charCodeAt(0)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// At the annual family gathering, the family likes to find the oldest living family member’s
// age and the youngest family member’s age and calculate the difference between them.
// You will be given an array of all the family members' ages, in any order.
// The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
// Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// const differenceInAges = (ages) => {
//   return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature,
// Help Timmy with his string template so it works as he expects!

// const buildString = (...template) => `I like ${template.join(', ')}!`


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// const correctPolishLetters = (string) => {
//   return string
//     .replace(/ł/g, 'l')
//     .replace(/ą/g, 'a')
//     .replace(/ć/g, 'c')
//     .replace(/ę/g, 'e')
//     .replace(/ń/g, 'n')
//     .replace(/ó/g, 'o')
//     .replace(/ś/g, 's')
//     .replace(/ź/g, 'z')
//     .replace(/ż/g, 'z')
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of
// each element in a is strictly greater than the sum of the cubes of each element in b.
// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

// const arrayMadness = (a, b) => {
//   return a.reduce((acc, item) => acc + item ** 2, 0) > b.reduce((acc, item) => acc + item ** 3, 0)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// The function is not returning the correct values. Can you figure out why?
// Example (Input --> Output ):
// 3 --> "Earth"

// function getPlanetName(id){
//   var name;
//   switch(id){
//     case 1:
//       name = 'Mercury'
//     case 2:
//       name = 'Venus'
//     case 3:
//       name = 'Earth'
//     case 4:
//       name = 'Mars'
//     case 5:
//       name = 'Jupiter'
//     case 6:
//       name = 'Saturn'
//     case 7:
//       name = 'Uranus'
//     case 8:
//       name = 'Neptune'
//   }
  
//   return name;
// }

//Solution:

// const getPlanetName = (id) => {
//   switch(id) {
//     case 1:
//       return 'Mercury'
//     case 2:
//       return 'Venus'
//     case 3:
//       return 'Earth'
//     case 4:
//       return 'Mars'
//     case 5:
//       return 'Jupiter'
//     case 6:
//       return 'Saturn'
//     case 7:
//       return 'Uranus'
//     case 8:
//       return 'Neptune'
    
//     default: 
//     return 'There is no such planet'
//   }
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Ahoy matey!
// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient
// system to identify ships with a heavy booty on board.
// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

// You begin with writing a generic Ship class / struct:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Taking into account that an average crew member on board adds 1.5 units to the draft,
// a ship that has a draft of more than 20 without crew is considered worthy to loot.
// Any ship weighing that much must have a lot of booty!

// Add the method
// isWorthIt
// to decide if the ship is worthy to loot. For example:
// titanic.isWorthIt() // return false
// This Kata teaches you the very basic of method creation.

// function Ship(draft,crew) {
//   this.draft = draft;
//   this.crew = crew;
//   this.isWorthIt = function() {
//     return this.draft - (this.crew * 1.5) > 20
//   }
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries.
// Marketing thinks it would be great to welcome visitors to the site in their own language.
// Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string),
// and returns a greeting - if you have it in your database. It should default to English if the language is not in
// the database, or in the event of an invalid input.
// The Database
// const db = {
//   english: 'Welcome',
//   czech: 'Vitejte',
//   danish: 'Velkomst',
//   dutch: 'Welkom',
//   estonian: 'Tere tulemast',
//   finnish: 'Tervetuloa',
//   flemish: 'Welgekomen',
//   french: 'Bienvenue',
//   german: 'Willkommen',
//   irish: 'Failte',
//   italian: 'Benvenuto',
//   latvian: 'Gaidits',
//   lithuanian: 'Laukiamas',
//   polish: 'Witamy',
//   spanish: 'Bienvenido',
//   swedish: 'Valkommen',
//   welsh: 'Croeso'
// }

// Possible invalid inputs include:
// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

// const greet = (language) => language in db ? db[language] : 'Welcome'


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// const validateUsr = (username) => {
//   return (/^[a-z0-9_]{4,16}$/).test(username)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.)
// called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans.
// It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it),
// your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor func

// const xor = (a, b) => {
//   return a !== b
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of
// the rooms of the game. There should be at least 3 rooms inside it,
// each being a hash table with at least three properties (e.g. name, description, completed).

// const rooms = {
//   bedroom: {
//     name: 'Bedroom',
//     description: 'For... sleeping',
//     completed: true,
//   },
//   bathroom: {
//     name: 'Bathroom',
//     description: 'This will get you clean',
//     completed: false,
//   },
//   kitchen: {
//     name: 'Kitchen',
//     description: 'Hungry? Why wait?',
//     completed: true,
//   },
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).
// Equation will be the form of ax^2 + bx + c = 0
// Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).
// Since there are infinitely many solutions to this problem, we fix a = 1.
// Remember, the roots can be written like (x-x1) * (x-x2) = 0
// Example
// quadratic(1,2) = (1, -3, 2)
// This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0
// Example 2
// quadratic(0,1) = (1, -1, 0)
// This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0
// Notes
// Inputs will be integers.
// When x1 == x2, this means the root has the multiplicity of two

// const quadratic = (x1, x2) => [1, (x1 + x2)* -1, x1 * x2]


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Write function parseF which takes an input and returns a number or null if conversion is not possible.
// The input can be one of many different types so be aware.

// const parseF = (s) => isNaN(+s) ? null : +s


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius.
// Unfortunately his code has some bugs.
// Find the errors in the code to get the celsius converter working properly.
// To convert fahrenheit to celsius:
// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers.
// It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth.
// Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

// const weatherInfo = (temp) => {
//   const celsius = (temp - 32) * (5 / 9)
//   return celsius < 0 ? `${celsius} is freezing temperature` : `${celsius} is above freezing temperature`
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot.
// The petals start to fall in late April.
// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s),
// and it takes 80 seconds for the petal to reach the ground from a certain branch.
// Write a function that receives the speed (in cm/s) of a petal as input,
// and returns the time it takes for that petal to reach the ground from the same branch.
// Notes:
// The movement of the petal is quite complicated,
// so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

// const sakuraFall = (v) => v > 0 ? 5 * 80 / v : 0


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Write a function named setAlarm which receives two parameters. The first parameter, employed,
// is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation
// (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
// Examples:
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// const setAlarm = (employed, vacation) => employed && !vacation


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
// Input: []
// Output: 0
// Input: [-2.398]
// Output: -2.398
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// const sum = (numbers) => numbers.reduce((acc, item) => acc + item, 0) || 0

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// The company you work for has just been awarded a contract to build a payment gateway.
// In order to help move things along, you have volunteered to create a function that will take a float and
// return the amount formatting in dollars and cents.
// 39.99 becomes $39.99
// The rest of your team will make sure that the argument is sanitized before being passed to your function although
// you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
// Examples:
// 3 needs to become $3.00
// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

// const formatMoney = (amount) => `$${amount.toFixed(2)}`


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// This function takes two numbers as parameters, the first number being the coefficient,
// and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7).
// "^1" should not be truncated when exponent = 2.
// For example:
// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7",
// the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.
// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 
// Notes:
// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0

// const derive = (coefficient, exponent) => {
//   return `${coefficient * exponent}x^${exponent - 1}`
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
// Example:
// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

// const toBinary = (n)=> {
//   return +parseInt(n).toString(2)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

// const arr = N => N ? [...Array(N).keys()] : []


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"
// This kata is meant for beginners. Rank and upvote to bring it out of beta

// const position = (letter) => `Position of alphabet: ${letter.charCodeAt(0) - 96}`


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and
// out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and
// returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:
// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

// const pointsPer48 = (ppg, mpg) => {
//   return +(ppg / mpg * 48).toFixed(1) || 0
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// This kata is from check py.checkio.org
// You are given an array with positive numbers and a non-negative number N.
// You should find the N-th power of the element in the array with the index N.
// If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
// Let's look at a few examples:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

// const index = (array, n) => {
//   let res
//   array.map((el, i) => {
//     if (i === n) return res = el ** n
//   })
//   return res ? res : -1
// }
// const index = (array, n) => {
//   return array[n] ? array[n] ** n : -1
// }
// const index = (array, n) => {
//   return array[n] ** n || -1
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

// const odds = (values) => {
//   return values.filter(item => item % 2 !== 0)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Make a function that returns the value multiplied by 50 and increased by 6.
// If the value entered is a string it should return "Error".

// const problem = (x) => {
//   return typeof x === 'string' ? 'Error' : x * 50 + 6
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Hey awesome programmer!
// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
// Therefore you need a method, which returns the smallest unused ID for your next new data item...
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs,
// but you don't have to find or remove them!
// Go on and code some pure awesomeness!

// const nextId = (ids) => {
//   // const sortedInArr = Array.from(new Set(ids.sort((a, b) => a - b)))
//   // let newArr = []

//   // for (let i = 0; i < sortedInArr.length; i++) {
//   //   if (sortedInArr[i] !== i) {
//   //     newArr.push(i)
//   //   }
//   // }

//   // return newArr.length ? newArr[0] : ids.length

//   return ids.sort((a, b) => a - b).reduce((acc, item) => acc + (acc === item), 0)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Complete the function that receives as input a string, and produces outputs according to the following table:
// Input	Output
// "Jabroni" ==>>	"Patron Tequila"
// "School Counselor" ==>>	"Anything with Alcohol"
// "Programmer" ==>>	"Hipster Craft Beer"
// "Bike Gang Member" ==>>	"Moonshine"
// "Politician" ==>>	"Your tax dollars"
// "Rapper" ==>>	"Cristal"
// anything else ==>>	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table,
// then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with correct capitalization.
// For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// const obj = {
//   "jabroni": "Patron Tequila",
//   "school counselor":	"Anything with Alcohol",
//   "programmer":	"Hipster Craft Beer",
//   "bike gang member":	"Moonshine",
//   "politician":	"Your tax dollars",
//   "rapper":	"Cristal"
// }

// const getDrinkByProfession = (param) => {
//   return param.toLowerCase() in obj ? obj[param.toLowerCase()] : "Beer"
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// This method, which is supposed to return the result of dividing its first argument by its second,
// isn't always returning correct values. Fix it.

// const solve = (x, y) => x / y


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation...
// but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and
// must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia),
// "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).


// const bonusTime = (salary, bonus) => {
//   return bonus ? `£${salary * 10}` : `£${salary}`
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// const grow = (x) => {
//   return x.reduce((acc, item) => acc * item)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual.
// Some days he climbs more stairs than others depending on the number of students he must train in the morning.
// He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
// 20_year_estimate = one_year_total * 20
// You will receive the following data structure representing the stairs Suzuki logged in a year.
// You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.
// Each weekday in the stairs array is an array.
// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.

// const stairsIn20 = (s) => {
//   return s.flat().reduce((acc, item) => acc + item, 0) * 20
// }

// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>")
// const sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
//           7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
//           5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
//           6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
// monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
//           6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
//           5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
//           7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
// tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
//            7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
//            7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
//            5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
// wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
//              5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
//              5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
//              9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
// thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
//             9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
//             9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
//             7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
// friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
//          6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
//          9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
//          5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
// saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
//             5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
//             5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
//             7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

// const stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

// console.log("54636040 >>", stairsIn20(stairs))

// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>")


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// const toCsvText = (array) => {
//   return array.map(el => `${el}${el !== array[array.length - 1] ? '\n' : ''}`).join('')
// }

// const toCsvText = (array) => array.join('/n')


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person.
// Note that name will be an array consisting of one or more values that should be joined together with one space between each,
// and the length of the name array in test cases will vary.

// Example:
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// const sayHello = ( name, city, state ) => {
//   return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Finish the uefaEuro2016() function so it return string just like in the examples below:
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// const uefaEuro2016 = (teams, scores) => {
//   const match = `At match ${teams[0]} - ${teams[1]}`
//   const matchResult = scores[0] === scores[1]
//     ? `teams played draw.`
//     : (scores[0] > scores[1] ? `${teams[0]} won!` : `${teams[1]} won!`)
//   return `${match}, ${matchResult}`
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Total pressure calculation: https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a

// const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
//   const mol1 = givenMass1 / molarMass1
//   const mol2 = givenMass2 / molarMass2
//   const T = temp + 273.15
//   const R = 0.082
//   const P = ((mol1 + mol2) * R * T) / volume   
//   return P
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep.
// Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten.
// Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep".
// Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// const warnTheSheep = (queue) => {
//   const queueReverse = queue.reverse()
//   for (let i = 0; i < queueReverse.length; i++) {
//     if (queueReverse[0] === 'wolf') return "Pls go away and stop eating my sheep"
//     if (queueReverse[i] === 'wolf') return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
//   }
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
// ball1 = new Ball();
// ball2 = new Ball("super");
// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

// class Ball {
//   constructor(ballType) {
//     this.ballType = ballType ? ballType : 'regular'
//   }
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
// First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// const divisibleBy = (numbers, divisor) => {
//   return numbers.filter(el => !(el % divisor))
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals
// do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail),
// is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
// If the tail is right return true, else return false.
// The arguments will always be strings, and normal letters.
// For Haskell, body has the type of String and tail has the type of Char.
// For Go, body has type string and tail has type rune.

// const correctTail = (body, tail) => body.substr(body.length - tail.length) === tail


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Given an array of Boolean values and a logical operator,
// return a Boolean result based on sequentially applying the operator to the values in the array.
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).

// const operations = {
//   AND: (a, b) => a && b,
//   OR: (a, b) => a || b,
//   XOR: (a, b) => a !== b
// }

// const logicalCalc = (array, op) => array.reduce(operations[op])


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

// Create an application that will display the number of kilometers per liter (output)
// based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points. If the answer ends with a 0,
// it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

// const converter = (mpg) => (mpg * 1.609344 / 4.54609188).toFixed(2)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter
// so any string containing no letters at all is trivially considered to be in ALL CAPS.

// String.prototype.isUpperCase = function() {
//   return this.split('').every(el => el.toUpperCase() === el)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Your friend has been out shopping for puppies (what a time to be alive!)...
// He arrives back with multiple dogs, and you simply do not know how to respond!
// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
// The number of dogs will always be a number and there will always be at least 1 dog.

// const howManyDalmatians = (number) => {
//   const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]
  
//   if (number <= 10) return dogs[0]
//   if (number <= 50) return dogs[1]
//   if (number === 101) return dogs[3]
//   return dogs[2]
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes.
// For a given quantity and price (per mango), calculate the total cost of the mangoes.
// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

// function mango(quantity, price){
//   return (quantity - Math.floor(quantity / 3)) * price
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// This is the first step to understanding FizzBuzz.
// Your inputs: a positive integer, n, greater than or equal to one.
// n is provided, you have NO CONTROL over its value.
// Your expected output is an array of positive integers from 1 to n (inclusive).
// Your job is to write an algorithm that gets you from the input to the output.

// function preFizz(n) {
//   let res = []
//   for (let i = 1; i <= n; i++) {
//     res.push(i)
//   }
//   return res
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Write a function to get the first elements of asequence.
// Passing a parameter n (default=1) will return the first n elements of the sequence.
// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// function first(arr, n = 1) {
//   if (n === 0) return []
//   let res = []
//   for (let i = 0; i < n; i++) {
//     res.push(arr[i])
//   }
//   return res
// }

// function first(arr, n = 1) {
//    return arr.slice(0, n);
// }
// const arr = ['a', 'b', 'c', 'd', 'e'];


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// This series of katas will introduce you to basics of doing geometry with computers.
// Point objects have x and y attributes (X and Y in C#) attributes.
// Write a function calculating distance between Point a and Point b.
// Tests round answers to 6 decimal places.

// function distanceBetweenPoints(a, b) {
//   return Math.hypot(a.x - b.x, a.y - b.y);
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// const countBy = (x, n) => {
//   let res = []
//   for(let i = 1; res.length <= n - 1; i++) {
//     if (i % x === 0) {
//       res.push(i)
//     }
//   }
//   return res
// }



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

// function multipleOfIndex(array) {
//   return array.filter((el, i) => el % i === 0)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Upon arriving at an interview, you are presented with a solid blue cube.
// The cube is then dipped in red paint, coating the entire surface of the cube.
// The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut.
// You must return the number of smaller cubes created by the cuts that have at least one red face.
// Examples:
// countSquares(2) --> 26
// countSquares(4) --> 98

// const countSquares = (cuts) => {
//   return cuts == 0 ? 1 : 6 * cuts * cuts + 2;
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Implement a function named generateRange(min, max, step), which takes three arguments and
// generates a range of integers from min to max, with the step.
// The first integer is the minimum value, the second is the maximum of the range and the third is the step.
// (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

// function generateRange(min, max, step){
//   let res = []
//   for (let i = min; i <= max;) {
//     res.push(i)
//     i += step
//   }
//   return res
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Given a string s, write a method (function) that will return true if its a valid single integer or
// floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

// function isDigit(s) {
//   return typeof s === 'string' &&!!Number(s)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Create a method all which takes two params:

// - a sequence
// - a function (function pointer in C)

// and returns true if the function in the params returns true for every element in the sequence.
// Otherwise, it should return false. If the sequence is empty, it should return true,
// since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

// function all( arr, fun ){
//   return arr.every(fun)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin.
// The function should return whether a is lower than, close to, or higher than b.
// a is considered "close to" b if margin is greater than or equal to the distance between a and b.
// Please note the following:
// When a is close to b, return 0.
// Otherwise...
// When a is less than b, return -1.
// When a is greater than b, return 1.
// If margin is not given, treat it as zero.
// Assume: margin >= 0
// Tip: Some languages have a way to make parameters optional.

// Example 1
// If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.
// This is because a and b are no more than 3 numbers apart.

// Example 2
// If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.
// This is because the distance between a and b is greater than 0, and a is less than b.

// function closeCompare(a, b, margin = 0) {
//   if (a < b - margin) return -1;
//   if (a - margin > b) return 1;
//   return 0;
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Given a string, write a function that returns the string with a question mark ("?") appends to the end,
// unless the original string ends with a question mark, in which case, returns the original string.
// For example (Input --> Output)
// "Yes" --> "Yes?" 
// "No?" --> "No?"

// function ensureQuestion(s) {
//   return s.endsWith('?') ? s : `${s}?`
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// You will be given a vector of strings. You must sort it alphabetically
// (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

// function twoSort(s) {
//   return s.sort()[0].split('').join('***')
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// This Kata is intended as a small challenge for my students
// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and
// returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1

// function strCount(str, letter){
//   return !str.length ? 0 : str.split('').filter(item => item === letter).length
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// You can print your name on a billboard ad. Find out how much it will cost you.
// Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
// You can not use multiplier "*" operator.
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

// function billboard(name, price = 30){
//   let res = 0
//   for (let i = 0; i < name.length; i++) {
//     res += price
//   }
//   return res
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

// function distinct(a) {
//   return Array.from(new Set(a))
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090
// or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing
// a programme that can answer Philip's endless questions.
// Your task is to write a function that takes two parameters: the year of birth and the year to count years in
// relation to. As Philip is getting more curious every day he may soon want to know how many years it was until
// he would be born, so your function needs to work with both dates in the future and in the past.
// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past:
// "You will be born in ... year(s)." If the year of birth equals the year requested return:
// "You were born this very year!"
// "..." are to be replaced by the number, followed and proceeded by a single space.
// Mind that you need to account for both "year" and "years", depending on the result.
// Good Luck!

// function  calculateAge(a,b) {
//   if (a === b) return "You were born this very year!"
//   return a < b
//     ? `You are ${b - a} ${b - a > 1 ? 'years' : 'year'} old.`
//     : `You will be born in ${Math.abs(a - b)} ${Math.abs(a - b) > 1 ? 'years' : 'year'}.`
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Safen User Input Part I - htmlspecialchars
// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one)
// who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more)
// which contains form fields so visitors can send emails or leave a comment on your website with ease.
// However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise
// it through the use of XSS (Cross Site Scripting).
// This is done by injecting script tags into the website through form fields which may contain malicious code
// (e.g. a redirection to a malicious website that steals personal information).

// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D

// function htmlspecialchars(formData) {
//   return formData
//     .replace(/\&/g, '&amp;')
//     .replace(/\</g, '&lt;')
//     .replace(/\>/g, '&gt;')
//     .replace(/\"/g, '&quot;')    
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end.
// If you're unsure about the format, look at the sample tests.

// function multiTable(number) {
//   let resultString = ''
//   const getMultiplication = (a, b) => a * b

//   for (let i = 1; i <= 10; i++) {
//     resultString += `${i} * ${number} = ${getMultiplication(i, number)}${i < 10 ? '\n' : ''}`
//   }

//   return resultString
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// You received a whatsup message from an unknown number. Could it be from that girl/boy
// with a foreign accent you met yesterday evening?
// Write a simple function to check if the string contains the word hallo in different languages.
// These are the languages of the possible people you met the night before:
// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish

// function validateHello(greetings) {
//   res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/ig.test(greetings) 
//   return res
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// function areYouPlayingBanjo(name) {
//   return name.match(/^r/i) ? `${name} plays banjo` : `${name} does not play banjo`
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives,
// and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// function invert(array) {
//   let res = []
//   for (let el of array) {
//     if (el < 0) {
//       res.push(Math.abs(el))
//     } else if (el === 0) {
//       res.push(-0)
//     } else {
//       res.push(el - el * 2)
//     }
//   }
//   return res
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// In this kata, your job is to return the two distinct highest values in a list.
// If there're less than 2 unique values, return as many of them, as possible.
// The result should also be ordered from highest to lowest.
// Examples:
// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

// function twoHighest(arr) {
//   return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2) {
//   if (operation === '+') return value1 + value2
//   if (operation === '-') return value1 - value2
//   if (operation === '*') return value1 * value2
//   if (operation === '/') return value1 / value2
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Given an array of numbers, check if any of the numbers are the character codes
// for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// function isVow(a){
//   const vowels = {a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'}
//   const newArr = []
//   for (let el of a) {
//     if (String.fromCharCode(el) in vowels) {
//       newArr.push(String.fromCharCode(el))
//     } else {
//       newArr.push(el)
//     }
//   }
//   return newArr
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first
// and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string
// to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"
// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// function array(str){
//   if (!str) return null
//   const arr = str.split(',')
//   arr.pop()
//   arr.shift()
//   if (!arr.length) return null
//   return arr.join(' ')
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// function find_average(array) {
//   if (!array.length) return 0
//   return array.reduce((acc, el) => el + acc, 0) / array.length
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value.
// Output should be the length of the longest word, as a number.
// There will only be one 'longest' word.

// function findLongest(str) {
//   const spl = str.split(" ");
//   let longest = 0
  
//   for (let i = 0; i < spl.length; i++) {
//     if (spl[i].length > longest) {
//       longest = spl[i].length
//     }
//   }
//   return longest
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// function summation(num) {
//   let res = 0
//   for (let i = 1; i <= num; i++) {
//     res += i
//   }
//   return res
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
// Input >> Output Examples:
// expressionsMatter(1,2,3)  ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

// expressionsMatter(1,1,1)  ==>  return 3
// Explanation:
// After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

// expressionsMatter(9,1,1)  ==>  return 18
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18.

// function expressionMatter(a, b, c) {
//   return Math.max(
//     a * (b + c),
//     a * b * c,
//     a + b * c,
//     a + b + c,
//     (a + b) * c
//   )
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   return laLigaGoals + copaDelReyGoals + championsLeagueGoals
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// function simpleMultiplication(number) {
//    return number % 2 === 0 ? number * 8 : number * 9
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// function past(h, m, s){
//   const secondsToMilliseconds = s * 1000
//   const minutesToMiliseconds = m * 60 * 1000
//   const hoursToMiliseconds = h * 60 * 60 * 1000
//   return hoursToMiliseconds + minutesToMiliseconds + secondsToMilliseconds
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Your task is to sum the differences between consecutive pairs in the array in descending order.
// For example:
// sumOfDifferences([2, 1, 10])
// Returns 9
// Descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

// function sumOfDifferences(arr) {
//   if (!arr || arr.length < 1) return 0

//   arr.sort((a, b) => a - b).reverse();

//   let res = 0
//   for (let i = 0; i < arr.length - 1; i++) {
//     res += arr[i] - arr[i + 1]
//   }
//   return res
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Return the Nth Even Number
// Example(Input --> Output)
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

// function nthEven(n){
//   return n * 2 - 2
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// https://en.wikipedia.org/wiki/Triangle

// function otherAngle(a, b) {
//   return 180 - (a + b)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour
// and returns it in cm per second, rounded down to the integer (= floored).
// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0.
// The result should be an Integer.

// function cockroachSpeed(s) {
//   const KM_TO_SM = s * 100000
//   const HOUR_TO_SECOND = 3600
//   return Math.floor(KM_TO_SM / HOUR_TO_SECOND)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Introduction
// The first century spans from the year 1 up to and including the year 100,
// the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function century(year) {
//   return Math.ceil(year / 100)
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number
// is divisible by both integers a and b.
// A few cases:
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false
// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true
// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

// function isDivideBy(number, a, b) {
//   return number % a === 0 && number % b === 0
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for
// you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental
// makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//   const CAR_COST = 40
//   if (d < 3) return d * CAR_COST
//   if (d >= 3 && d < 7) return d * CAR_COST - 20
//   return d * CAR_COST - 50
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// When provided with a number between 0-9, return it in words.
// Input :: 1 => Output :: "One".
// If your language supports it, try using a switch statement.

// function switchItUp(number){
//   const numbers = {
//     0: 'Zero',
//     1: 'One',
//     2: 'Two',
//     3: 'Three',
//     4: 'Four',
//     5: 'Five',
//     6: 'Six',
//     7: 'Seven',
//     8: 'Eight',
//     9: 'Nine'
//   }
//   return numbers[number]
// }



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// function peopleWithAgeDrink(old) {
//   if (old < 14) return "drink toddy"
//   if (old >= 14 && old < 18) return "drink coke"
//   if (old >= 18 && old < 21) return "drink beer"
//   return "drink whisky"
// };


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals,
// saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of
// petals, where nb_petals > 0.

// function howMuchILoveYou(nbPetals) {
//   const phrases = [ 'I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all' ];
//   return phrases[(nbPetals - 1) % phrases.length];
// }
