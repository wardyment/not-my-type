// Finally Typing classes

// Replaces constructor functions for creating objects

// Member visibility
// readonly
// Visibility in the constructor
// Definite assignment assertion operator
// Using interfaces with implements
// Using extends and super

/**
 * Note: Fields are initialised first then the constructor runs
 */

// Member Visibility
/**
 * Public - anyone
 * Private - only this class can see it
 * Protected - only this class or its decendents can see it
 */

// Priniciple of least privilege

// class Base {
//     protected static getMarbles() {}

//     showAllMarbles() {
//         Base.getMarbles()
//     }
// }

// class MyMarbles extends Base {
//     yourMarbles() {
//         MyMarbles.getMarbles()
//     }
// }

// MyMarbles.getMarbles()

// Original Class

// class AllTheThings {
//     one = 'one' // public
//     public readonly two = 'two' // also public
//     private three = 'three' // TS prevents change on object - only in type checking
//     #four = 'four' // JS - Private - only visible inside class
//     static five = 'five'
//     protected six = 'six'
//     protected static seven = 'seven'
//     private static eight = 'eight'

//     output() {
//         this.one = 'one changed internally'
//         // this.two = 'one changed internally'
//         this.three = 'one changed internally'
//         this.#four = 'one changed internally'
//         AllTheThings.five = 'one changed internally'
//         this.six = 'six changed internally'
//         AllTheThings.seven = 'seven changed internally'
//         AllTheThings.eight = 'eight changed internally'
//         return {
//             one: this.one,
//             two: this.two,
//             three: this.three,
//             four: this.#four,
//             five: AllTheThings.five,
//             six: this.six,
//             seven: AllTheThings.seven,
//             eight: AllTheThings.eight,

//         }
//     }
// }

// SubClass

// class SomeThings extends AllTheThings {
//     result() {
//         this.one = 'one changed on subclass'
//         // this.two = 'one changed on subclass'
//         // this.three = 'one changed on subclass'
//         // this.#four = 'one changed on subclass'
//         AllTheThings.five = 'one changed on subclass'
//         this.six = 'six changed on subclass'
//         AllTheThings.seven = 'seven changed on subclass'
//         // AllTheThings.eight = 'eight changed on subclass'
//         return {
//             one: this.one,
//             two: this.two,
//             // three: this.three,
//             // four: this.#four,
//             five: AllTheThings.five,
//             six: this.six,
//             seven: AllTheThings.seven,
//             // eight: AllTheThings.eight,
//         }
//     }
// }

// readonly

// class Homework {
//     protected Title: string = "11th hour"
// }

// const GetItDone = new Homework()
// GetItDone.Title = "not too worried"

// Visibilty in constructor directly - saves time

// class IseeYou {
//   eyes: boolean;
//   protected armpits: boolean;
//   private brain: boolean;
//   constructor(eyes: boolean, armpits: boolean, brain: boolean) {
//     this.eyes = eyes;
//     this.armpits = armpits;
//     this.brain = brain;
//   }
// }

class IseeYou {
  constructor(
    public eyes: boolean,
    protected armpits: boolean,
    private brain: boolean
  ) {}
}

// Definite assignment assertion operator

// 1. strictPropertyInitialization = true ---- false to turn it off - prob not good idea

// abstract class BaseCook {
//     abstract where: string
// }

// class GetReadyToCook extends BaseCook {
//   where?: string; // could be null or undefined
//   abstract where: string; // must be a string
// where = "Lounge"
//     getwhere() {
//         return this.where.length
//     }
// }

// const meal = new GetReadyToCook();
// meal.where = "kitchen"

// console.log(meal.getwhere());

// Implements

// not same name as class!!!
// interface Logit {
//   doit: (a: string, b: Record<string, unknown>) => void;
//   hello: string;
// }
// interface Happy {
//   face: "happy" | "sad";
// }

// class Logger implements Logit, Happy {
//   doit(message: string, meta: Record<string, unknown>) {
//     console.log(message, meta);
//   }
//   hello = "true";
//   face: "happy" | "sad" = "sad";
// }

// const logSomethings = new Logger();

// console.log(logSomethings);

// interface Clearable {
//   clear: () => void;
// }

// Extends and Super

interface something {
    getStuff: <T>(id: T) => string
}

class Base {
    constructor(protected config: string) {
        this.config = config
    }
    getConfig() {
        return JSON.stringify(this.config)
    }
}

class ModernConfig extends Base implements something {
    getStuff<T>(id: T){
        return this.config
    };
    // getConfig() {
    //     return 'some changed config'
    // }
}

const newConfig = new ModernConfig('hello')

console.log(newConfig.getStuff<number>(10))
// console.log(newConfig.getConfig())
