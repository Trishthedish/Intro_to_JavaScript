// 
// // problem set 1.
// console.log("[Problem 1.]");
// var person_age = 55;
// var ada_age = 2;
//
// var name = "kittens";
//
// if (person_age < ada_age) {
//   console.log("This person is younger");
// } else if(ada_age < person_age) {
//   console.log("Ada is younger");
// } else {
//   console.log("They're the same!");
// }
// // => Ada is younger // expected because Ada is 2 and younger then 55.
// console.log("-------------------------------");
//
// // problem set 2.
// console.log("[Problem 2.]");
//
// var x = 7;
// var y = 7;
//
// if (x > y || x == y ){
//   if(x > y) {
//     console.log("x is bigger");
//   } else {
//     console.log("x = y");
//   }
// } else {
//   console.log("y is bigger");
// }
// // => x = y ( they're the same)
// console.log("-------------------------------");
//
// // problem set 3.
// console.log("[Problem 3.]");
//
// for(var i = 0; i < 10; i ++) {
//   console.log(i*i);
// }
// // =>
// // 0
// // 1
// // 4
// // 9
// // 16
// // 25
// // 36
// // 49
// // 64
// // 81
// console.log("-------------------------------");
//
// // problem set 4.
// console.log("[Problem 4.]");
//
// for(var i = 1; i < 4; i ++) {
//   console.log(i*i);
// }
// // 1
// // 4
// // 9
// console.log("-------------------------------");
// // problem set 5.
// console.log("[Problem 5.]");
//
// var total = 0;
// for(var i = 0; i < 3; i ++) {
//   total = total + i;
//   console.log(total);
//   return total;
// }
// console.log("the total " + total);
//
// console.log("-------------------------------");
// // problem 6.

console.log("[Problem 6.]");
// can't tell what is expected as I get an error when I run it as Ruby code.
var i = 0;

while(i < 3) {
  console.log("hi");
  i = i + 1;
  console.log("This is i: " + i);
}

console.log("-------------------------------");
// problem 7.
console.log("[Problem 7.]");

var i = 0;

while(i < 3) {
  console.log("hi");
  i = i + 1;
  console.log("This is i: " + i);
}
console.log("bye");

console.log("-------------------------------");
// problem 8.
console.log("[Problem 8.]");

var fruits = ["banana", "apple", "kiwi"]
  for(var fruit of fruits) {
    console.log("I love " + fruit + "!");
  }

console.log("-------------------------------");
// problem 9.
console.log("[Problem 9.]");
var total = 0;
var values = [4, 6, 2, 8, 11];

for(value of values) {
  total = total + value
  console.log(total);
}

console.log("The Final total is "+ total);


console.log("-------------------------------");
// problem 10.
console.log("[Problem 10.]");

var values = [8, 5, 3, 10, 14, 2];

for(value of values) {
  if( value == 10){
    console.log("Special case!");
  } else {
    console.log("Regular values like " + value);
  }
}
