// Errors in JS in general
// Error types
// Handling errors
// Sentry
// Errors in graphql

// Errors in JS - runtime
// https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript

// const error = new Error('woops')
// console.log(error.name, error.message, error.toString(), error.stack)

// const failFunc = () => {
//     throw new Error('this aint gonna work')
// }
// const doSomething = () => {
//     try {
//         failFunc()
//     } catch(err) {
//         // throw new Error('Failed coz we forgot to carry the one', {cause: err})
//         throw new Error('Failed coz we forgot to carry the one')
//     }
//     try {
//         failFunc()
//     } catch(err) {
//         throw new Error('Failed coz the lights went out', {cause: err})
//     }
// }

// doSomething()

// Error Types

// 1. RangeError
// const arr = [90,98]
// arr.length = 90**99

// 2. ReferenceError

// const cat ="cat"
// console.log(cat, dog)

// 3. SyntaxError

// const cat h = "cat"

// 4. TypeError

// const num = 123
// num.toUpperCase()

// 5. URIError

// decodeURI("%")

// 6. InternalError ??

// function loop(x) {
//   if (x >= 1000000000000) return;
//   // do stuff
//   loop(x + 1);
// }
// loop(0);



// const error = new Error('something h as gone terribly wrong')
// const rangeError = new RangeError('totally out of range')
// try {
//     console.log('trying something')
//     throw rangeError
// } catch(err) {
//     console.log('caught error', err instanceof RangeError)
// }

// https://docs.sentry.io/product/sentry-basics/integrate-backend/capturing-errors/

// https://www.apollographql.com/docs/react/data/error-handling/
// https://spec.graphql.org/draft/#sec-Errors