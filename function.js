// from Dan's Slides:
// https://docs.google.com/presentation/d/1QboS170RoaKq2dVwLgXmUZHhzz8I5Cs1H08w0euvmY8/edit#slide=id.g1949b20c36_0_13

//https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/10-JavaScript/02-fun-with-functions.md

var repeat = function(word) {
  return word + ' ' + word;
};

console.log(repeat('fish')); // fish fish
// no implicit return like Ruby has.
console.log("------------------------");


var borkRepeat = function(word) {
  word + ' ' + word;
};

console.log(borkRepeat('fish')); // undefined


console.log("------------------------");

var sayWhat = function() {
  return 'what?';
};

console.log(sayWhat);   // [Function: sayWhat]
console.log(sayWhat()); // what?

// Parens are required for function calls!
// This is different than Ruby!
// If you leave them out, you get a reference to the function

console.log("------------------------");
