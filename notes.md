## Notes from learning about JavaScript

1. http://www.quirksmode.org/js/associative.html
- looking at what makes a JS object that has Ruby hash like behavior.

2. Noticed that when writing conditionals:
```
var name = "kittens";

if (name == "puppies") {
  name += "!";
} else if (name == "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}

console.log("name");
```
- The curly bracket doesn't have to wrap around the entirety of logic.



## JS FUNCTIONS
- "a higher order function supports higher-order functions.""

1. var foo = function(bar){}; vs. function foo(bar){}
  - var foo = function(bar){}; // expression | function foo(bar){} // this is declaration.   
