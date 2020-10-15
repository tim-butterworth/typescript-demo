// A few different ways

// full form
const myFun1: (a: number) => string = (a: number): string => {
    return `${a}`
}

// only the right side has types
const myFun2 = (a: number): string => {
    return `${a}`
}

// only the left side has types, less good, errors are tougher to figure out, I think this is the worst option
const myFun3: (a: number) => string = (a) => {
    return `${a}`
}

// easier to read full form
type FunType =  (a: number) => string;
const myFun4: FunType = (a: number): string => {
    return `${a}`
}

// all the type information is optional, using tslint is a good way to require a specific level of type information

// const myFun5: FunType = (a: number) => {
//     return a
// }

// const myFun6: FunType = (a): string => {
//     return a
// }
