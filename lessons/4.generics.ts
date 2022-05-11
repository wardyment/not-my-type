// generics
// what?

// prob already using generics or have touched them somewhere
// e.g Array<string> === string[]

// e.g SpecialLongWindedGraphQLType[] === Array<SpecialLongWindedGraphQLType>
// <> is like function params - pass in the type you want to use

// specific type ??? not right

// function identity(arg: number): number {
//     return arg
// }

// any type ??? not right
// function identity(arg: any): any {
//     return arg
// }

type Chuzzish = <T>(arg: T) => T

const Identity: Chuzzish = (arg) => {
  return arg;
}

// function identity<Chuzwuzzler>(arg: Chuzwuzzler): Chuzwuzzler {
//   return arg;
// }

// pass all the arguments including the type to the generic function
// let myvar = identity<string>('would you like some lunch?')

// type inference does all the work


// let myvar = Identity<number>("me, you grab lunch. now");
let myvar2 = Identity<string>("me, you grab lunch. now");



// const myunchangingvar = identity(8);

// array of inferred types

function arrayIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg.slice(0, 10);
}

const stringWhichIsActuallyAnArray = arrayIdentity<string>([
  "hello world",
  "another",
  // 89798,
]);

// can we make that into a type def

// type Identity = <Chuzwuzzler>(input: Chuzwuzzler) => Chuzwuzzler

interface Identity<sdfsdf> {
    <Chuzwuzzler>(input: Chuzwuzzler): Chuzwuzzler
    // christmas_time: boolean
}
// interface Identity<Chuzwuzzler> {
//   (input: Chuzwuzzler): Chuzwuzzler
//   christmas_time: Chuzwuzzler
// }
// function identityWithType: Identity(arg) {
//     return arg
// }
const identityWithType: Identity<string> = (arg) => arg;

const sdfsdf = identityWithType<string>('sdfsfsdf')


// A map function
// map over an array and call function on each element
// Lets make it using type signature first !!!

type MapOver = <T, X>(arr: T[], func: (input: T) => X) => X[];
// should be able to figure out what this does without even reading function body....interesting

const MapOver: MapOver = (a, b) => a.map(b);

const transformed = MapOver(["superman", "iceman"], (superhero) =>
  superhero.length > 6 ? `${superhero} is strong` : `${superhero} is ok`
);

console.log(transformed);

// Guess the implementation

type Suprise = <A>(a: A, b: A) => boolean;

type Mystery = <T>(input: T[]) => number

type Inception = <Z>(arr: Z[], el: Z) => number

type SuperUnknown = <T>(a: T[], b: number) => T[][] 

const splitArrayIntoBatches1: SuperUnknown = (array, batchSize) => {
    const totalBatches = Math.ceil(array.length / batchSize)
    return Array.from(new Array(totalBatches), (_, index) =>
        array.slice(index * batchSize, (index + 1) * batchSize)
    )
}

