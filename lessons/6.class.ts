// // JS Classes

// // not my bag - React is functional mostly. 
// // Some Classes used in indirect packages

// /**
// Effective Typescript (p216)
// Item 58: Write Modern Javascript

// - Use Classes instead of Prototypes - ES2015
// - TS support for prototype flavour not so hot
// - TS Language services can evn convert them - lets test that!

// - Matter of taste / convenience. Just syntactic sugar - but oh so sweet!

// https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4

// - Classes obscure the prototypal inheritance at the core of JS.
// - Classes encourage inheritance but you should prefer composition.
// - Classes tend to lock you into the first bad design you came up with.


// */

// // function Person(first, last) {
// //   this.first = first
// //   this.last = last
// // } 
// // Person.prototype.getName = function() {
// //   return this.first + ' ' + this.last
// // }
// // const Biden = new Person("Old", "Guy")

// // console.log(Biden, Biden.getName())


// class Person {
//   first: string
//   last: string
//   constructor(first: string, last: string) {
//     this.first = first
//     this.last = last
//   }
//   getName() {
//     return this.first + ' ' + this.last 
//   }
// }


// const Biden = new Person("Old", "Guy")
// console.log(Biden, Biden.getName())

// /** -------------------------------------------- */

// // Make objects - like constructor function - special functions
// // No hoisting!!

// // Declaration
// // class MyClass {
// //     name = 'Bob',
// //     location = 'here'
// // }

// // Expression
// // const Person = class {
// //     constructor() {
// //       this.name = 'Bob',
// //       this.location = 'here'
// //     }
// // }

// // const Person = class {
// //       name = 'Bob',
// //       location = 'here'
// // }

// // const Person = function() {
// //     this.name = 'Bob',
// //     this.location = 'here'
// // }

// /**
//  * {
//  *  name: 'Bob',
//  *  location: 'here'
//  * }
//  */

// // const a = new Person()

// // console.log(a)


// /** -------------------------------------------- */


// // Constructor

// // class YourClass {
// //     constructor(location = 'australia') {
// //         this.location = 'over there'
// //     }
// //     name = 'Bob'
// // }

// // const b = new YourClass()

// // console.log(b)
// // name of class, not property
// // console.log(YourClass.name)


// // Can use overloaded constructor
// // class ThatClass {
// //   constructor(a: number)
// //   constructor(a: string, b: number)
// //   constructor(a: any, b?: any) {}
// // }

// /** -------------------------------------------- */


// // Super in constructor

// // Passing on args when extends

// // const Basic = class {
// //   constructor(me, you, them) {
// //     this.me = you
// //     this.you = them
// //     this.them = me
// //   }
// // }

// // const BaseonBasic = class extends Basic {
//   // constructor(...args) {
//   //   super(...args)
//   // }
// //   everyone = true
// // }

// // const Whatthe = new BaseonBasic('George', 'Ringo', 'Malcolm')
// // console.log(Whatthe)

// // const GonnaBeExtended = class {
// //     constructor(address) {
// //         this.address = address
// //     }
// // }

// // const GonnaBeTheExtender = class extends GonnaBeExtended {
// //     hot: boolean
// //     constructor(address, location) {
// //       super(address) // before this... therwise error
// //       this.hot = true
// //     }
// // }

// // const c1 = new GonnaBeTheExtender()

// // console.log(c1)
// /** -------------------------------------------- */

// // Methods and prototype

// // Properties are local hasOwnProperty - data is unique on each object and to copy you just assign
// // Methods are on the prototype - what changes you perform on that data is universal and shouldn't change


// class GoingToTheZoo {
//   animalsToSee: string[]
//   constructor(animals: string[]) {
//     this.animalsToSee = animals;
//   }
//   // whatAnimals = function(howmany) {
//   //     return this.animalsToSee.slice(0, howmany)
//   // }
//   whatAnimals(howmany: number | undefined) {
//     return this.animalsToSee.slice(0, howmany);
//   }
// }

// const d = new GoingToTheZoo(["lions", "zebras", "snakes", "bugs"]);

// /**
//  * {
//  *  animals: [],
//  *  whatAnimals: func
//  * }
//  */

// console.log(d)
// // console.log(d.whatAnimals(2));
// /** -------------------------------------------- */

// // Static fields

// // Only on class - not instances

// // const CannotMove = class {
// //   static arms = false;
// //   static legs = false;
// //   static {
// //     head: true;
// //   }
// // };


// // const e = new CannotMove();

// // console.log(e);
// // console.log(CannotMove.arms);

// // const MathsObject = class {
// //   static notObjectInstanceField = 'hello'
// //   static Add(a, b) {
// //       // this is in context of constructor object
// //       console.log(this)
// //         return a + b;
// //   }
// //   static addTogether(c) {
// //       // this is in context of new instantiated object
// //     return MathsObject.Add(a, b);
// //   }
// // };

// // const MathObject2 = {
// //   Add(a, b) {
// //     return a + b
// //   }
// //   addTogether() {
// //       return this.Add(a, b);
// //   }
// // }

// // const f = MathsObject.AddTogether(10);

// // console.log(f);
// // console.log(f.addTogether(29));
// /** -------------------------------------------- */

// // Private members

// // class Car {
// //   #roadWorthy: boolean
// //   weight: number
// //   constructor(roadWorthy: boolean, weight: number, id: number) {
// //     this.#roadWorthy = roadWorthy // only available inside but passed on
// //     this.weight = weight
// //     this.#id = id
// //   }
// //   #id: number
// //   myId() {
// //     return this.#roadWorthy ? this.#id : 'not roadworthy'
// //   }

// // }

// // class Taxi extends Car {
   
// // }

// // const result = new Taxi(false, 2, 876986)
// // const result = new Car(true, 10)

// // console.log(result.myId())

// // Getters and Setter

// class HumanPerson {
//   first: string
//   last: string
//   constructor(first: string, last: string) {
//     this.first = first
//     this.last = last
//   }
//   // acts like property - getters and setters replace the standard ones
//   get name() {
//     return `${this.first} ${this.last}`
//   }
//   set name(fullname) {
//     const names = fullname.split(' ')
//     this.first = names[0]
//     this.last = names[names.length -1]
//   }
// }

// const Bob = new HumanPerson('Bob','Hoskins')
// console.log(Bob)
// console.log(Bob.name)
// Bob.name = 'Marcus Van De Haun'
// console.log(Bob)
// console.log(Bob.name)


// /// Uhhhh. Don't do this !!!!
// // class GoatPerson {
// //   _amount_of_hair: number

// //   set amount_of_hair(num) {
// //     this._amount_of_hair = num
// //   }
// // }

// // const goat_hair = new GoatPerson()
// // goat_hair.amount_of_hair = 9809897

// // console.log(goat_hair.amount_of_hair)


// /** -------------------------------------------- */

// // const State = {
// //   _darkMode: true,
// //   _theme: 'default',
// //   set darkMode(val) {
// //     if(val !== this._darkMode) {
// //       this._darkMode = val
// //       this._theme = this._darkMode ? 'darkTheme' : 'default'
// //       App({mode: val})
// //     }
// //     console.log(State)
    
// //   },
// //   get darkMode() {
// //     return this._darkMode
// //   }
// // }

// // // Like root etc
// // function App(props: {mode: boolean}): void {
// //   document.getElementById('header').innerHTML = `<div>${props.mode}</div>`
// // }

// // document.getElementById('button')?.addEventListener('click', function(){
// //   console.log('clicked button')
// //   State.darkMode = !State.darkMode
// // })

// // App({mode: State.darkMode})
// // State.darkMode = true
// // State.darkMode = false