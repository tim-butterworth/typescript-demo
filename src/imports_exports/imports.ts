import {
    AType,
    MyInterface
} from "./exports"

const impl: AType = {
    "a": "something"
}
console.log(impl.a);

const myInterfaceImpl: MyInterface = {
    key: "value"
}
console.log(myInterfaceImpl.key)

// import the default

// import a, { MyInterface } from "./exports"
// console.log(a);
