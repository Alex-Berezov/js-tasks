

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");

console.log("&lt;h2&gt;Hello World&lt;/h2&gt; >>", htmlspecialchars("<h2>Hello World</h2>"));

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");

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
