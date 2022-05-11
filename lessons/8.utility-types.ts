/* Utility Types */

/**
 * what are they and why use them?
 * List of utility types
 * Examples and use cases
 * General priniciples
 */

// What are utility types?

/**
 * Problem: dont repeat yourself - duplication
 * Type transformation
 * Available anywhere
 */

interface Person {
  firstname: string;
  lastname: string;
}
interface PersonWithJob extends Person {
  firstname: string;
  lastname: string;
  job_title: string;
  salary: number;
}

// normally for union types
// type PersonWithJob = Person & {
//   job_title: string;
//   salary: number;
// };

// type BaseUnion = "apples" | "oranges" | "bananas"
// type ExtendedUnion = BaseUnion |  "bananas"

// const fruit: ExtendedUnion = "oranges"

// type Input = {
//   request: string;
// };
// type Output = {
//   response: { title: string };
// };
// type JustIO = Input | Output;
// type NamedIO = JustIO & { name: string };

// const io: JustIO = {
//   re
// }

// const getTheThings: NamedIO = {
//   request: "/img/1",
//   response: { title: "hello" },
//   name: "all the things",
// };

// can index



// interface PageState {
//   userId: string;
//   pageTitle: string;
// }

// interface PageState {
//   userId: State["userId"];
//   pageTitle: State["pageTitle"];
// }

// type StateKeys = 'userId' | 'pageTitle' | 'recent'

// type PageState = {
//     [k in StateKeys]: State[k]
// }
interface State {
  userId: string;
  pageTitle: string;
  recent: string;
}
// quite common
type PickFields<T, K extends keyof T> = { [k in K]: T[k] };




/**
 * two params
 * first is T = base interface type
 * second is K = union of keys on the interface type
 * outputs new type = interface of keys (K) from the base type matched with equivalent types
 */
// type PageState = PickFields<State, 'userId' | 'pageTitle'>

// actually this is just Pick

type PageState = Pick<State, "userId" | "pageTitle">;

// List of utility types

/**
// Works on object stytle Interface things
Partial<Type> - make all optional

Required<Type> - make them all required
Readonly<Type> - make them all read only
Record<Keys, Type> - what should key and value types be on an interface

Pick<Type, Keys> - only the keys that you want
Omit<Type, Keys> - leave out the ones you don't want

// Works on Union types
Extract<Type, Union> - same as Pick but for union types
Exclude<UnionType, ExcludedMembers> - same as Omit but for union types

NonNullable<Type> - go from things with null and undefined to things what dont have them

// Works on Function types - seems like when you don't have access directly to function types - e.g setTimeout in browser


Parameters<Type> - a tuple from the params of a function type
ReturnType<Type> - the type that the Function type spits out
ThisParameterType<Type> - extracts type of this for Function type - unlikely to use
OmitThisParameter<Type> - dunno
ThisType<Type> - dunno

// Works on classes
ConstructorParameters<Type>
InstanceType<Type>

// Works on template string literals etc
Uppercase<StringType>
Lowercase<StringType>
Capitalize<StringType>
Uncapitalize<StringType>
 */

// Examples and use cases

// setup steps
// enum ProgressStepKeyEnum {
//     Registration = 'registration',
//     Triage = 'triage',
//     TreatmentArea = 'treatment-area',
//     SecondaryAssessment = 'secondary-assessment',
//     Dispo = 'dispo',
// }
// // convert enum to union type using template string literal
// type ProgressStepKey = `${ProgressStepKeyEnum}`

// type OutcomeStepKey = 'admit' | 'discharge' | 'transfer' | 'observation' | 'other'
// // combine stepkeys
// type StepKey = ProgressStepKey | OutcomeStepKey
// // combine more steps
// type WaitTimeEstimateKey = StepKey | 'outcome'
// interface StepWaitTimeEstimateValue {
//     waitDurationEstimateMillis: number
// }
// interface StepWaitTimeEstimateQuantileValues {
//     fromStepKey: WaitTimeEstimateKey
//     quantile_10?: StepWaitTimeEstimateValue
//     quantile_40?: StepWaitTimeEstimateValue
//     quantile_50?: StepWaitTimeEstimateValue
//     quantile_60?: StepWaitTimeEstimateValue
//     quantile_70?: StepWaitTimeEstimateValue
//     quantile_90?: StepWaitTimeEstimateValue
// }
// interface StepWaitTimeEstimate {
//     [key: string]: StepWaitTimeEstimateQuantileValues
// }

// type WaitTimeEstimates = Partial<Record<WaitTimeEstimateKey, StepWaitTimeEstimate>>

// const SomeWaitTimes: WaitTimeEstimates = {
//     registration: {
//         "dunno": {
//             fromStepKey: 'outcome',
//             quantile_10: {
//                 waitDurationEstimateMillis: 4500
//             },
//             quantile_70: {
//                 waitDurationEstimateMillis: 20000
//             }
//         }
//     }
// }

// has index signature when using keyof
type Mapish = { [k: string]: boolean };
// type Mapish = Record<string, boolean>
type M = keyof Mapish;

const map: Mapish = {
  something: true,
  nothing: false,
};

console.log(map[1]);

// Mapped types

// type SomeInstruments = {
//     clarinet: "wind",
//     drums: "percussion",
//     guitar: "strings",
//     bass: "string",
//     piano: "keys"
// }
// type HaveInstruments = {
//     [k in keyof SomeInstruments]: boolean
// }

// const ReadyForConcert: HaveInstruments = {
//     clarinet: true,
//     drums: false,
//     guitar: true,
//     bass: false,
//     piano: true
// }

// General priniciples

/**
 * Where are you repeating yourself?
 * Can you use current types more effectively rather than repeating them
 *
 *
 */
