// Product type... fancy but actually pretty normal
type MyType = {
    key: string;
}


// Sum type... so fancy
type SumOfTypes = string | number | MyType;

const aValue: SumOfTypes = {
    key: "fancy string"
}

const someValue1: SumOfTypes = 0.1
const someValue2: SumOfTypes = "1"
const someValue3: SumOfTypes = {
    key: "1"
}


// on the topic of Sum types, type narrowing (and function completeness with the help of a tsconfig setting)
const printSumType = (v: SumOfTypes): string => {
    if (typeof v === "string") {
        return v
    } else if (typeof v === "number") {
        return `${v * 10}`
    } else {
        return v.key
    }
}

printSumType(someValue1)
printSumType(someValue2)
printSumType(someValue3)



// Typescript does not really care about the type names... it cares about the type shape
type ImposterType = { key: string };
const imposter: ImposterType = {
    key: "this is an imposter",
}
printSumType(imposter)

type BiggerImposterType = {
    key: string;
    anotherKey: number
};
const biggerImposter: BiggerImposterType = {
    key: "this is an imposter",
    anotherKey: 12
}
printSumType(biggerImposter)

// If you want you can just inline all your types (code gets so difficult to read)
const biggestImposter: {
    key: string;
    key2: number;
    key3: object;
    key4: string[];
    key5: () => void
} = {
    "key": "biggestImposter",
    "key2": 12,
    "key3": {},
    "key4": ["a", "b"],
    key5: () => {}
}
printSumType(biggestImposter)


// Literal types
type LiteralNumberList = 1 | 2 | 3;
const n: LiteralNumberList = 3

type LiteralStringList = "a" | "b" | "c";
const s: LiteralStringList = "a"

// I prefer enums though, because I think they are more discoverable... but they are more verbose
enum LiteralStringEnum {
    a = "a", b = "b", c = "c"
}
const es: LiteralStringEnum = LiteralStringEnum.a

