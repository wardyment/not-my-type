import _ from "lodash";
import * as fp from "lodash/fp";

/**  What is lodash?

Some history.

Once  upon a time, browsers were shit. Now they are better. So to get consistent utility methods on arrays, object snad strings was a pain.

It has been said that even native methods were slower than a simple loop.

Is good coz doesn't extend built in objects (like Prototype js did)

Underscore was create in 2009 (DocumentCloud) or something to smooth over these inconsistencies and at the same time offer up some cool utility functions.

Was created by Jeremy Ashkenas (CoffeeScript, Backbone etc). 

Problems with Underscore....

Data first instead of last - not cool for functional programming - currying mainly

Lodash

Docs layout:

Array - do stuff to arrays - manipulate sorting, drop stuff, find stuff etc. Zip em, intersection, compare.
Collection - works on arrays or objects -can do filtering, partitioning etc
Date ---- ???? we use date.fns
Function - memoize, debounce, delay, throttle etc - some FP stuff with curry, unary, ary
Lang - convenience methods that smooth over JS BS
Math - floor, ceil, sum etc - works on arrays
Number - clamp, inRange, random
Object - pick, convert to array, copy, get all the functions, get, set
Seq - chain, tap, thru
String - camelCase etc
Util - 
*/



//---- lets play ------

// console.log(_.VERSION)

// const words = ['some','kind','of','sentence']
// console.log(_.first(words)) // 'some'

// const nums = [1,2,[43],45,[8,[6,3]],3,4,56]
// const flatNums = _.flattenDeep([1,2,[43],45,[8,[6,3]],3,4,56])
// const flatNums = _(nums).flattenDeep().value()
// console.log(flatNums)
// console.log(_.nth(nums, 3)) // 45
// console.log(_.chunk(_.flattenDeep(nums), 2))

// console.log(_.random(5, 10))
// console.log(_.shuffle(flatNums))

// console.log(_.times(7, (n) => `${n}): sup`))

// _.delay(() => console.log('..and we R back'), 2000)

// const different = [1, 'hello', {test: 'test'}, [1,2,3,4,5], () => console.log('yes')]

// different.forEach((el) => {
//     if(_.isNumber(el)) {
//         console.log(`${el} is a number`)
//     }
//     if(_.isString(el)) {
//         console.log(`${el} is a string`)
//     }
//     if(_.isArray(el)) {
//         console.log(`${el} is an array`)
//     }
// })

// What does ES6 give you anyway

// _.map([1, 2, 3], (i) => i + 1)
// _.reduce([1, 2, 3], (sum, i) => sum + i, 0)
// _.filter([1, 2, 3], (i) => i > 1)
// _.forEach([1, 2, 3], (i) => { console.log(i) })

// becomes:

// console.log([1, 2, 3].map((i) => i + 1))
// console.log([1, 2, 3].reduce((sum, i) => sum + i, 0))
// console.log([1, 2, 3].filter((i) => i > 1))
// console.log([1, 2, 3].forEach((i) => { console.log(i) }))

// fine. are there any advantages??

// const obj = {
//     one: 1,
//     two: 2,
//     three: 3
// }
// const arr = [1,2,3]

// type ObjKey = keyof typeof obj

// ways to interate over objects in JS:

// for (let key in obj) { console.log(obj[key as ObjKey]) }
// for (let key of Object.keys(obj)) { console.log(obj[key as ObjKey]) }
// Object.keys(obj).forEach((key) => { console.log(obj[key as ObjKey]) })

// can work on either or
// _.forEach(obj, (value,key) => {console.log(key, value)})
// _.forEach(arr, (value,key) => {console.log(key, value)})

// Map alternative

const complexArr = [
  {
    a: [{ n: 1 }],
  },
  {
    b: [{ n: 2 }],
  },
];

// console.log(complexArr.map(o => o.a[0].n))
// console.log(_.map(complexArr, 'a[0].n')) // ooooh, nice!

// const users = {
//   a: 4,
//   b: 5,
// };

// Do some filters bro!

// const customers = [
//   {
//     name: "Bob",
//     active: true,
//   },
//   {
//     name: "Jane",
//     active: false,
//   },
//   {
//     name: "Greg",
//     active: true,
//   },
// ];
// ES6
// console.log(customers.filter(customer => customer.active))
// console.log(customers.filter(customer => customer.active && customer.name === 'Bob'))

// Lodash
// console.log(_.filter(customers, {active: true})) // oooh nice!
// console.log(_.filter(customers, "active")) // cool!
// console.log(_.filter(customers, ["active", true])) // cool!
// console.log(_.filter(customers, {active: true, name: 'Bob'})) // cool!

// console.log(users.map.....???)
// console.log(Object.keys(users).map(k=> users[k]))

// console.log(_.map(users)) // what the??

// default iteratee (an iteratee is a composable abstraction for incrementally processing sequentially presented chunks of input data)
// is _.identity

// console.log(_.map(users, (v,k) => { console.log(k,v); return [k,v]} ))
// console.log(_.map(users, _.identity))

// f(x) = x

// e.g flatMap

// const farr = [1,2, [4,5, [5]]]
// const farr2 = _.flatMap(_.flatMap(farr, _.identity), _.identity)
// console.log(farr2)

// sure, whatever. anything else it can do?

// Let's make curry

// const add = (a: number, b: number, c:number) => a + b + c

// console.log(add(1, 4, 8))

// const curryAdd = _.curry(add)

// can create new functions based on a single one
// console.log(curryAdd(1)(4)(8))

// const add5 = curryAdd(5)

// console.log(add5(5)(5))

// Lets chain it

// const lines = `sometimes apple
// taste bad banana coz banana you apple left
// them in the fridge onion
//  pear pear onion apple
// with another apple or onion`.split("\n");

// _.chain(lines)
//   .tap(console.log)
//   .flatMap((line) => line.split(/\s+/))
//   .tap(console.log)
//   .filter((word) => word.length > 3)
//   .tap(console.log)
//   .groupBy(_.identity)
//   .tap(console.log)
//   .mapValues(_.size)
//   .tap(console.log)
//   .value();

// console.log(countWords);

// var users = [
//   { user: "barney", age: 36 },
//   { user: "fred", age: 40 },
//   { user: "pebbles", age: 1 },
// ];

// var youngest = _.chain(users)
//   .sortBy("age")
//   .map(function (o) {
//     return o.user + " is " + o.age;
//   })
//   .head()
//   .value();
// // => 'pebbles is 1'

// console.log(youngest)

// Composition f(g(k(x))) = k(g(f(x))) or something

// const someLetters = ['a', 'b', 'c']

// const dosomestuff = _.toPlainObject(_.map(someLetters, _.upperCase))

// console.log(dosomestuff)

// const dosomestuffComposed = fp.compose(fp.toPlainObject, fp.map(fp.upperCase))

// const more = dosomestuffComposed(someLetters)

// console.log(more)

// Similar to chaining but this is a function you can reuse

// Stuff you can sue for testing

// const match = _.matches({active: true})

// console.log(match({active: false}), match({name: 'margo', active: true}))

// const data = {
//     nname: 'Admam',
//     active :true
// }

// const f = _.property('name')

// console.log(data, 'name toBe Adam', f(data) === 'Adam')
