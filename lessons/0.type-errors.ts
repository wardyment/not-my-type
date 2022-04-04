/**
 * Alot of the code in files like this one are commented out
 * Simply uncomment sections and try them out
 * Make sure you have `yarn tsc --watch` running
 */


// Type errors are helpful it turns out. Errors are good.
// RUN IT:

// let x = 2
// x = 'wtf'

// Structural typing has its downsides
// RUN IT:

/*
interface Vector3D {
    x: number,
    y: number,
    z: number,
}
function calculateLength(v: Vector3D) {
    let length = 0
    for (const axis of Object.keys(v)) { // Object keys is just array of strings
        const coord = v[axis] // cannot use string to index Vector3D
        length += Math.abs(coord)
    }
    return length
}

const freshVector3d = {
    x: 1,
    y: 1.2,
    z: 0.8,
}
console.log(calculateLength(freshVector3d))
*/

// Not assignable to!
// RUN IT:

// type MadeUpNames = 'Chamdow' |  'Tingy' | 'Boocan'
// const MyName: MadeUpNames = "BooBum"

// const myStrings = ['yo','whsts','up']
// myStrings.push(4)
