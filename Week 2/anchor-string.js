console.log('=========================================')
console.log("|       1. Let's Form a Sentence        |")
console.log('=========================================')
console.log('\r')

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log (`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);
console.log('\r')
console.log('=========================================')
console.log("|     2. Index Accessing - 1 by 1       |")
console.log('=========================================')
console.log('\r')

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; // do your own!
var thirdWord = word[15] + word[16]; // do your own!
var fourthWord = word[18] + word[19]; // do your own!
var fifthWord = word[21] + word[22] + word[23] + word[24]; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('\r')
console.log('====================================================')
console.log("|   3. Breaking Sentence (Again) using Substring   |")
console.log('====================================================')
console.log('\r')

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4,14); // do your own!
var thirdWord3 = word.substring(15,17); // do your own!
var fourthWord3 = word.substring(18,20); // do your own!
var fifthWord3 = word.substring(21,25); // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
console.log('\r')
console.log('============================================================')
console.log("|  4. Breaking Sentence (yet Again) and Count Each Length  |")
console.log('============================================================')
console.log('\r')

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word.substring(0, 3);
var secondWord4 = ', with length: ' + secondWord3.length; // do your own!
var thirdWord4 = ', with length: ' + thirdWord3.length;; // do your own!
var fourthWord4 = ', with length: ' + fourthWord3.length;; // do your own!
var fifthWord4 = ', with length: ' + fifthWord3.length;; // do your own!

var firstWordLength = exampleFirstWord4.length;
// create new variables around here

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4);
console.log('Third Word: ' + thirdWord4);
console.log('Fourth Word: ' + fourthWord4);
console.log('Fifth Word: ' + fifthWord4);
