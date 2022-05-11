// Functions in TS
// Lets look at how JS works
// Flavours of functions:

// These are pretty much equivalent

// function Add(a: number, b: number) {
//     return a + b
// }
// const Add = function(a: number,b: number) {
//     return a + b
// }
// const Add = (a: number, b: number) => {
//   return a + b;
// };
// const Add = (a: number, b: number) => a + b

// Functions are objects
// Flavours of function types

// These are equivalent

// type JustSomeType = (yourface: number, youmum: number) => number

// interface JustSomeType {
//     (yourface: number, youmum: number): number
// }

// type JustSomeType = {
//   (yourface: number, youmum: number): number;
// };

// const Add: JustSomeType = (a, b) => a + b;

// Add.some_extra_prop = 'big vat of pickles'

// Hoisting

// const result = Add(2, 3);

// function Add(a: number,b: number) {
//     return a + b
// }

// const Add = function (a: number, b: number) {
//   return a + b;
// };

// Overloading - the idea that you can have multiple signatures for a function

// Can overload in the type - curious
// type AddFunc = {
//   (a: string, b: string): string;
//   (a: number, b: number): number;
// };
// const Add: AddFunc = function(a: any, b: any) {
//   return a + b;
// }

// Can overload by repeating the funtion keyword - weird
// function Add(a: number, b: number): number;
// function Add(a: string, b: string): string;
// function Add(a: any, b: any) {
//   return a + b;
// }

// Another way to do overloading

// type AddFunc = (a: string, b: string) => string
// type AddFunc = (a: number, b: number) => string

// const Add: AddFunc = function (a, b) {
//   return a + b;
// };

// interface AddFunc {
//   (a: string, b: string): string;
//   (a: number, b: number): number;
// }

// const Add: AddFunc = function (a: any, b: any) {
//   return a + b;
// };

// console.log(Add("this", "that") === "thisthat");
// console.log(Add(3, 5) === 8);
// console.log(Add(3, 'hello')) // error because no matching overload (thats what that error means)

// interface AddString {
//   (a: string, b: string): string;
// }
// interface AddNumber {
//   (a: number, b: number): number;
// }
// type Add = AddString & AddNumber;

// interface Add {
//     (a: string, b: string): string;
//     (a: number, b: number): number;
// };

// const Add: Add = (a: any, b: any) => {
//   const result = a + b;
//   return result;
// };

// const AddResult = Add(1, 2);
// const AddStrResult = Add("Hello ", " World");

// console.log(Add(1, 2));
// console.log(Add("hello", "world"));
// console.log(Add("hello", 6));
// console.log(Add([1, 2, 3, 4, 5], "world"));

// interface Profile {
//     account: number
// }
// interface Person {
//     name: string
// }
// interface ProfileFunc {
//     (input: Profile): string
// }
// interface PersonFunc {
//     (input: Person): string
// }

// Must have both to be certain
// type FunkyFunc = ProfileFunc | PersonFunc

// Could be one signature or the other
// type FunkyFunc = ProfileFunc & PersonFunc

// type FunkyFunc = {
//   (input: { account: number }): string;
//   (input: { name: string }): string;
// };

// const FunkFunc: FunkyFunc = (input: any) => {
//   return input.name;
// };

// const t = { account: 23424234, sdfsdfsdf:'sdfsfsdf' }
// const thing = FunkFunc({account: 234542342});

// console.log(thing);

// interface account {
//     account: number
// }
// const acc: account = {
//     accountdfdgd: 234234234,

//     sdfsdfsd: 'sdfsfsdf'
// }
