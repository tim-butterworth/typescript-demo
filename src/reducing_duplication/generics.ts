import * as _ from "lodash"
//generics are a way to generate types, they are an abstraction tool and the main way to DRY up your types

enum ActionType {
    ONE, TWO, THREE
}
interface AReduxAction<T> {
    typeParameter: ActionType,
    data: T
}

interface ActionOne extends AReduxAction<{ key: string }> {
    typeParameter: ActionType.ONE
}
interface ActionTwo extends AReduxAction<{ differentKey: string }> {
    typeParameter: ActionType.TWO
}
interface ActionThree extends AReduxAction<string> {
    typeParameter: ActionType.THREE
}

const actionOne: ActionOne = {
    typeParameter: ActionType.ONE,
    data: {
        key: "value"
    }
}
const actionTwo: ActionTwo = {
    typeParameter: ActionType.TWO,
    data: {
        differentKey: "differentValue"
    }
}
const actionThree: ActionThree = {
    typeParameter: ActionType.THREE,
    data: "raw string"
}

type GenericFunctionType<A, B, C> = (arg1: A, arg2: B) => C

const functionImpl: GenericFunctionType<string, number, { s: string; n: number; }> = (arg1: string, arg2: number) => ({
    s: arg1,
    n: arg2
})

// Generics can have a little extra info
type GenericFunctionWithExtraInfo<A extends { key: string; }> = (arg: A) => string

const greaterFunction: GenericFunctionWithExtraInfo<{ key: string; anotherKey: number }> = (arg) => {
    return arg.key
}

// more fancy action implementation
interface EvenMoreFancyAction<A extends ActionType, D> {
    actionType: A;
    data: D
}

interface MyActionOne extends EvenMoreFancyAction<ActionType.ONE, { key: string; n: number; }> { }
interface MyActionTwo extends EvenMoreFancyAction<ActionType.TWO, { differentKey: string; m: number; }> { }

const a1: MyActionOne = {
    actionType: ActionType.ONE,
    data: {
        key: "hi!",
        n: 12
    }
}

// Generics can be in a different position
type StringString = { [key: string]: string }

type RightSideGeneric = <A extends StringString, K extends keyof A>(arg: A, k: K) => string
type LeftSideGeneric<A extends StringString, K extends keyof A> = (arg: A, k: K) => string

const leftSideImpl: LeftSideGeneric<{ "A": string }, "A"> = (arg, k): string => arg[k]
const rightSideImpl: RightSideGeneric = (arg, key) => arg[key]

leftSideImpl({ "A": "value" }, "A")

// late binding can be more flexible
rightSideImpl<{ key: string }, "key">({ "key": "value" }, "key")
rightSideImpl({ "key2": "value", "key3": "value" }, "key2")

// left hand generics can be used as templates, like if there was already a set of types that existed and we wanted an individual function to handle each type
type ForFunctionOne = {
    key1: string;
    key2: string;
}
type ForFunctionTwo = {
    two1: string;
    two2: string;
}
type ForFunctionThree = {
    three1: string;
    three2: string;
}

// alot of things can be done with generics to abstract away duplication
type Keys<T> = keyof T;
type LSG<T extends StringString> = LeftSideGeneric<T, Keys<T>>;

const handleOne: LSG<ForFunctionOne> = (arg1, arg2) => arg1[arg2]
const handleTwo: LSG<ForFunctionTwo> = (arg1, arg2) => arg1[arg2]
const handleThree: LSG<ForFunctionThree> = (arg1, arg2) => arg1[arg2]

handleThree(
    {
        "three1": "pretty",
        "three2": "fancy"
    },
    "three2"
)