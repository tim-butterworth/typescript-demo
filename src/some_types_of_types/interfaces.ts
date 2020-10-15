interface MyInterface {
    key1: string
}

const myInterfaceImpl: MyInterface = {
    key1: "some value"
}

// can extend interfaces
interface MyExtendingInterface extends MyInterface {
    key2: number
}

const myExtendingInterfaceImpl: MyExtendingInterface = {
    key1: "some other value",
    key2: 12
}

// can extend multiple interfaces
interface InterfaceOne {
    i1: string;
}
interface InterfaceTwo {
    i2: string;
}

interface ComboInterface extends InterfaceOne, InterfaceTwo {
    // you can add extra props
}

const combo: ComboInterface = {
    i1: "valud for i1",
    i2: "value for i2"
}

// This seems more like a bug than a feature... but one interesting thing about interfaces
interface ThisSeemsRealBad {
    prop1: string;
}
interface ThisSeemsRealBad {
    prop2: string;
}
interface ThisSeemsRealBad {
    prop3: number;
}

const realBad: ThisSeemsRealBad = {
    "prop1": "but",
    "prop2": "why?",
    "prop3": -1000
}