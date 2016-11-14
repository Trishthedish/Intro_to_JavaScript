// chair_pair_challenge.js

// Make one of your chair pairs into an object - highlight their best attributes

// (favorite color, animal, superpower, etc.)

var carmen = {
  favorite_color: "Purple",
  animal: "cat",
  superpower: "genius",
  fav_cs_language: "Ruby is nice",

};

var yael = {
  favorite_color: "Turquoise",
  animal: "dogs",
  superpower: "Mom!",
  fav_cs_language: "Ruby!",

};

// Iterate through a list of names, greeting each person
//
//
// Bonus: Only greet the names that start with the first letter of your name.

var list = ["carmen", "yael", "trish", "abe", "trucks", "yodel"];

for(var i = 0; i < list.length; i ++ ) {
  console.log("Hello " + list[i] + "!");
}
// Hello carmen!
// Hello yael!
// Hello trish!
// Hello abe!
// Hello trucks!
// Hello yodel!

for (var name of list) {
  if (name[0] === "t") {
    console.log("Greetings " + name + "!!");
  }

}
// now only prints names that start with "T"
// Greetings carmen!!
// Greetings yael!!
// Greetings trish!!
// Greetings abe!!
// Greetings trucks!!
// Greetings yodel!!

for (var name in list) {
  console.log("Wrong way to greet " + name + "!");
}

// JavaScript is not going to slice things in the same way. As Ruby would have. You cannot slice it like a typically object. :(

// --------------------------------------------//

// var obj = {     // We can span lines; whitespace is mostly ignored.
//   num: 5,
//   str: "This is a string",
//   subObject: {
//     otherNum: 4
//   }
// };

// obj.num;    // 5
// obj['num']; // 5; note we use a string!
// obj.subObject.otherNum; // 4
// obj.foo;    // undefined
