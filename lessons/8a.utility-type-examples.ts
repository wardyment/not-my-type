// Partial

// interface User {
//   id: string
//   name: string
// }
// const updateUser = (user: User, fields) => {
//   return { ...user, ...fields }
// }

//Required

// interface User {
//   id?: number
//   name?: string
//   height?: number
// }
// class UserManager {
//   private user: Required<User>
//   constructor(user: User) {
//     this.user = {
//       id: user.id || Math.ceil(Math.random() + 1000),
//       name: user.name || 'nameless',
//       height: user.height || 130
//     }
//   }

//   getUser() {
//     return this.user
//   }
// }

// Readonly

// const mainconfig = {
//   start: 12,
//   end: 14,
//   initialValue: 56,
// }

// type Config = Readonly<typeof mainconfig>

// const anotherconfig: Config = {
//   start: 13,
//   end: 18,
//   initialValue: 23
// }

// anotherconfig.start = 67

// Exclude

// type Fruit = "oranges" | "bananas" | "dragon fruit" | "rotten peach" | "mouldy apple" | "manky coconuts" | "filthy dirty mangoes"

// type ActuallyAtTheSupermarket = Exclude<Fruit, "oranges" | "bananas" | "dragon fruit">

// interface User {
//   id: string,
//   surname: string
//   fav_music: "regae" | "hiphop" | "thrash metal"
// }

// type AllowedKeys = Exclude<keyof User, "surname">

// const getUserProperty = (user: User, prop: AllowedKeys) => {
//   return user[prop]
// }

// const Bob: User = {
//   id: '234234',
//   surname: "Geldoff",
//   fav_music: "hiphop"
// }

// console.log(getUserProperty(Bob, 'surname'))

// Extract

// interface Human {
//   id: string,
//   surname: string
// }

// interface Android {
//   id: string
//   powerful_ai_that_Will_destroy_all_of_us: true
// }

// type Common = Extract<keyof Human, keyof Android>

// NonNullable
// Same as Exclude<T, null | undefined>

// type Name = string | null | undefined
// type defoName = Exclude<Name, null | undefined>
// type defoName = NonNullable<Name>
