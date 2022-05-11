// // structural typing
// // walks like a duck, quacks like a duck
// // dont get confused by excess property checking!

// interface Vector {
//     x: number,
//     y: number
// }

// interface AlienVector {
//     x: number,
//     y: number,
//     z: number,
//     o: string,
//     p?: string,
//     q?: number[]
// }

// const AddVectors = (v1: Vector, v2: Vector) => {
//     return v1.x * v2.x * v1.y * v2.y
// }

// const v1: Vector = {
//     x: 1,
//     y: 2
// }
// // const v2: Vector = {
// //     x: 3,
// //     y: 4
// // }
// const v3: AlienVector = {
//     x: 5,
//     y: 7,
//     z: 11,
//     o: 'supbro'
// }

// console.log(AddVectors(v3, v3))


// interface Person {
//     name: string,

// }
// interface Lifespan {
//     birth: string
//     death?: string,
// }

// // intersection of object types
// type Personspan = Person | Lifespan

// const profile: Personspan = {
//     name: "Bob hoskins",
//     birth: '15/7/35',
// }

// const otherPerson = {} as Lifespan // not so good

// console.log(otherPerson.birth)

// function getBirth(value: Personspan) { // check type coming in
//     return (value as Lifespan).birth ? (value as Lifespan).birth : (value as Person).name 
// }

// // console.log(getBirth({birth: '15/08/99', name:'Bob'}))
// // console.log(getBirth({birth:'14/07/89'}))
// console.log(otherPerson)


// // union of keys
// // profile.death

// // union of object types
// // use discriminating unions (add literal string so TS can narrow) to avoid using existance checks






// // interface Person {
// //   name: string;
// //   age: number
// // }
// // interface Lifespan {
// //   birth: string;
// //   death?: string;
// //   age?: number
// // }
// // type Personspan = Person | Lifespan;
// // const profile: Personspan = {
// //   name: "Bob hoskins",
// //   birth: "15/7/35",
// // };
// // intersection of keys
// // profile.age

// // interface Personspan extends Person {
// //     birth: string
// //     death?: string
// // }
// // interface Personspan extends Lifespan {
// //     name: string
// // }
// // interface Personspan extends Lifespan, Person { }
// // interface Personspan extends Lifespan, Person { name: 'literal'}

// // const profile: Personspan = {
// //     name: "Bob hoskins",
// //     birth: '15/7/35',
// // }

// // union vs intersection

// // type num = number
// // type str = string
// // type numstr = num | str

// // const mynumstr: numstr = '5'

// // interfaces

// // interface Square {
// //     x: number
// //     y: number
// // }

// // interface Triangle {
// //     a: number
// //     b: number
// // }

// // type SquareAndTriangle = Square & Triangle
// // type SquareOrTriangle = Square | Triangle


// // type keysSaT = keyof SquareAndTriangle
// // type keysSoT = keyof SquareOrTriangle


// // const shape: SquareAndTriangle = {
// //     x: 34,
// //     y: 98,
// //     a: 90,
// //     b: 112
// // }

// // function ShapeIt(shape: SquareAndTriangle) {
// //     return shape.x ? shape.x : shape.a
// // }


// // enum Letters {
// //     A = 'a',
// //     B = 'b',
// //     C = 'c'
// // }

// // type Letters = '094350694596' | '0934059345' | '093485734985'

// const Letters = {
//         A: 'gobbldyguk',
//         B: '092348230984',
//         C: 'somekindaconfignonsense'
// } as const

// type Letters = typeof Letters[keyof typeof Letters]

// function myLetters(a: Letters) {
//     return a === 'gobbldyguk'
// }

// console.log(myLetters(Letters.A))