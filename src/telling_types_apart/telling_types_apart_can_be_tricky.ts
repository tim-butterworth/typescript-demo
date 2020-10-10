import * as _ from "lodash"

// Types that are the same

interface AnInterface {
    name: string;
}
interface TotallyDifferentInterface {
    name: string;
}

type SomeType = {
    name: string;
}

const notSoPickyFunction = (arg: AnInterface): string => {
    return arg.name
}

const anInterface: AnInterface = {
    name: "name1"
}
const totallyDifferentInterface: TotallyDifferentInterface = {
    name: "this is a different type"
}
const aSomeType: SomeType = {
    name: "this is the type"
}

notSoPickyFunction(anInterface)
notSoPickyFunction(totallyDifferentInterface)
notSoPickyFunction(aSomeType)

// typescript does not care about the name of a type, it cares about the "shape" or "structure"
// if a thing has the same properties, it is essentially the same type to typescript
// one more twist

type ABiggerType = {
    name: string;
    age: number
}

const aBiggerType: ABiggerType = {
    name: "name",
    age: 100
}

notSoPickyFunction(aBiggerType)

const morePickyFunction = (arg: ABiggerType): string => {
    return arg.name
}

morePickyFunction(aBiggerType)
// morePickyFunction(anInterface)

// So for types to be different they have to have different properties

// First way to tell types apart

type TypeOne = {
    prop1: string;
    commonProp: number;
}

type TypeTwo = {
    prop2: string;
    commonProp: number;
}

const one: TypeOne = {
    prop1: "typeOne",
    commonProp: 1
}
const two: TypeTwo = {
    prop2: "typeTwo",
    commonProp: 7
}

const typeOneOrTypeTwo = (arg: TypeOne | TypeTwo): string => {
    let result = ""
    if ("prop1" in arg) {
        result = result + arg.prop1
    } else {
        result = result + arg.prop2
    }

    return result + `${arg.commonProp}`
}

console.log(typeOneOrTypeTwo(one))
console.log(typeOneOrTypeTwo(two))

// the biggest problem I have with this approach is the brittleness to refactoring

// A different... but more verbose approach, a "discriminating union"

type SuccessResponse = {
    responseType: "SUCCESS";
    success: string;
}
type FailureResponse = {
    responseType: "FAILURE";
    error: string;
}

const handleResponses = (response: SuccessResponse | FailureResponse): string => {
    if (response.responseType === "SUCCESS") {
        return `Hurray, so much success: ${response.success}`
    } else {
        return `Oh no... better luck next time: ${response.error}`
    }
}

// can do with interface
enum ActionType {
    ACTION_ONE, ACTION_TWO, ACTION_THREE
}

interface Action {
    actionType: ActionType;
}

