// excess property checks are confusing

interface Cleaner {
    name: string,
    hours: number,
    days: string[]
}

// open types - not sealed
// only works on object literals
// const JamesTheCleaner = {
//     name: 'James',
//     hours: 4,
//     days: ['Mon','Tues'],
//     pet_elephants: 2
// }
// do a var assignment in between and check disappears
// const CurrentCleaner: Cleaner = JamesTheCleaner



// const UpdateSchedule = (cleaner: Cleaner, extra_day: string) => {
//     return cleaner.days.push(extra_day)
// }

// console.log(UpdateSchedule(JamesTheCleaner, 'Tues'))
// console.log(UpdateSchedule({name: "Bob", hours: 2, days: [], pet_elephants: 5}, 'Tues'))