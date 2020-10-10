// types and interfaces can just be combined

type AType = {
    typeKey: string;
}

interface AnInterface {
    interfaceKey: AType
}

type AnotherType = {
    anotherKey: AnInterface;
}

// interfaces have extends which can be applied to one or more other interfaces
interface AnotherInterface extends AnInterface {
    // extra stuff can go here
    additionalKey: string;
}

interface TypeExtendingInterface extends AType {}
const typeExtendingInterfaceImpl: TypeExtendingInterface = {
    "typeKey": "wow"
}

// sum/union types
type ASumType = string | number | { key: string };

const incomplete = <T>(a: never): T => {
    throw new Error()
}
const sumTypeFun = (arg: ASumType): void => {
    if (typeof arg === "string") {
        console.log(`${arg} was a string`)
    } else if (typeof arg === "number") {
        console.log(`${arg} was a number`)
    } else if (typeof arg === "boolean") {
        console.log(incomplete(arg))
    } else if (typeof arg === "object") {
        console.log(arg.key)
    } else {
        incomplete(arg)
    }
}

// product/intersection types
type ProductType = AType & AnotherType & { extraProp: number };

const extendedType: ProductType = {
    "anotherKey": {
        "interfaceKey": {
            "typeKey": ""
        }
    },
    "typeKey": "",
    "extraProp": 12
}

// interfaces can not extend all types, sum types give issues
/*
type ASumType = string | number;
interface ExtendASumType extends ASumType {
}
*/

/*
enum ActionType {
    A1, A2, A3
}
type ASumTypeWithCommonIntersection = { data: string; actionType: ActionType.A1 }
    | { data: string; actionType: ActionType.A2 }
    | { data: string; actionType: ActionType.A3 };

interface ExtendsASumType extends ASumTypeWithCommonIntersection {

}
*/

