// Before classes lets look at Prototype


// 1. Objects & __proto__

// const Breakfast = {
//     coffee: true
// }

// console.log(Breakfast) // Object
// console.log(Breakfast.__proto__.__proto__) // null
// console.log(Breakfast.hasOwnProperty('coffee')) // true
// console.log(Breakfast.constructor) // Function: Object


// const Breakfast = function(thirsty) {
//     this.coffee = thirsty // own property
// }

// console.log(Breakfast.__proto__) 
// console.log(Breakfast.prototype) 
// console.log(Breakfast.prototype.__proto__)
// console.log(Breakfast.__proto__.__proto__.__proto__) // null
// console.log(Breakfast.hasOwnProperty('coffee')) // true


// const Today = new Breakfast(false)

// console.log(Today.constructor) // Breakfast


// Functions have a "prototype" object you can mess with - this gets copied to each object they produce
// Breakfast.prototype.orange_juice = true // prototype property
// console.log(Today.orange_juice)

// Also get a bunch of prototype methods and properties you can access
// console.log(Breakfast.prototype.hasOwnProperty('orange_juice'))
// console.log(Object.isPrototypeOf(Breakfast))
// console.log(Today.constructor)

// console.log(Today.__proto__) // log this objects prototype


// console.log(Today.__proto__)
// console.log(Object.getPrototypeOf(Today))

// Object.setPrototypeOf(Today, somekinda prototype) // pretty dangerous - best to avoid


// const NextMonday = Object.create(Today, { toast: true })

// console.log(NextMonday)

// Lets break something!!!!


// console.log(Array.prototype.__proto__.__proto__) // null
// console.log(Array.prototype.__proto__) // Object
// console.log(Array.prototype) // Array prototype properties e.g map





// Array.prototype.indexOf = function() { return 'not the right answer' }




// console.log([1,2,3,4,5].indexOf(2))




// console.log([1,2,3].map(n => n + 1).map(n => n + 3).map(n => n * 2))




// Making Objects and Prototype chains

// 1. Object Literal



// const a  = {
//     name: 'Bob'
// }
// a.__proto__.location = "your back yard"


// const a = {
//     name: 'Bob',
//     __proto__: {
//         location: 'your back yard'
//     }
// }

// console.log(a)

// 2. Constructor Function

// Note: () => {} does not handle "this" in same way

// const b1 = function() {
//     this.name = 'Bob'
// }
// b1.prototype.location = 'L23423.234l.4.23.4.234'
// const b2 = new b1()

// console.log(b2)


// 3. Object.create

// const cp = {
//     location: "sdf987s32#@sdf LLL XX"
// }
// const c1 = Object.create(cp, { name: {
//     value: 'Bob'
// }})

// console.log(c1)

// 4. Class

// Does some magic

class dp {
    // own property
    location = 'sdfsf@#$@23423423 242 34:234444' //own property

    // prototype
    area() {
        return `Area: you do the math...${this.location}` 
    }
}

const newObj = new dp()

console.log(newObj)

class d1 extends dp {
    // own property
    name = 'Bob'
}

const d2 = new d1()

console.log(d2)