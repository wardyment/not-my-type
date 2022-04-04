// Type inference
// Typescript can figure out what you mean - but only to an extent - 
// you still need to tell it what you're doing most of the time.
// One thing that seems to be magic is code flow analysis - 
// it's where Typescript can determine what happens to your types through the code.



// What will the type of these variables be?
// Hover over it to see

// let x = "x";
// const y = "y";
// const z = 2;


// What are the property types here?
// const obj = {
//   firstName: "Bob",
//   lastName: "Hoskins",
// };

// What happens when we try to change something?
// obj.firstName = "Marcus";
// obj.firstName = 8;

// ....Didn't explicitly set the type

// const arr = ['text', 1, 2, 3, 4.3456456];

// arr.push(20);

// const anotherObj = {
//   name: "Joseph Jones",
//   age: 23,
//   scores: arr,
// };

